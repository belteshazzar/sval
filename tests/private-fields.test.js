import Sval from '../src'

describe('ES2022 Private Fields (PrivateIdentifier)', () => {
  it('should support basic private instance fields', () => {
    const interpreter = new Sval()
    interpreter.run(`
      class MyClass {
        #privateField = 42
        
        getPrivate() {
          return this.#privateField
        }
      }
      
      const obj = new MyClass()
      exports.value = obj.getPrivate()
    `)
    
    expect(interpreter.exports.value).toBe(42)
  })

  it('should support private fields without initializers', () => {
    const interpreter = new Sval()
    interpreter.run(`
      class MyClass {
        #private
        
        constructor(value) {
          this.#private = value
        }
        
        get() {
          return this.#private
        }
      }
      
      const obj = new MyClass(100)
      exports.value = obj.get()
    `)
    
    expect(interpreter.exports.value).toBe(100)
  })

  it('should support static private fields', () => {
    const interpreter = new Sval()
    interpreter.run(`
      class MyClass {
        static #staticPrivate = 'secret'
        
        static getStatic() {
          return MyClass.#staticPrivate
        }
      }
      
      exports.value = MyClass.getStatic()
    `)
    
    expect(interpreter.exports.value).toBe('secret')
  })

  it('should support both public and private fields', () => {
    const interpreter = new Sval()
    interpreter.run(`
      class MyClass {
        publicField = 'public'
        #privateField = 'private'
        
        getPrivate() {
          return this.#privateField
        }
      }
      
      const obj = new MyClass()
      exports.publicField = obj.publicField
      exports.privateField = obj.getPrivate()
    `)
    
    expect(interpreter.exports.publicField).toBe('public')
    expect(interpreter.exports.privateField).toBe('private')
  })

  it('should throw error when accessing private field from outside class', () => {
    const interpreter = new Sval()
    
    expect(() => {
      interpreter.run(`
        class MyClass {
          #private = 42
        }
        
        const obj = new MyClass()
        exports.value = obj.#private
      `)
    }).toThrow(/Private field|Cannot read private member/)
  })

  it('should support multiple private fields', () => {
    const interpreter = new Sval()
    interpreter.run(`
      class MyClass {
        #field1 = 10
        #field2 = 20
        #field3 = 30
        
        sum() {
          return this.#field1 + this.#field2 + this.#field3
        }
      }
      
      const obj = new MyClass()
      exports.sum = obj.sum()
    `)
    
    expect(interpreter.exports.sum).toBe(60)
  })

  it('should support private fields with expression initializers', () => {
    const interpreter = new Sval()
    interpreter.run(`
      class MyClass {
        #x = 10
        #y = 20
        #sum = this.#x + this.#y
        
        getSum() {
          return this.#sum
        }
      }
      
      const obj = new MyClass()
      exports.sum = obj.getSum()
    `)
    
    expect(interpreter.exports.sum).toBe(30)
  })

  it('should isolate private fields per instance', () => {
    const interpreter = new Sval()
    interpreter.run(`
      class Counter {
        #count = 0
        
        increment() {
          this.#count++
        }
        
        get() {
          return this.#count
        }
      }
      
      const c1 = new Counter()
      const c2 = new Counter()
      
      c1.increment()
      c1.increment()
      c2.increment()
      
      exports.c1 = c1.get()
      exports.c2 = c2.get()
    `)
    
    expect(interpreter.exports.c1).toBe(2)
    expect(interpreter.exports.c2).toBe(1)
  })

  it('should support private fields in inherited classes', () => {
    const interpreter = new Sval()
    interpreter.run(`
      class Base {
        basePublic = 'base public'
      }
      
      class Derived extends Base {
        #derivedPrivate = 'derived'
        
        getDerived() {
          return this.#derivedPrivate
        }
      }
      
      const obj = new Derived()
      exports.basePublic = obj.basePublic
      exports.derived = obj.getDerived()
    `)
    
    expect(interpreter.exports.basePublic).toBe('base public')
    expect(interpreter.exports.derived).toBe('derived')
  })

  it('should support updating private fields', () => {
    const interpreter = new Sval()
    interpreter.run(`
      class MyClass {
        #value = 0
        
        set(newValue) {
          this.#value = newValue
        }
        
        get() {
          return this.#value
        }
      }
      
      const obj = new MyClass()
      exports.initial = obj.get()
      obj.set(100)
      exports.updated = obj.get()
    `)
    
    expect(interpreter.exports.initial).toBe(0)
    expect(interpreter.exports.updated).toBe(100)
  })

  it('should support private methods', () => {
    const interpreter = new Sval()
    interpreter.run(`
      class MyClass {
        #value = 42
        
        #privateMethod() {
          return this.#value * 2
        }
        
        publicMethod() {
          return this.#privateMethod()
        }
      }
      
      const obj = new MyClass()
      exports.result = obj.publicMethod()
    `)
    
    expect(interpreter.exports.result).toBe(84)
  })

  it('should support static private methods', () => {
    const interpreter = new Sval()
    interpreter.run(`
      class MyClass {
        static #privateStatic() {
          return 'secret method'
        }
        
        static publicStatic() {
          return MyClass.#privateStatic()
        }
      }
      
      exports.result = MyClass.publicStatic()
    `)
    
    expect(interpreter.exports.result).toBe('secret method')
  })

  it('should support private fields with array and object literals', () => {
    const interpreter = new Sval()
    interpreter.run(`
      class MyClass {
        #arr = [1, 2, 3]
        #obj = { key: 'value' }
        
        getArr() {
          return this.#arr
        }
        
        getObj() {
          return this.#obj
        }
      }
      
      const obj = new MyClass()
      exports.arr = obj.getArr()
      exports.obj = obj.getObj()
    `)
    
    expect(interpreter.exports.arr).toEqual([1, 2, 3])
    expect(interpreter.exports.obj).toEqual({ key: 'value' })
  })

  it('should support class expressions with private fields', () => {
    const interpreter = new Sval()
    interpreter.run(`
      const MyClass = class {
        #private = 'secret'
        
        get() {
          return this.#private
        }
      }
      
      const obj = new MyClass()
      exports.value = obj.get()
    `)
    
    expect(interpreter.exports.value).toBe('secret')
  })

  it('should support private fields alongside getters and setters', () => {
    const interpreter = new Sval()
    interpreter.run(`
      class MyClass {
        #_value = 10
        
        get value() {
          return this.#_value
        }
        
        set value(v) {
          this.#_value = v
        }
      }
      
      const obj = new MyClass()
      exports.initial = obj.value
      obj.value = 20
      exports.updated = obj.value
    `)
    
    expect(interpreter.exports.initial).toBe(10)
    expect(interpreter.exports.updated).toBe(20)
  })
})
