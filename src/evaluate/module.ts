import * as estree from 'estree'
import Scope from '../scope'
import evaluate from '.'

/**
 * Import declarations
 */
export function* ImportDeclaration(
  node: estree.ImportDeclaration,
  scope: Scope
): IterableIterator<any> {
  const source = node.source.value as string
  
  // Get the module loader from the scope (checks module scope first, then global)
  const moduleLoader = scope.find('__moduleLoader__')?.get()
  
  if (!moduleLoader) {
    throw new Error('Module loader not available. Initialize Sval with sourceType: "module"')
  }
  
  // The module loader is a generator, we need to run it
  const module = yield* moduleLoader(source)
  
  if (!module) {
    throw new Error(`Failed to load module: ${source}`)
  }
  
  // Process import specifiers
  for (const specifier of node.specifiers) {
    if (specifier.type === 'ImportDefaultSpecifier') {
      // import foo from 'module'
      const localName = specifier.local.name
      scope.const(localName, module.default)
    } else if (specifier.type === 'ImportSpecifier') {
      // import { foo, bar as baz } from 'module'
      const importedName = specifier.imported.type === 'Identifier' 
        ? specifier.imported.name 
        : specifier.imported.value
      const localName = specifier.local.name
      scope.const(localName, module[importedName as string])
    } else if (specifier.type === 'ImportNamespaceSpecifier') {
      // import * as foo from 'module'
      const localName = specifier.local.name
      scope.const(localName, module)
    }
  }
}

/**
 * Export named declaration
 */
export function* ExportNamedDeclaration(
  node: estree.ExportNamedDeclaration,
  scope: Scope
): IterableIterator<any> {
  const exports = scope.find('__moduleExports__')?.get()
  
  if (!exports) {
    throw new Error('Module exports not available. Initialize Sval with sourceType: "module"')
  }
  
  if (node.declaration) {
    // export const x = 1
    // export function foo() {}
    // export class Bar {}
    yield* evaluate(node.declaration, scope)
    
    if (node.declaration.type === 'VariableDeclaration') {
      // Handle variable declarations
      for (const declarator of node.declaration.declarations) {
        if (declarator.id.type === 'Identifier') {
          const name = declarator.id.name
          const value = scope.find(name)?.get()
          exports[name] = value
        }
      }
    } else if (node.declaration.type === 'FunctionDeclaration' || 
               node.declaration.type === 'ClassDeclaration') {
      // Handle function/class declarations
      const name = node.declaration.id.name
      const value = scope.find(name)?.get()
      exports[name] = value
    }
  } else if (node.specifiers) {
    // export { x, y as z }
    for (const specifier of node.specifiers) {
      if (specifier.type === 'ExportSpecifier') {
        const localName = specifier.local.type === 'Identifier'
          ? specifier.local.name
          : specifier.local.value
        const exportedName = specifier.exported.type === 'Identifier'
          ? specifier.exported.name
          : specifier.exported.value
        
        const value = scope.find(localName as string)?.get()
        exports[exportedName as string] = value
      }
    }
  }
  
  if (node.source) {
    // export { x, y } from 'module' - re-export from another module
    const source = node.source.value as string
    const moduleLoader = scope.find('__moduleLoader__')?.get()
    
    if (!moduleLoader) {
      throw new Error('Module loader not available')
    }
    
    const module = yield* moduleLoader(source)
    
    for (const specifier of node.specifiers) {
      if (specifier.type === 'ExportSpecifier') {
        const localName = specifier.local.type === 'Identifier'
          ? specifier.local.name
          : specifier.local.value
        const exportedName = specifier.exported.type === 'Identifier'
          ? specifier.exported.name
          : specifier.exported.value
        
        exports[exportedName as string] = module[localName as string]
      }
    }
  }
}

/**
 * Export default declaration
 */
export function* ExportDefaultDeclaration(
  node: estree.ExportDefaultDeclaration,
  scope: Scope
): IterableIterator<any> {
  const exports = scope.find('__moduleExports__')?.get()
  
  if (!exports) {
    throw new Error('Module exports not available. Initialize Sval with sourceType: "module"')
  }
  
  let value: any
  
  if (node.declaration.type === 'FunctionDeclaration' || 
      node.declaration.type === 'ClassDeclaration') {
    // export default function foo() {} or export default class Foo {}
    yield* evaluate(node.declaration, scope)
    const name = node.declaration.id?.name
    if (name) {
      value = scope.find(name)?.get()
    }
  } else {
    // export default expression
    value = yield* evaluate(node.declaration, scope)
  }
  
  exports.default = value
}

/**
 * Export all declaration
 */
export function* ExportAllDeclaration(
  node: estree.ExportAllDeclaration,
  scope: Scope
): IterableIterator<any> {
  const exports = scope.find('__moduleExports__')?.get()
  
  if (!exports) {
    throw new Error('Module exports not available. Initialize Sval with sourceType: "module"')
  }
  
  const source = node.source.value as string
  const moduleLoader = scope.find('__moduleLoader__')?.get()
  
  if (!moduleLoader) {
    throw new Error('Module loader not available')
  }
  
  const module = yield* moduleLoader(source)
  
  if (node.exported) {
    // export * as ns from 'module'
    const exportedName = node.exported.type === 'Identifier'
      ? node.exported.name
      : node.exported.value
    exports[exportedName as string] = module
  } else {
    // export * from 'module'
    for (const key in module) {
      if (key !== 'default') {
        exports[key] = module[key]
      }
    }
  }
}

/**
 * Import expression (dynamic import)
 */
export function* ImportExpression(
  node: estree.ImportExpression,
  scope: Scope
): IterableIterator<any> {
  const source = yield* evaluate(node.source, scope)
  
  const moduleLoader = scope.find('__moduleLoader__')?.get()
  
  if (!moduleLoader) {
    throw new Error('Module loader not available. Initialize Sval with sourceType: "module"')
  }
  
  // Dynamic import - run the module loader generator
  return yield* moduleLoader(source)
}
