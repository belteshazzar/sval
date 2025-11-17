import Sval from '../src'

/**
 * Tests for unimplemented language features
 * These tests are expected to fail until the features are implemented
 */

describe('Unimplemented Features - WithStatement', () => {
  it('should handle basic with statement', () => {
    const interpreter = new Sval({ ecmaVer: 'latest' })
    
    expect(() => {
      interpreter.run(`
        const obj = { x: 10, y: 20 }
        with (obj) {
          exports.result = x + y
        }
      `)
    }).toThrow(/WithStatement isn't implemented/)
  })

  it('should handle nested with statements', () => {
    const interpreter = new Sval({ ecmaVer: 'latest' })
    
    expect(() => {
      interpreter.run(`
        const obj1 = { x: 1 }
        const obj2 = { y: 2 }
        with (obj1) {
          with (obj2) {
            exports.result = x + y
          }
        }
      `)
    }).toThrow(/WithStatement isn't implemented/)
  })
})

describe('Unimplemented Features - LabeledStatement', () => {
  it('should handle labeled break statement', () => {
    const interpreter = new Sval({ ecmaVer: 'latest' })
    
    expect(() => {
      interpreter.run(`
        exports.result = 0
        outer: for (let i = 0; i < 3; i++) {
          for (let j = 0; j < 3; j++) {
            if (i === 1 && j === 1) {
              break outer
            }
            exports.result++
          }
        }
      `)
    }).toThrow(/LabeledStatement isn't implemented/)
  })

  it('should handle labeled continue statement', () => {
    const interpreter = new Sval({ ecmaVer: 'latest' })
    
    expect(() => {
      interpreter.run(`
        exports.result = 0
        outer: for (let i = 0; i < 3; i++) {
          for (let j = 0; j < 3; j++) {
            if (j === 1) {
              continue outer
            }
            exports.result++
          }
        }
      `)
    }).toThrow(/LabeledStatement isn't implemented/)
  })

  it('should handle labeled statement with blocks', () => {
    const interpreter = new Sval({ ecmaVer: 'latest' })
    
    expect(() => {
      interpreter.run(`
        myLabel: {
          exports.x = 1
          break myLabel
          exports.x = 2
        }
      `)
    }).toThrow(/LabeledStatement isn't implemented/)
  })
})

describe('Unimplemented Features - PropertyDefinition (ES2022 Class Fields)', () => {
  it('should handle public class fields', () => {
    const interpreter = new Sval({ ecmaVer: 'latest' })
    
    // PropertyDefinition is currently silently skipped, so fields are undefined
    interpreter.run(`
      class MyClass {
        x = 10
        y = 20
        
        getSum() {
          return this.x + this.y
        }
      }
      
      const instance = new MyClass()
      exports.result = instance.getSum()
      exports.x = instance.x
      exports.y = instance.y
    `)
    
    // Fields are not initialized (silently skipped)
    expect(interpreter.exports.x).toBeUndefined()
    expect(interpreter.exports.y).toBeUndefined()
    expect(interpreter.exports.result).toBeNaN()
    
    // TODO: When implemented, these should be:
    // expect(interpreter.exports.x).toBe(10)
    // expect(interpreter.exports.y).toBe(20)
    // expect(interpreter.exports.result).toBe(30)
  })

  it('should handle static class fields', () => {
    const interpreter = new Sval({ ecmaVer: 'latest' })
    
    // Static fields are also silently skipped
    interpreter.run(`
      class MyClass {
        static count = 0
        
        constructor() {
          MyClass.count++
        }
      }
      
      new MyClass()
      new MyClass()
      exports.result = MyClass.count
    `)
    
    // Field is not initialized (silently skipped)
    // count starts as undefined, so ++ makes it NaN
    expect(interpreter.exports.result).toBeNaN()
    
    // TODO: When implemented, should be:
    // expect(interpreter.exports.result).toBe(2)
  })

  it('should handle computed class field names', () => {
    const interpreter = new Sval({ ecmaVer: 'latest' })
    
    // Computed field names are also silently skipped
    interpreter.run(`
      const prop = 'dynamic'
      class MyClass {
        [prop] = 'value'
      }
      
      const instance = new MyClass()
      exports.result = instance.dynamic
    `)
    
    // Field is not initialized
    expect(interpreter.exports.result).toBeUndefined()
    
    // TODO: When implemented, should be:
    // expect(interpreter.exports.result).toBe('value')
  })

  it('should handle class fields with initializers', () => {
    const interpreter = new Sval({ ecmaVer: 'latest' })
    
    // Field initializers are silently skipped
    interpreter.run(`
      class MyClass {
        x = 1 + 1
        y = this.x * 2
      }
      
      const instance = new MyClass()
      exports.x = instance.x
      exports.y = instance.y
    `)
    
    // Fields are not initialized
    expect(interpreter.exports.x).toBeUndefined()
    expect(interpreter.exports.y).toBeUndefined()
    
    // TODO: When implemented, should be:
    // expect(interpreter.exports.x).toBe(2)
    // expect(interpreter.exports.y).toBe(4)
  })
})

describe('Unimplemented Features - PrivateIdentifier (ES2022 Private Fields)', () => {
  it('should handle private class fields', () => {
    const interpreter = new Sval({ ecmaVer: 'latest' })
    
    // Private fields are silently skipped (treated as undefined)
    interpreter.run(`
      class MyClass {
        #private = 42
        
        getPrivate() {
          return this.#private
        }
      }
      
      const instance = new MyClass()
      exports.result = instance.getPrivate()
    `)
    
    // Private field is not initialized, returns undefined
    expect(interpreter.exports.result).toBeUndefined()
    
    // TODO: When implemented, should be:
    // expect(interpreter.exports.result).toBe(42)
  })

  it('should handle private methods', () => {
    const interpreter = new Sval({ ecmaVer: 'latest' })
    
    // Private methods are also silently skipped
    interpreter.run(`
      class MyClass {
        #privateMethod() {
          return 'private'
        }
        
        public() {
          return this.#privateMethod()
        }
      }
      
      const instance = new MyClass()
      exports.result = instance.public()
    `)
    
    // Private method doesn't exist, returns undefined
    expect(interpreter.exports.result).toBeUndefined()
    
    // TODO: When implemented, should be:
    // expect(interpreter.exports.result).toBe('private')
  })

  it('should handle static private fields', () => {
    const interpreter = new Sval({ ecmaVer: 'latest' })
    
    // Static private fields are silently skipped
    interpreter.run(`
      class MyClass {
        static #privateStatic = 100
        
        static getPrivate() {
          return MyClass.#privateStatic
        }
      }
      
      exports.result = MyClass.getPrivate()
    `)
    
    // Static private field doesn't exist, returns undefined
    expect(interpreter.exports.result).toBeUndefined()
    
    // TODO: When implemented, should be:
    // expect(interpreter.exports.result).toBe(100)
  })
})

describe('Unimplemented Features - StaticBlock (ES2022)', () => {
  it('should handle static initialization blocks', () => {
    const interpreter = new Sval({ ecmaVer: 'latest' })
    
    // Static blocks are silently skipped
    interpreter.run(`
      class MyClass {
        static value
        
        static {
          this.value = 42
        }
      }
      
      exports.result = MyClass.value
    `)
    
    // Static block didn't run, value is undefined
    expect(interpreter.exports.result).toBeUndefined()
    
    // TODO: When implemented, should be:
    // expect(interpreter.exports.result).toBe(42)
  })

  it('should handle multiple static blocks', () => {
    const interpreter = new Sval({ ecmaVer: 'latest' })
    
    // Multiple static blocks are all silently skipped
    interpreter.run(`
      class MyClass {
        static x
        static y
        
        static {
          this.x = 1
        }
        
        static {
          this.y = this.x + 1
        }
      }
      
      exports.x = MyClass.x
      exports.y = MyClass.y
    `)
    
    // Static blocks didn't run, values are undefined
    expect(interpreter.exports.x).toBeUndefined()
    expect(interpreter.exports.y).toBeUndefined()
    
    // TODO: When implemented, should be:
    // expect(interpreter.exports.x).toBe(1)
    // expect(interpreter.exports.y).toBe(2)
  })
})

describe('Unimplemented Features - ImportExpression (Dynamic Import)', () => {
  it('should handle dynamic import expressions', () => {
    const interpreter = new Sval({ ecmaVer: 'latest' })
    
    // ImportExpression is silently treated as undefined
    interpreter.run(`
      async function loadModule() {
        const module = await import('./some-module.js')
        return module.default
      }
      
      exports.loader = loadModule
      exports.loaderType = typeof loadModule
    `)
    
    // Function is created but import() returns undefined
    expect(interpreter.exports.loaderType).toBe('function')
    
    // TODO: When implemented, import() should actually load modules
    // For now, it's silently skipped/undefined
  })

  it('should handle dynamic import with computed paths', () => {
    const interpreter = new Sval({ ecmaVer: 'latest' })
    
    // Dynamic import with template literals
    interpreter.run(`
      async function loadModule(name) {
        const module = await import(\`./\${name}.js\`)
        return module
      }
      
      exports.loader = loadModule
      exports.loaderType = typeof loadModule
    `)
    
    // Function is created
    expect(interpreter.exports.loaderType).toBe('function')
    
    // TODO: When implemented, should actually load modules dynamically
  })
})

describe('Unimplemented Features - ES6 Modules (Import/Export)', () => {
  // Note: These tests expect parsing errors because modules require sourceType: 'module'
  // Sval doesn't currently support module parsing
  
  it('should handle import declarations', () => {
    const interpreter = new Sval({ ecmaVer: 'latest' })
    
    expect(() => {
      interpreter.run(`
        import foo from 'module'
        exports.foo = foo
      `)
    }).toThrow(/may appear only with 'sourceType: module'/)
  })

  it('should handle named imports', () => {
    const interpreter = new Sval({ ecmaVer: 'latest' })
    
    expect(() => {
      interpreter.run(`
        import { foo, bar } from 'module'
        exports.foo = foo
        exports.bar = bar
      `)
    }).toThrow(/may appear only with 'sourceType: module'/)
  })

  it('should handle namespace imports', () => {
    const interpreter = new Sval({ ecmaVer: 'latest' })
    
    expect(() => {
      interpreter.run(`
        import * as module from 'module'
        exports.module = module
      `)
    }).toThrow(/may appear only with 'sourceType: module'/)
  })

  it('should handle export declarations', () => {
    const interpreter = new Sval({ ecmaVer: 'latest' })
    
    expect(() => {
      interpreter.run(`
        export const x = 1
      `)
    }).toThrow(/may appear only with 'sourceType: module'/)
  })

  it('should handle default exports', () => {
    const interpreter = new Sval({ ecmaVer: 'latest' })
    
    expect(() => {
      interpreter.run(`
        export default function() {
          return 42
        }
      `)
    }).toThrow(/may appear only with 'sourceType: module'/)
  })

  it('should handle export all', () => {
    const interpreter = new Sval({ ecmaVer: 'latest' })
    
    expect(() => {
      interpreter.run(`
        export * from 'module'
      `)
    }).toThrow(/may appear only with 'sourceType: module'/)
  })

  it('should handle re-exports', () => {
    const interpreter = new Sval({ ecmaVer: 'latest' })
    
    expect(() => {
      interpreter.run(`
        export { foo, bar } from 'module'
      `)
    }).toThrow(/may appear only with 'sourceType: module'/)
  })
})

describe('Unimplemented Features - RegExpLiteral', () => {
  it('should handle RegExp literals with unicode flag', () => {
    const interpreter = new Sval({ ecmaVer: 'latest' })
    
    // Note: Regular RegExp should work, but certain flags might not be fully supported
    interpreter.run(`
      const re = /test/gi
      exports.result = re.test('TEST')
    `)
    
    expect(interpreter.exports.result).toBe(true)
  })

  it('should handle RegExp with various flags', () => {
    const interpreter = new Sval({ ecmaVer: 'latest' })
    
    interpreter.run(`
      const re1 = /abc/
      const re2 = /abc/i
      const re3 = /abc/g
      const re4 = /abc/m
      const re5 = /abc/s
      const re6 = /abc/u
      const re7 = /abc/y
      
      exports.flags = {
        none: re1.flags,
        i: re2.flags,
        g: re3.flags,
        m: re4.flags,
        s: re5.flags,
        u: re6.flags,
        y: re7.flags,
      }
    `)
    
    expect(interpreter.exports.flags.none).toBe('')
    expect(interpreter.exports.flags.i).toBe('i')
    expect(interpreter.exports.flags.g).toBe('g')
  })
})
