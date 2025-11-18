import { pattern, createFunc, createClass } from './helper'
import { define, getDptor, assign } from '../share/util'
import { NOINIT, DEADZONE } from '../share/const'
import { VarKind } from '../scope/variable'
import * as estree from 'estree'
import Scope from '../scope'
import evaluate from '.'

export function* FunctionDeclaration(
  node: estree.FunctionDeclaration,
  scope: Scope
): IterableIterator<any> {
  scope.func(node.id.name, createFunc(node, scope))
}

export interface VariableDeclarationOptions {
  hoist?: boolean
  onlyBlock?: boolean
  feed?: any
}

export function* VariableDeclaration(
  node: estree.VariableDeclaration,
  scope: Scope,
  options: VariableDeclarationOptions = {},
) {
  for (let i = 0; i < node.declarations.length; i++) {
    // Cast 'using' and 'await using' to 'const' for now (ES2025 feature not fully implemented)
    const kind = (node.kind === 'using' || node.kind === 'await using') ? 'const' : node.kind
    yield* VariableDeclarator(node.declarations[i], scope, assign({ kind }, options))
  }
}

export interface VariableDeclaratorOptions {
  kind?: VarKind
}

export function* VariableDeclarator(
  node: estree.VariableDeclarator,
  scope: Scope,
  options: VariableDeclaratorOptions & VariableDeclarationOptions = {},
) {
  const { kind = 'var', hoist = false, onlyBlock = false, feed } = options
  if (hoist) {
    if (onlyBlock || kind === 'var') {
      if (node.id.type === 'Identifier') {
        scope[kind](node.id.name, onlyBlock ? DEADZONE : kind === 'var' ? NOINIT : undefined)
      } else {
        yield* pattern(node.id, scope, { kind, hoist, onlyBlock })
      }
    }
  } else {
    const hasFeed = 'feed' in options
    const value = hasFeed ? feed : yield* evaluate(node.init, scope)
    if (node.id.type === 'Identifier') {
      const name = node.id.name
      if (kind === 'var' && !node.init && !hasFeed) {
        scope.var(name, NOINIT)
      } else {
        scope[kind](name, value)
      }
      if (
        node.init
        && ['ClassExpression', 'FunctionExpression', 'ArrowFunctionExpression']
          .indexOf(node.init.type) !== -1
        && !value.name
      ) {
        define(value, 'name', {
          value: name,
          configurable: true
        })
      }
    } else {
      yield* pattern(node.id, scope, { kind, feed: value })
    }
  }
}

export function* ClassDeclaration(
  node: estree.ClassDeclaration,
  scope: Scope
): IterableIterator<any> {
  scope.func(node.id.name, yield* createClass(node, scope))
}

export interface ClassOptions {
  klass?: (...args: any[]) => void,
  superClass?: (...args: any[]) => void
}

export function* ClassBody(node: estree.ClassBody, scope: Scope, options: ClassOptions = {}): IterableIterator<any> {
  const { klass, superClass } = options

  for (let i = 0; i < node.body.length; i++) {
    const member = node.body[i]
    
    if (member.type === 'MethodDefinition') {
      yield* MethodDefinition(member, scope, { klass, superClass })
    } else if (member.type === 'PropertyDefinition') {
      // ES2022 Class fields - handled in createClass, skip here
      continue
    } else if (member.type === 'StaticBlock') {
      // ES2022 Static initialization blocks - not yet implemented
      continue
    }
  }
}

export function* MethodDefinition(node: estree.MethodDefinition, scope: Scope, options: ClassOptions = {}) {
  const { klass, superClass } = options

  let key: string
  if (node.computed) {
    key = yield* evaluate(node.key, scope)
  } else if (node.key.type === 'Identifier') {
    key = node.key.name
  } else {
    throw new SyntaxError('Unexpected token')
  }

  const obj = node.static ? klass : klass.prototype
  const value = yield* createFunc(node.value, scope, { superClass })

  switch (node.kind) {
    case 'constructor':
      break
    case 'method':
      define(obj, key, {
        value,
        writable: true,
        configurable: true,
      })
      break
    case 'get': {
      const oriDptor = getDptor(obj, key)
      define(obj, key, {
        get: value,
        set: oriDptor && oriDptor.set,
        configurable: true,
      })
      break
    }
    case 'set': {
      const oriDptor = getDptor(obj, key)
      define(obj, key, {
        get: oriDptor && oriDptor.get,
        set: value,
        configurable: true,
      })
      break
    }
    default:
      throw new SyntaxError('Unexpected token')
  } 
}
