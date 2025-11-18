import { describe, it, expect } from 'vitest'
import Sval from '../src/index'

describe('ES6 Modules', () => {
  describe('Import/Export', () => {
    it('should handle named exports', () => {
      const moduleCode = `
        export const x = 10
        export const y = 20
        export function add(a, b) {
          return a + b
        }
      `
      
      const sval = new Sval({ sourceType: 'module' })
      sval.run(moduleCode)
      
      expect(sval.exports.x).toBe(10)
      expect(sval.exports.y).toBe(20)
      expect(sval.exports.add(5, 3)).toBe(8)
    })

    it('should handle default export', () => {
      const moduleCode = `
        export default function multiply(a, b) {
          return a * b
        }
      `
      
      const sval = new Sval({ sourceType: 'module' })
      sval.run(moduleCode)
      
      expect(typeof sval.exports.default).toBe('function')
      expect(sval.exports.default(5, 3)).toBe(15)
    })

    it('should handle export with declaration', () => {
      const moduleCode = `
        export class MyClass {
          constructor(value) {
            this.value = value
          }
          getValue() {
            return this.value
          }
        }
      `
      
      const sval = new Sval({ sourceType: 'module' })
      sval.run(moduleCode)
      
      expect(typeof sval.exports.MyClass).toBe('function')
      const instance = new sval.exports.MyClass(42)
      expect(instance.getValue()).toBe(42)
    })

    it('should handle export { x as y } syntax', () => {
      const moduleCode = `
        const foo = 'bar'
        export { foo as bar }
      `
      
      const sval = new Sval({ sourceType: 'module' })
      sval.run(moduleCode)
      
      expect(sval.exports.bar).toBe('bar')
      expect(sval.exports.foo).toBeUndefined()
    })

    it('should handle export default with expression', () => {
      const moduleCode = `
        const value = 42
        export default value * 2
      `
      
      const sval = new Sval({ sourceType: 'module' })
      sval.run(moduleCode)
      
      expect(sval.exports.default).toBe(84)
    })
  })

  describe('URL-based imports', () => {
    it('should import from CDN with nested dependencies', async () => {
      const code = `
        import isEven from 'https://cdn.jsdelivr.net/npm/is-even@1.0.0/+esm'
        exports.result = isEven(2)
        exports.result2 = isEven(3)
      `
      
      const sval = new Sval({ sourceType: 'module' })
      await sval.runAsync(code)
      
      expect(sval.exports.result).toBe(true)
      expect(sval.exports.result2).toBe(false)
    }, 10000) // 10 second timeout for network requests

    it('should cache module imports', async () => {
      const code = `
        import isEven from 'https://cdn.jsdelivr.net/npm/is-even@1.0.0/+esm'
        import isEven2 from 'https://cdn.jsdelivr.net/npm/is-even@1.0.0/+esm'
        exports.same = isEven === isEven2
      `
      
      const sval = new Sval({ sourceType: 'module' })
      await sval.runAsync(code)
      
      expect(sval.exports.same).toBe(true)
    }, 10000)

    it('should support custom fetch function', async () => {
      const customFetch = async (url) => {
        if (url === 'custom://test') {
          return 'export const value = 123'
        }
        throw new Error(`Unknown URL: ${url}`)
      }
      
      const code = `
        import { value } from 'custom://test'
        exports.value = value
      `
      
      const sval = new Sval({ 
        sourceType: 'module',
        fetch: customFetch
      })
      await sval.runAsync(code)
      
      expect(sval.exports.value).toBe(123)
    })
  })

  describe('Re-exports', () => {
    it('should handle export { x } from "module"', async () => {
      const customFetch = async (url) => {
        if (url === 'module://a') {
          return 'export const x = 100'
        }
        if (url === 'module://b') {
          return 'export { x } from "module://a"'
        }
        throw new Error(`Unknown URL: ${url}`)
      }
      
      const code = `
        import { x } from 'module://b'
        exports.x = x
      `
      
      const sval = new Sval({ 
        sourceType: 'module',
        fetch: customFetch
      })
      await sval.runAsync(code)
      
      expect(sval.exports.x).toBe(100)
    })

    it('should handle export * from "module"', async () => {
      const customFetch = async (url) => {
        if (url === 'module://a') {
          return 'export const x = 1; export const y = 2'
        }
        if (url === 'module://b') {
          return 'export * from "module://a"'
        }
        throw new Error(`Unknown URL: ${url}`)
      }
      
      const code = `
        import { x, y } from 'module://b'
        exports.x = x
        exports.y = y
      `
      
      const sval = new Sval({ 
        sourceType: 'module',
        fetch: customFetch
      })
      await sval.runAsync(code)
      
      expect(sval.exports.x).toBe(1)
      expect(sval.exports.y).toBe(2)
    })

    it('should handle export * as ns from "module"', async () => {
      const customFetch = async (url) => {
        if (url === 'module://a') {
          return 'export const x = 1; export const y = 2'
        }
        if (url === 'module://b') {
          return 'export * as mod from "module://a"'
        }
        throw new Error(`Unknown URL: ${url}`)
      }
      
      const code = `
        import { mod } from 'module://b'
        exports.x = mod.x
        exports.y = mod.y
      `
      
      const sval = new Sval({ 
        sourceType: 'module',
        fetch: customFetch
      })
      await sval.runAsync(code)
      
      expect(sval.exports.x).toBe(1)
      expect(sval.exports.y).toBe(2)
    })
  })

  describe('Dynamic import', () => {
    it('should handle import() expression', async () => {
      const customFetch = async (url) => {
        if (url === 'module://dynamic') {
          return 'export const value = 42'
        }
        throw new Error(`Unknown URL: ${url}`)
      }
      
      const code = `
        const mod = await import('module://dynamic')
        exports.value = mod.value
      `
      
      const sval = new Sval({ 
        sourceType: 'module',
        fetch: customFetch
      })
      await sval.runAsync(code)
      
      expect(sval.exports.value).toBe(42)
    })
  })

  describe('Import variations', () => {
    it('should handle default import', async () => {
      const customFetch = async (url) => {
        if (url === 'module://default') {
          return 'export default 42'
        }
        throw new Error(`Unknown URL: ${url}`)
      }
      
      const code = `
        import value from 'module://default'
        exports.value = value
      `
      
      const sval = new Sval({ 
        sourceType: 'module',
        fetch: customFetch
      })
      await sval.runAsync(code)
      
      expect(sval.exports.value).toBe(42)
    })

    it('should handle namespace import', async () => {
      const customFetch = async (url) => {
        if (url === 'module://ns') {
          return 'export const x = 1; export const y = 2; export default 3'
        }
        throw new Error(`Unknown URL: ${url}`)
      }
      
      const code = `
        import * as mod from 'module://ns'
        exports.x = mod.x
        exports.y = mod.y
        exports.def = mod.default
      `
      
      const sval = new Sval({ 
        sourceType: 'module',
        fetch: customFetch
      })
      await sval.runAsync(code)
      
      expect(sval.exports.x).toBe(1)
      expect(sval.exports.y).toBe(2)
      expect(sval.exports.def).toBe(3)
    })

    it('should handle mixed imports', async () => {
      const customFetch = async (url) => {
        if (url === 'module://mixed') {
          return 'export const x = 1; export default 42'
        }
        throw new Error(`Unknown URL: ${url}`)
      }
      
      const code = `
        import def, { x } from 'module://mixed'
        exports.def = def
        exports.x = x
      `
      
      const sval = new Sval({ 
        sourceType: 'module',
        fetch: customFetch
      })
      await sval.runAsync(code)
      
      expect(sval.exports.def).toBe(42)
      expect(sval.exports.x).toBe(1)
    })
  })
})
