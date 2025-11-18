import Sval from '../src'

describe('ES2022 Class Fields (PropertyDefinition)', () => {
  it('should support basic instance fields with initializers', () => {
    const interpreter = new Sval()
    interpreter.run(`
      class Counter {
        count = 0
        name = 'Counter'
        
        increment() {
          this.count++
        }
      }
      
      const c = new Counter()
      c.increment()
      exports.count = c.count
      exports.name = c.name
    `)
    
    expect(interpreter.exports.count).toBe(1)
    expect(interpreter.exports.name).toBe('Counter')
  })

  it('should support instance fields without initializers', () => {
    const interpreter = new Sval()
    interpreter.run(`
      class MyClass {
        uninitializedField
        
        constructor() {
          this.uninitializedField = 42
        }
      }
      
      const obj = new MyClass()
      exports.value = obj.uninitializedField
    `)
    
    expect(interpreter.exports.value).toBe(42)
  })

  it('should initialize fields before constructor runs', () => {
    const interpreter = new Sval()
    interpreter.run(`
      const log = []
      
      class MyClass {
        field = (log.push('field'), 'initialized')
        
        constructor() {
          log.push('constructor')
        }
      }
      
      new MyClass()
      exports.log = log
    `)
    
    expect(interpreter.exports.log).toEqual(['field', 'constructor'])
  })

  it('should support static fields', () => {
    const interpreter = new Sval()
    interpreter.run(`
      class MyClass {
        static version = '1.0.0'
        static count = 0
        static obj = { key: 'value' }
      }
      
      exports.version = MyClass.version
      exports.count = MyClass.count
      exports.obj = MyClass.obj
    `)
    
    expect(interpreter.exports.version).toBe('1.0.0')
    expect(interpreter.exports.count).toBe(0)
    expect(interpreter.exports.obj).toEqual({ key: 'value' })
  })

  it('should support both instance and static fields in same class', () => {
    const interpreter = new Sval()
    interpreter.run(`
      class MyClass {
        static staticField = 'static'
        instanceField = 'instance'
        
        constructor() {
          this.constructorField = 'constructor'
        }
      }
      
      const obj = new MyClass()
      exports.staticField = MyClass.staticField
      exports.instanceField = obj.instanceField
      exports.constructorField = obj.constructorField
    `)
    
    expect(interpreter.exports.staticField).toBe('static')
    expect(interpreter.exports.instanceField).toBe('instance')
    expect(interpreter.exports.constructorField).toBe('constructor')
  })

  it('should support computed field names', () => {
    const interpreter = new Sval()
    interpreter.run(`
      const key1 = 'dynamicKey'
      const key2 = 'staticProp'
      
      class MyClass {
        [key1] = 'dynamic value'
        static [key2] = 'static dynamic'
      }
      
      const obj = new MyClass()
      exports.dynamic = obj.dynamicKey
      exports.staticDynamic = MyClass.staticProp
    `)
    
    expect(interpreter.exports.dynamic).toBe('dynamic value')
    expect(interpreter.exports.staticDynamic).toBe('static dynamic')
  })

  it('should support fields with expression initializers', () => {
    const interpreter = new Sval()
    interpreter.run(`
      class MyClass {
        x = 10
        y = 20
        sum = this.x + this.y
        doubled = this.sum * 2
      }
      
      const obj = new MyClass()
      exports.sum = obj.sum
      exports.doubled = obj.doubled
    `)
    
    expect(interpreter.exports.sum).toBe(30)
    expect(interpreter.exports.doubled).toBe(60)
  })

  it('should handle fields in inherited classes', () => {
    const interpreter = new Sval()
    interpreter.run(`
      class Base {
        baseField = 'base'
      }
      
      class Derived extends Base {
        derivedField = 'derived'
      }
      
      const obj = new Derived()
      exports.baseField = obj.baseField
      exports.derivedField = obj.derivedField
    `)
    
    expect(interpreter.exports.baseField).toBe('base')
    expect(interpreter.exports.derivedField).toBe('derived')
  })

  it('should support fields that reference constructor parameters', () => {
    const interpreter = new Sval()
    interpreter.run(`
      class Point {
        x
        y
        
        constructor(x, y) {
          this.x = x
          this.y = y
        }
        
        toString() {
          return this.x + ',' + this.y
        }
      }
      
      const p = new Point(10, 20)
      exports.x = p.x
      exports.y = p.y
      exports.str = p.toString()
    `)
    
    expect(interpreter.exports.x).toBe(10)
    expect(interpreter.exports.y).toBe(20)
    expect(interpreter.exports.str).toBe('10,20')
  })

  it('should support fields with function expressions as values', () => {
    const interpreter = new Sval()
    interpreter.run(`
      class MyClass {
        getValue = () => 42
        static getStatic = () => 'static'
      }
      
      const obj = new MyClass()
      exports.instanceValue = obj.getValue()
      exports.staticValue = MyClass.getStatic()
    `)
    
    expect(interpreter.exports.instanceValue).toBe(42)
    expect(interpreter.exports.staticValue).toBe('static')
  })

  it('should create separate field instances for each object', () => {
    const interpreter = new Sval()
    interpreter.run(`
      class Counter {
        count = 0
      }
      
      const c1 = new Counter()
      const c2 = new Counter()
      
      c1.count = 5
      c2.count = 10
      
      exports.c1count = c1.count
      exports.c2count = c2.count
    `)
    
    expect(interpreter.exports.c1count).toBe(5)
    expect(interpreter.exports.c2count).toBe(10)
  })

  it('should support fields alongside methods', () => {
    const interpreter = new Sval()
    interpreter.run(`
      class Rectangle {
        width = 0
        height = 0
        
        constructor(w, h) {
          this.width = w
          this.height = h
        }
        
        area() {
          return this.width * this.height
        }
        
        static description = 'A rectangle class'
      }
      
      const rect = new Rectangle(5, 10)
      exports.area = rect.area()
      exports.description = Rectangle.description
    `)
    
    expect(interpreter.exports.area).toBe(50)
    expect(interpreter.exports.description).toBe('A rectangle class')
  })

  it('should support fields with array and object literals', () => {
    const interpreter = new Sval()
    interpreter.run(`
      class MyClass {
        arr = [1, 2, 3]
        obj = { a: 1, b: 2 }
        static staticArr = [10, 20]
      }
      
      const obj = new MyClass()
      exports.arr = obj.arr
      exports.obj = obj.obj
      exports.staticArr = MyClass.staticArr
    `)
    
    expect(interpreter.exports.arr).toEqual([1, 2, 3])
    expect(interpreter.exports.obj).toEqual({ a: 1, b: 2 })
    expect(interpreter.exports.staticArr).toEqual([10, 20])
  })

  it('should handle class expressions with fields', () => {
    const interpreter = new Sval()
    interpreter.run(`
      const MyClass = class {
        field = 'value'
        static staticField = 'static value'
      }
      
      const obj = new MyClass()
      exports.field = obj.field
      exports.staticField = MyClass.staticField
    `)
    
    expect(interpreter.exports.field).toBe('value')
    expect(interpreter.exports.staticField).toBe('static value')
  })

  it('should work with getter and setter alongside fields', () => {
    const interpreter = new Sval()
    interpreter.run(`
      class MyClass {
        _value = 10
        
        get value() {
          return this._value
        }
        
        set value(v) {
          this._value = v
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
