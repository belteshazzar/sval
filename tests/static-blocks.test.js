import { describe, it, expect } from 'vitest'
import Sval from '../src'

describe('Static Blocks', () => {
  it('should execute a basic static block', () => {
    const interpreter = new Sval()
    interpreter.run(`
      class MyClass {
        static {
          exports.result = 'static block executed';
        }
      }
    `)
    expect(interpreter.exports.result).toBe('static block executed')
  })

  it('should execute static blocks in order', () => {
    const interpreter = new Sval()
    interpreter.run(`
      exports.results = [];
      class MyClass {
        static {
          exports.results.push(1);
        }
        static {
          exports.results.push(2);
        }
        static {
          exports.results.push(3);
        }
      }
    `)
    expect(interpreter.exports.results).toEqual([1, 2, 3])
  })

  it('should access static fields in static blocks', () => {
    const interpreter = new Sval()
    interpreter.run(`
      class MyClass {
        static x = 10;
        static {
          exports.result = this.x * 2;
        }
      }
    `)
    expect(interpreter.exports.result).toBe(20)
  })

  it('should access and modify static fields in static blocks', () => {
    const interpreter = new Sval()
    interpreter.run(`
      class Counter {
        static count = 0;
        static {
          this.count = 5;
        }
        static {
          this.count += 10;
        }
      }
      exports.Counter = Counter;
    `)
    expect(interpreter.exports.Counter.count).toBe(15)
  })

  it('should have access to this in static blocks', () => {
    const interpreter = new Sval()
    interpreter.run(`
      class MyClass {
        static {
          exports.classRef = this;
        }
      }
      exports.MyClass = MyClass;
    `)
    expect(interpreter.exports.classRef).toBe(interpreter.exports.MyClass)
  })

  it('should access private static fields in static blocks', () => {
    const interpreter = new Sval()
    interpreter.run(`
      class MyClass {
        static #secret = 42;
        static {
          exports.result = this.#secret;
        }
      }
    `)
    expect(interpreter.exports.result).toBe(42)
  })

  it('should initialize private static fields in static blocks', () => {
    const interpreter = new Sval()
    interpreter.run(`
      class MyClass {
        static #x;
        static {
          this.#x = 100;
        }
        static get value() {
          return this.#x;
        }
      }
      exports.MyClass = MyClass;
    `)
    expect(interpreter.exports.MyClass.value).toBe(100)
  })

  it('should execute static blocks after static fields are initialized', () => {
    const interpreter = new Sval()
    interpreter.run(`
      exports.order = [];
      class MyClass {
        static a = (exports.order.push('field a'), 1);
        static {
          exports.order.push('block 1');
        }
        static b = (exports.order.push('field b'), 2);
        static {
          exports.order.push('block 2');
        }
      }
    `)
    // Fields are processed first, then blocks
    expect(interpreter.exports.order).toEqual(['field a', 'field b', 'block 1', 'block 2'])
  })

  it('should allow complex initialization logic in static blocks', () => {
    const interpreter = new Sval()
    interpreter.run(`
      class Config {
        static settings = {};
        static {
          const defaults = { a: 1, b: 2, c: 3 };
          for (var key in defaults) {
            this.settings[key] = defaults[key] * 2;
          }
        }
      }
      exports.Config = Config;
    `)
    expect(interpreter.exports.Config.settings).toEqual({ a: 2, b: 4, c: 6 })
  })

  it('should allow static blocks to call static methods', () => {
    const interpreter = new Sval()
    interpreter.run(`
      class MyClass {
        static init() {
          return 'initialized';
        }
        static {
          exports.result = this.init();
        }
      }
    `)
    expect(interpreter.exports.result).toBe('initialized')
  })

  it('should allow static blocks to define additional static properties', () => {
    const interpreter = new Sval()
    interpreter.run(`
      class MyClass {
        static x = 10;
        static {
          this.y = this.x * 2;
          this.z = this.x + this.y;
        }
      }
      exports.MyClass = MyClass;
    `)
    expect(interpreter.exports.MyClass.y).toBe(20)
    expect(interpreter.exports.MyClass.z).toBe(30)
  })

  it('should support variable declarations in static blocks', () => {
    const interpreter = new Sval()
    interpreter.run(`
      class MyClass {
        static result;
        static {
          let temp = 5;
          const multiplier = 3;
          this.result = temp * multiplier;
        }
      }
      exports.MyClass = MyClass;
    `)
    expect(interpreter.exports.MyClass.result).toBe(15)
  })

  it('should support try-catch in static blocks', () => {
    const interpreter = new Sval()
    interpreter.run(`
      class MyClass {
        static error = null;
        static {
          try {
            throw new Error('test error');
          } catch (e) {
            this.error = e.message;
          }
        }
      }
      exports.MyClass = MyClass;
    `)
    expect(interpreter.exports.MyClass.error).toBe('test error')
  })

  it('should support async operations in static blocks', () => {
    const interpreter = new Sval()
    interpreter.run(`
      class MyClass {
        static {
          exports.promise = Promise.resolve(42);
        }
      }
    `)
    return interpreter.exports.promise.then((value) => {
      expect(value).toBe(42)
    })
  })

  it('should execute static blocks before class is used', () => {
    const interpreter = new Sval()
    interpreter.run(`
      class Registry {
        static items = [];
        static {
          this.items.push('initialized');
        }
      }
      exports.snapshot = Registry.items.slice();
    `)
    expect(interpreter.exports.snapshot).toEqual(['initialized'])
  })
})
