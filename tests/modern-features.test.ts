import Sval from '../src'

describe('ES2020+ Modern Features', () => {
  it('should handle nullish coalescing operator', () => {
    const interpreter = new Sval({ ecmaVer: 'latest' })

    interpreter.run(`
      const a = null ?? 'default'
      const b = undefined ?? 'fallback'
      const c = 0 ?? 'zero is falsy but not nullish'
      const d = '' ?? 'empty string is falsy but not nullish'
      const e = false ?? 'false is falsy but not nullish'
      exports.a = a
      exports.b = b
      exports.c = c
      exports.d = d
      exports.e = e
    `)

    expect(interpreter.exports.a).toBe('default')
    expect(interpreter.exports.b).toBe('fallback')
    expect(interpreter.exports.c).toBe(0)
    expect(interpreter.exports.d).toBe('')
    expect(interpreter.exports.e).toBe(false)
  })

  it('should handle optional chaining for properties', () => {
    const interpreter = new Sval({ ecmaVer: 'latest' })

    interpreter.run(`
      const obj = { a: { b: { c: 42 } } }
      const result1 = obj?.a?.b?.c
      const result2 = obj?.x?.y?.z
      const result3 = null?.property
      const result4 = undefined?.property
      exports.result1 = result1
      exports.result2 = result2
      exports.result3 = result3
      exports.result4 = result4
    `)

    expect(interpreter.exports.result1).toBe(42)
    expect(interpreter.exports.result2).toBeUndefined()
    expect(interpreter.exports.result3).toBeUndefined()
    expect(interpreter.exports.result4).toBeUndefined()
  })

  it('should handle optional chaining for function calls', () => {
    const interpreter = new Sval({ ecmaVer: 'latest' })

    interpreter.run(`
      const obj = {
        method: () => 'called'
      }
      const result1 = obj.method?.()
      const result2 = obj.missing?.()
      const result3 = null?.()
      exports.result1 = result1
      exports.result2 = result2
      exports.result3 = result3
    `)

    expect(interpreter.exports.result1).toBe('called')
    expect(interpreter.exports.result2).toBeUndefined()
    expect(interpreter.exports.result3).toBeUndefined()
  })

  it('should handle chained optional chaining', () => {
    const interpreter = new Sval({ ecmaVer: 'latest' })

    interpreter.run(`
      const user = {
        address: {
          street: '123 Main St'
        },
        getName: () => 'John'
      }
      
      // Chained optional chaining where method doesn't exist
      const result1 = user?.getName?.()
      const result2 = user?.getMissing?.()
      const result3 = user?.address?.getCity?.()
      
      // Should work when method exists
      const result4 = user?.getName?.()
      
      // Null/undefined propagation
      const nullUser = null
      const result5 = nullUser?.getName?.()
      
      exports.result1 = result1
      exports.result2 = result2
      exports.result3 = result3
      exports.result4 = result4
      exports.result5 = result5
    `)

    expect(interpreter.exports.result1).toBe('John')
    expect(interpreter.exports.result2).toBeUndefined()
    expect(interpreter.exports.result3).toBeUndefined()
    expect(interpreter.exports.result4).toBe('John')
    expect(interpreter.exports.result5).toBeUndefined()
  })

  it('should handle logical OR assignment operator', () => {
    const interpreter = new Sval({ ecmaVer: 'latest' })

    interpreter.run(`
      let a = 0
      let b = 'hello'
      let c = null
      let d = false
      
      a ||= 10
      b ||= 'world'
      c ||= 'default'
      d ||= true
      
      exports.a = a
      exports.b = b
      exports.c = c
      exports.d = d
    `)

    expect(interpreter.exports.a).toBe(10)
    expect(interpreter.exports.b).toBe('hello')
    expect(interpreter.exports.c).toBe('default')
    expect(interpreter.exports.d).toBe(true)
  })

  it('should handle logical AND assignment operator', () => {
    const interpreter = new Sval({ ecmaVer: 'latest' })

    interpreter.run(`
      let a = 0
      let b = 'hello'
      let c = null
      let d = true
      
      a &&= 10
      b &&= 'world'
      c &&= 'default'
      d &&= false
      
      exports.a = a
      exports.b = b
      exports.c = c
      exports.d = d
    `)

    expect(interpreter.exports.a).toBe(0)
    expect(interpreter.exports.b).toBe('world')
    expect(interpreter.exports.c).toBe(null)
    expect(interpreter.exports.d).toBe(false)
  })

  it('should handle nullish coalescing assignment operator', () => {
    const interpreter = new Sval({ ecmaVer: 'latest' })

    interpreter.run(`
      let a = 0
      let b = null
      let c = undefined
      let d = 'hello'
      
      a ??= 10
      b ??= 20
      c ??= 30
      d ??= 'world'
      
      exports.a = a
      exports.b = b
      exports.c = c
      exports.d = d
    `)

    expect(interpreter.exports.a).toBe(0)
    expect(interpreter.exports.b).toBe(20)
    expect(interpreter.exports.c).toBe(30)
    expect(interpreter.exports.d).toBe('hello')
  })

  it('should handle numeric separators', () => {
    const interpreter = new Sval({ ecmaVer: 'latest' })

    interpreter.run(`
      const million = 1_000_000
      const billion = 1_000_000_000
      const hex = 0xFF_FF_FF_FF
      const binary = 0b1010_0001_1000_0101
      exports.million = million
      exports.billion = billion
      exports.hex = hex
      exports.binary = binary
    `)

    expect(interpreter.exports.million).toBe(1000000)
    expect(interpreter.exports.billion).toBe(1000000000)
    expect(interpreter.exports.hex).toBe(0xFFFFFFFF)
    expect(interpreter.exports.binary).toBe(0b1010000110000101)
  })

  it('should handle BigInt literals', () => {
    const interpreter = new Sval({ ecmaVer: 'latest' })

    interpreter.run(`
      const big1 = 9007199254740991n
      const big2 = BigInt(123)
      exports.big1 = big1
      exports.big2 = big2
    `)

    expect(interpreter.exports.big1).toBe(9007199254740991n)
    expect(interpreter.exports.big2).toBe(123n)
  })

  it('should support "latest" as ecmaVer option', () => {
    const interpreter = new Sval({ ecmaVer: 'latest' })

    interpreter.run(`
      const test = 'latest version works'
      exports.test = test
    `)

    expect(interpreter.exports.test).toBe('latest version works')
  })

  it('should support numeric ecmaVer for ES2020', () => {
    const interpreter = new Sval({ ecmaVer: 11 })

    interpreter.run(`
      const test = null ?? 'ES2020'
      exports.test = test
    `)

    expect(interpreter.exports.test).toBe('ES2020')
  })

  it('should support year-based ecmaVer for ES2021', () => {
    const interpreter = new Sval({ ecmaVer: 2021 })

    interpreter.run(`
      let a = 0
      a ||= 42
      exports.test = a
    `)

    expect(interpreter.exports.test).toBe(42)
  })

  it('should combine multiple modern features', () => {
    const interpreter = new Sval({ ecmaVer: 'latest' })

    interpreter.run(`
      const data = {
        user: {
          profile: {
            name: 'Alice',
            age: null
          }
        }
      }
      
      const name = data?.user?.profile?.name ?? 'Anonymous'
      const age = data?.user?.profile?.age ?? 25
      const missing = data?.user?.settings?.theme ?? 'default'
      
      let config = null
      config ??= { theme: 'dark' }
      
      exports.name = name
      exports.age = age
      exports.missing = missing
      exports.config = config
    `)

    expect(interpreter.exports.name).toBe('Alice')
    expect(interpreter.exports.age).toBe(25)
    expect(interpreter.exports.missing).toBe('default')
    expect(interpreter.exports.config).toEqual({ theme: 'dark' })
  })
})
