import { RETURN, SUPER, NOCTOR, CLSCTOR, NEWTARGET, SUPERCALL } from '../share/const'
import { VariableDeclaration, ClassBody } from './declaration'
import { runAsync, runAsyncOptions } from '../share/async'
import { define, inherits, assign } from '../share/util'
import { Identifier } from '../evaluate_n/identifier'
import { BlockStatement } from './statement'
import * as estree from 'estree'
import Scope from '../scope'
import evaluate from '.'

import {
  PatternOptions,
  ObjectPattern,
  ArrayPattern,
  RestElement,
  AssignmentPattern
} from './pattern'

export interface hoistOptions {
  onlyBlock?: boolean
}

export function* hoist(
  block: estree.Program | estree.BlockStatement,
  scope: Scope,
  options: hoistOptions = {}
) {
  const { onlyBlock = false } = options
  const funcDclrList: any[] = []
  const funcDclrIdxs: number[] = []
  for (let i = 0; i < block.body.length; i++) {
    const statement = block.body[i]
    if (statement.type === 'FunctionDeclaration') {
      funcDclrList.push(statement)
      funcDclrIdxs.push(i)
    } else if (
      statement.type === 'VariableDeclaration'
      && ['const', 'let'].indexOf(statement.kind) !== -1
    ) {
      yield* VariableDeclaration(statement, scope, { hoist: true, onlyBlock: true })
    } else if (!onlyBlock) {
      yield* hoistVarRecursion(statement as estree.Statement, scope)
    }
  }
  if (funcDclrIdxs.length) {
    for (let i = funcDclrIdxs.length - 1; i > -1; i--) {
      block.body.splice(funcDclrIdxs[i], 1)
    }
    block.body = funcDclrList.concat(block.body)
  }
}

function* hoistVarRecursion(statement: estree.Statement, scope: Scope): IterableIterator<any> {
  switch (statement.type) {
    case 'VariableDeclaration':
      yield* VariableDeclaration(statement, scope, { hoist: true })
      break
    case 'ForInStatement':
    case 'ForOfStatement':
      if (statement.left.type === 'VariableDeclaration') {
        yield* VariableDeclaration(statement.left, scope, { hoist: true })
      }
    case 'ForStatement':
      if (statement.type === 'ForStatement' && statement.init.type === 'VariableDeclaration') {
        yield* VariableDeclaration(statement.init, scope, { hoist: true })
      }
    case 'WhileStatement':
    case 'DoWhileStatement':
      yield* hoistVarRecursion(statement.body, scope)
      break
    case 'IfStatement':
      yield* hoistVarRecursion(statement.consequent, scope)
      if (statement.alternate) {
        yield* hoistVarRecursion(statement.alternate, scope)
      }
      break
    case 'BlockStatement':
      for (let i = 0; i < statement.body.length; i++) {
        yield* hoistVarRecursion(statement.body[i], scope)
      }
      break
    case 'SwitchStatement':
      for (let i = 0; i < statement.cases.length; i++) {
        for (let j = 0; j < statement.cases[i].consequent.length; j++) {
          yield* hoistVarRecursion(statement.cases[i].consequent[j], scope)
        }
      }
      break
    case 'TryStatement': {
      const tryBlock = statement.block.body
      for (let i = 0; i < tryBlock.length; i++) {
        yield* hoistVarRecursion(tryBlock[i], scope)
      }
      const catchBlock = statement.handler && statement.handler.body.body
      if (catchBlock) {
        for (let i = 0; i < catchBlock.length; i++) {
          yield* hoistVarRecursion(catchBlock[i], scope)
        }
      }
      const finalBlock = statement.finalizer && statement.finalizer.body
      if (finalBlock) {
        for (let i = 0; i < finalBlock.length; i++) {
          yield* hoistVarRecursion(finalBlock[i], scope)
        }
      }
      break
    }
  }
}

export function* pattern(node: estree.Pattern, scope: Scope, options: PatternOptions = {}): IterableIterator<any> {
  switch (node.type) {
    case 'ObjectPattern':
      return yield* ObjectPattern(node, scope, options)
    case 'ArrayPattern':
      return yield* ArrayPattern(node, scope, options)
    case 'RestElement':
      return yield* RestElement(node, scope, options)
    case 'AssignmentPattern':
      return yield* AssignmentPattern(node, scope, options)
    default:
      throw new SyntaxError('Unexpected token')
  }
}

export interface CtorOptions {
  superClass?: (...args: any[]) => any
  isCtor?: boolean
}

import { createFunc as createAnotherFunc } from /*<replace by:='../evaluate/helper'>*/'../evaluate_n/helper'/*</replace>*/
export function createFunc(
  node: estree.FunctionDeclaration | estree.FunctionExpression | estree.ArrowFunctionExpression,
  scope: Scope,
  options: CtorOptions = {}
): any {
  if (/*<replace by:=node.generator\s||\snode.async>*/!node.generator && !node.async/*</replace>*/) {
    return createAnotherFunc(node, scope, options)
  }

  const { superClass, isCtor } = options
  const params = node.params
  const tmpFunc = function* (...args: any[]) {
    const subScope: Scope = new Scope(scope, true)
    if (node.type !== 'ArrowFunctionExpression') {
      subScope.const('this', this)
      subScope.let('arguments', arguments)
      // Check if new.target was overridden by class wrapper
      const actualNewTarget = (tmpFunc as any).__currentNewTarget || new.target
      subScope.const(NEWTARGET, actualNewTarget)
      if (superClass) {
        subScope.const(SUPER, superClass)
        if (isCtor) subScope.let(SUPERCALL, false)
      }
    }

    for (let i = 0; i < params.length; i++) {
      const param = params[i]
      if (param.type === 'Identifier') {
        subScope.var(param.name, args[i])
      } else if (param.type === 'RestElement') {
        yield* RestElement(param, subScope, { kind: 'var', feed: args.slice(i) })
      } else {
        yield* pattern(param, subScope, { feed: args[i] })
      }
    }

    let result: any
    if (node.body.type === 'BlockStatement') {
      yield* hoist(node.body, subScope)
      result = yield* BlockStatement(node.body, subScope, {
        invasived: true,
        hoisted: true
      })
    } else {
      result = yield* evaluate(node.body, subScope)
      if (node.type === 'ArrowFunctionExpression') {
        RETURN.RES = result
        result = RETURN
      }
    }

    if (result === RETURN) {
      return result.RES
    }
  }

  let func: any /*<add>*//*= tmpFunc*//*</add>*/
  /*<remove>*/
  if (node.async && node.generator) {
    func = function (): AsyncIterator<any> {
      const iterator = tmpFunc.apply(this, arguments)
      let last: Promise<any> = Promise.resolve()
      let hasCatch = false
      const run = (opts: runAsyncOptions) =>
        last = last
          .then(() => runAsync(iterator, assign({ fullRet: true }, opts)))
          .catch(err => {
            if (!hasCatch) {
              hasCatch = true
              return Promise.reject(err)
            }
          })
      const asyncIterator: AsyncIterator<any> = {
        next: (res?: any) => run({ res }),
        throw: (err?: any) => run({ err }),
        return: (ret?: any) => run({ ret })
      }
      if (typeof Symbol === 'function') {
        (asyncIterator as any)[Symbol.iterator] = function () { return this }
      }
      return asyncIterator
    }
  } else if (node.async) {
    func = function () { return runAsync(tmpFunc.apply(this, arguments)) }
  } else {
    func = tmpFunc
  }
  define(func, NOCTOR, { value: true })
  /*</remove>*/
  /*<add>*//*
  if (node.type === 'ArrowFunctionExpression') {
    define(func, NOCTOR, { value: true })
  }
  *//*</add>*/

  define(func, 'name', {
    value: (node as estree.FunctionDeclaration).id
      && (node as estree.FunctionDeclaration).id.name
      || '',
    configurable: true
  })
  define(func, 'length', {
    value: params.length,
    configurable: true
  })

  return func
}

export function* createClass(
  node: estree.ClassDeclaration | estree.ClassExpression,
  scope: Scope,
) {
  const superClass = yield* evaluate(node.superClass, scope)

  // WeakMaps for private fields (proper encapsulation)
  const privateInstanceFields = new WeakMap()
  const privateStaticFields = new Map()

  // Collect static blocks (just scan the body, don't execute yet)
  const methodBody = node.body.body
  const staticBlocks: Array<any> = []
  
  // Find constructor and collect field definitions
  let originalCtor: any = null
  const instanceFieldDefs: Array<{key: any, valueNode: any, isPrivate: boolean}> = []
  const staticFields: Array<{key: any, value: any, isPrivate: boolean}> = []
  
  for (let i = 0; i < methodBody.length; i++) {
    const method = methodBody[i]
    if (method.type === 'MethodDefinition' && method.kind === 'constructor') {
      originalCtor = yield* createFunc(method.value, scope, { superClass, isCtor: true })
    } else if (method.type === 'PropertyDefinition') {
      const isPrivate = method.key.type === 'PrivateIdentifier'
      let key: any
      
      if (isPrivate) {
        // Private field: use symbol as key
        key = Symbol.for(`private:${(method.key as estree.PrivateIdentifier).name}`)
      } else if (method.computed) {
        key = yield* evaluate(method.key, scope)
      } else {
        key = method.key.type === 'Identifier' ? method.key.name : yield* evaluate(method.key, scope)
      }
      
      if (method.static) {
        // Static fields are evaluated once during class creation
        const value = method.value ? yield* evaluate(method.value, scope) : undefined
        staticFields.push({ key, value, isPrivate })
      } else {
        // Instance fields: store the expression node to evaluate per-instance
        instanceFieldDefs.push({ key, valueNode: method.value, isPrivate })
      }
    } else if (method.type === 'StaticBlock') {
      // Collect static blocks for later execution
      staticBlocks.push(method)
    }
  }

  // Create class constructor
  let klass: any
  
  if (originalCtor) {
    // Wrap constructor to initialize fields first
    // Store reference so we can access it before it's fully initialized
    let klassRef: any
    klass = klassRef = function (this: any, ...args: any[]) {
      // Create private data storage immediately so constructor can access private members
      const privateData: any = {}
      
      // Add private instance methods to private data
      const privateMethods = klassRef.__privateInstanceMethods
      if (privateMethods) {
        privateMethods.forEach((method: any, key: symbol) => {
          privateData[key] = method
        })
      }
      
      // Initialize private field slots (set to undefined initially)
      for (let i = 0; i < instanceFieldDefs.length; i++) {
        const field = instanceFieldDefs[i]
        if (field.isPrivate) {
          privateData[field.key] = undefined
        }
      }
      
      // Store private data in WeakMap BEFORE running initializers or constructor
      if (Object.keys(privateData).length > 0 || Object.getOwnPropertySymbols(privateData).length > 0) {
        privateInstanceFields.set(this, privateData)
      }
      
      // Initialize instance fields before constructor body
      // Field initializers are evaluated in the context of each new instance
      for (let i = 0; i < instanceFieldDefs.length; i++) {
        const field = instanceFieldDefs[i]
        const subScope = new Scope(scope, false)
        subScope.const('this', this)
        // Evaluate field initializer - note this wrapper isn't a generator
        // so we can't use yield*, but evaluate() in generator version returns a generator
        const result = field.valueNode ? evaluate(field.valueNode, subScope) : undefined
        const value = result && typeof result.next === 'function' ? Array.from(result).pop() : result
        
        if (field.isPrivate) {
          // Update private field in WeakMap
          privateData[field.key] = value
        } else {
          // Public field stored directly on instance
          this[field.key] = value
        }
      }
      
      // Store the class ref in a place originalCtor can find it
      // Then call originalCtor with the current new.target (which is klassRef)
      originalCtor.__currentNewTarget = new.target || klassRef
      const result = originalCtor.call(this, ...args)
      delete originalCtor.__currentNewTarget
      // If constructor explicitly returns an object, use it
      return typeof result === 'object' && result !== null ? result : this
    }
  } else {
    // No constructor - create default one
    klass = function (this: any) {
      // Create private data storage immediately
      const privateData: any = {}
      
      // Add private instance methods to private data
      const privateMethods = klass.__privateInstanceMethods
      if (privateMethods) {
        privateMethods.forEach((method: any, key: symbol) => {
          privateData[key] = method
        })
      }
      
      // Initialize private field slots
      for (let i = 0; i < instanceFieldDefs.length; i++) {
        const field = instanceFieldDefs[i]
        if (field.isPrivate) {
          privateData[field.key] = undefined
        }
      }
      
      // Store private data in WeakMap BEFORE running initializers
      if (Object.keys(privateData).length > 0 || Object.getOwnPropertySymbols(privateData).length > 0) {
        privateInstanceFields.set(this, privateData)
      }
      
      // Initialize instance fields
      for (let i = 0; i < instanceFieldDefs.length; i++) {
        const field = instanceFieldDefs[i]
        const subScope = new Scope(scope, false)
        subScope.const('this', this)
        const value = field.valueNode ? evaluate(field.valueNode, subScope) : undefined
        
        if (field.isPrivate) {
          // Update private field in WeakMap
          privateData[field.key] = value
        } else {
          // Public field stored directly on instance
          this[field.key] = value
        }
      }
      
      // Call super if exists
      if (superClass) {
        superClass.apply(this)
      }
    }
  }

  if (superClass) {
    inherits(klass, superClass)
  }

  // Store private field maps on the class for access during member expressions
  define(klass, '__privateInstanceFields', { value: privateInstanceFields })
  define(klass, '__privateStaticFields', { value: privateStaticFields })

  // Add methods to prototype (ClassBody will skip PropertyDefinition nodes when klass is present)
  yield* ClassBody(node.body, scope, { klass, superClass })

  // Initialize static fields on the class
  for (let i = 0; i < staticFields.length; i++) {
    const field = staticFields[i]
    if (field.isPrivate) {
      // Store static private field in Map
      privateStaticFields.set(field.key, field.value)
    } else {
      // Public static field stored directly on class
      klass[field.key] = field.value
    }
  }

  // Execute static initialization blocks
  for (let i = 0; i < staticBlocks.length; i++) {
    const block = staticBlocks[i]
    const staticScope = new Scope(scope, true)
    staticScope.const('this', klass)
    // Static blocks have access to private static fields
    for (let j = 0; j < block.body.length; j++) {
      yield* evaluate(block.body[j], staticScope)
    }
  }

  define(klass, CLSCTOR, { value: true })
  define(klass, 'name', {
    value: node.id && node.id.name || '',
    configurable: true
  })

  return klass
}

export interface ForXHandlerOptions {
  value: any
}

export function* ForXHandler(
  node: estree.ForInStatement | estree.ForOfStatement,
  scope: Scope,
  options: ForXHandlerOptions
) {
  const { value } = options
  const left = node.left

  const subScope = new Scope(scope)
  if (left.type === 'VariableDeclaration') {
    yield* VariableDeclaration(left, subScope, { feed: value })
  } else if (left.type === 'Identifier') {
    const variable = yield* Identifier(left, scope, { getVar: true })
    variable.set(value)
  } else {
    yield* pattern(left, scope, { feed: value })
  }

  let result: any
  if (node.body.type === 'BlockStatement') {
    result = yield* BlockStatement(node.body, subScope, { invasived: true })
  } else {
    result = yield* evaluate(node.body, subScope)
  }
  return result
}