import * as estree from 'estree'
import Scope from '../scope'
import evaluate from '.'

export function* Program(program: estree.Program, scope: Scope) {
  // Note: 'use strict' detection is now done in Sval.run() and Sval.runAsync()
  // before hoisting, since hoisting reorders function declarations to the beginning
  
  for (let i = 0; i < program.body.length; i++) {
    yield* evaluate(program.body[i], scope)
  }
}
