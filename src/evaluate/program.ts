import * as acorn from 'acorn'
import Scope from '../scope/index.ts'
import evaluate from './index.ts'

export function* Program(program: acorn.Program, scope: Scope) {
  let result = undefined
  for (let i = 0; i < program.body.length; i++) {
    result = yield* evaluate(program.body[i], scope)
  }
  return result
}