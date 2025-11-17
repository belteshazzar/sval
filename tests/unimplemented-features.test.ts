// NOTE: These tests are intentionally failing and are meant to drive implementation.
// The createRuntime() helper should be replaced with actual runtime creation code
// (e.g., new Sval(...)) and runtime.eval(...) or interpreter.run(...) to make these tests pass.

import { describe, it, expect } from 'vitest'

/**
 * Placeholder helper function that throws an error.
 * Replace this with actual runtime creation code to make tests pass.
 * Example replacement:
 *   import Sval from '../src'
 *   function createRuntime() {
 *     return new Sval({ ecmaVer: 'latest', sandBox: true })
 *   }
 */
function createRuntime() {
  throw new Error(
    'createRuntime() is not implemented. Replace this function with actual runtime creation code ' +
    '(e.g., new Sval({ ecmaVer: "latest" })) to make tests pass.'
  )
}

describe('Unimplemented Features', () => {
  it('should support private class fields', () => {
    const runtime = createRuntime()
    
    // TODO: Replace createRuntime() with the runtime creation and runtime.run(...) to make this pass
    // Example code to test:
    // runtime.run(`
    //   class Counter {
    //     #count = 0
    //     increment() { this.#count++ }
    //     getCount() { return this.#count }
    //   }
    //   const c = new Counter()
    //   c.increment()
    //   exports.count = c.getCount()
    // `)
    // expect(runtime.exports.count).toBe(1)
    
    expect(true).toBe(false) // Intentionally fail
  })

  it('should support static public class fields', () => {
    const runtime = createRuntime()
    
    // TODO: Replace createRuntime() with the runtime creation and runtime.run(...) to make this pass
    // Example code to test:
    // runtime.run(`
    //   class MyClass {
    //     static version = '1.0.0'
    //     static count = 0
    //   }
    //   exports.version = MyClass.version
    //   exports.count = MyClass.count
    // `)
    // expect(runtime.exports.version).toBe('1.0.0')
    // expect(runtime.exports.count).toBe(0)
    
    expect(true).toBe(false) // Intentionally fail
  })

  it('should support optional chaining (?.) operator', () => {
    const runtime = createRuntime()
    
    // TODO: Replace createRuntime() with the runtime creation and runtime.run(...) to make this pass
    // Example code to test:
    // runtime.run(`
    //   const obj = { a: { b: { c: 42 } } }
    //   const result1 = obj?.a?.b?.c
    //   const result2 = obj?.x?.y?.z
    //   exports.result1 = result1
    //   exports.result2 = result2
    // `)
    // expect(runtime.exports.result1).toBe(42)
    // expect(runtime.exports.result2).toBeUndefined()
    
    expect(true).toBe(false) // Intentionally fail
  })

  it('should support BigInt literals (1n)', () => {
    const runtime = createRuntime()
    
    // TODO: Replace createRuntime() with the runtime creation and runtime.run(...) to make this pass
    // Example code to test:
    // runtime.run(`
    //   const big1 = 9007199254740991n
    //   const big2 = BigInt(123)
    //   exports.big1 = big1
    //   exports.big2 = big2
    // `)
    // expect(runtime.exports.big1).toBe(9007199254740991n)
    // expect(runtime.exports.big2).toBe(123n)
    
    expect(true).toBe(false) // Intentionally fail
  })

  it('should support async generators', () => {
    const runtime = createRuntime()
    
    // TODO: Replace createRuntime() with the runtime creation and runtime.run(...) to make this pass
    // Example code to test:
    // runtime.run(`
    //   async function* asyncGen() {
    //     yield 1
    //     yield 2
    //     yield 3
    //   }
    //   exports.asyncGen = asyncGen
    // `)
    // Then test the async generator functionality
    
    expect(true).toBe(false) // Intentionally fail
  })

  it('should support import.meta', () => {
    const runtime = createRuntime()
    
    // TODO: Replace createRuntime() with the runtime creation and runtime.run(...) to make this pass
    // Example code to test:
    // runtime.run(`
    //   exports.hasImportMeta = typeof import.meta !== 'undefined'
    //   exports.importMeta = import.meta
    // `)
    // expect(runtime.exports.hasImportMeta).toBe(true)
    
    expect(true).toBe(false) // Intentionally fail
  })

  it('should support globalThis behavior', () => {
    const runtime = createRuntime()
    
    // TODO: Replace createRuntime() with the runtime creation and runtime.run(...) to make this pass
    // Example code to test:
    // runtime.run(`
    //   globalThis.testValue = 'global'
    //   exports.testValue = globalThis.testValue
    //   exports.hasGlobalThis = typeof globalThis !== 'undefined'
    // `)
    // expect(runtime.exports.hasGlobalThis).toBe(true)
    // expect(runtime.exports.testValue).toBe('global')
    
    expect(true).toBe(false) // Intentionally fail
  })
})
