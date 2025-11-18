import { getOwnNames, createSandBox, globalObj, assign } from './share/util'
import { version } from '../package.json'
import { parse, Options } from 'acorn'
import { Node, Program } from 'estree'
import Scope from './scope'
import { AWAIT } from './share/const'
import { runAsync } from './share/async'

import { hoist } from './evaluate_n/helper'
import evaluateSync from './evaluate_n'
import evaluateAsync from './evaluate'

export interface SvalOptions {
  ecmaVer?: 3 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 2015 | 2016 | 2017 | 2018 | 2019 | 2020 | 2021 | 2022 | 2023 | 2024 | 2025 | 'latest'
  sandBox?: boolean
  sourceType?: 'script' | 'module'
  fetch?: (url: string) => Promise<string>
}

class Sval {
  static version: string = version

  private options: Partial<Options> = {}
  private scope = new Scope(null, true)
  private moduleCache = new Map<string, any>()
  private fetchFn?: (url: string) => Promise<string>

  exports: { [name: string]: any } = {}

  constructor(options: SvalOptions = {}) {
    let { ecmaVer = 'latest', sandBox = true, sourceType = 'script', fetch } = options

    if (ecmaVer !== 'latest') {
      ecmaVer = (ecmaVer as number) - ((ecmaVer as number) < 2015 ? 0 : 2009) // format ecma edition

      if ([3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].indexOf(ecmaVer as number) === -1) {
        throw new Error(`unsupported ecmaVer`)
      }
    }

    this.options.ecmaVersion = ecmaVer as Options['ecmaVersion']
    this.options.sourceType = sourceType
    this.fetchFn = fetch

    if (sandBox) {
      // Shallow clone to create a sandbox
      const win = createSandBox()
      this.scope.let('window', win)
      this.scope.let('this', win)
    } else {
      this.scope.let('window', globalObj)
      this.scope.let('this', globalObj)
    }
    
    // Set up module support if sourceType is 'module'
    if (sourceType === 'module') {
      const moduleExports = {}
      this.scope.const('exports', this.exports = moduleExports)
      this.scope.const('__moduleExports__', moduleExports)
      this.scope.const('__moduleLoader__', this.createModuleLoader())
    } else {
      this.scope.const('exports', this.exports = {})
    }
  }

  import(nameOrModules: string | { [name: string]: any }, mod?: any) {
    if (typeof nameOrModules === 'string') {
      nameOrModules = { [nameOrModules]: mod }
    }

    if (typeof nameOrModules !== 'object') return

    const names = getOwnNames(nameOrModules)
    
    for (let i = 0; i < names.length; i++) {
      const name = names[i]
      this.scope.var(name, nameOrModules[name])
    }
  }

  parse(code: string, parser?: (code: string, options: any) => Node) {
    if (typeof parser === 'function') {
      return parser(code, assign({}, this.options))
    }
    return parse(code, this.options as Options)
  }

  run(code: string | Node) {
    const ast = typeof code === 'string' ? parse(code, this.options as Options) as Node : code
    hoist(ast as Program, this.scope)
    evaluateSync(ast, this.scope)
  }

  async runAsync(code: string | Node) {
    const ast = typeof code === 'string' ? parse(code, this.options as Options) as Node : code
    hoist(ast as Program, this.scope)
    await runAsync(evaluateAsync(ast, this.scope))
  }

  private createModuleLoader() {
    const self = this
    return function* (url: string, baseUrl?: string): IterableIterator<any> {
      // Resolve relative URLs
      let resolvedUrl = url
      // Check if this is an absolute URL (has a scheme like http://, https://, custom:// etc.)
      const hasScheme = url && /^[a-zA-Z][a-zA-Z0-9+.-]*:\/\//.test(url)
      
      if (!hasScheme) {
        // Relative URL - resolve against base
        if (baseUrl) {
          try {
            resolvedUrl = new URL(url, baseUrl).href
          } catch (e) {
            throw new Error(`Failed to resolve URL ${url} relative to ${baseUrl}: ${e instanceof Error ? e.message : e}`)
          }
        } else {
          // No base URL - can't resolve relative imports
          throw new Error(`Cannot resolve relative URL ${url} without a base URL`)
        }
      }
      
      // Check cache first
      if (self.moduleCache.has(resolvedUrl)) {
        return self.moduleCache.get(resolvedUrl)
      }

      // Fetch the module code
      let code: string
      try {
        if (self.fetchFn) {
          // Use custom fetch function
          AWAIT.RES = self.fetchFn(resolvedUrl)
          code = yield AWAIT
        } else if (typeof fetch !== 'undefined') {
          // Use global fetch (browser/modern environments)
          AWAIT.RES = fetch(resolvedUrl).then(r => r.text())
          code = yield AWAIT
        } else {
          throw new Error('No fetch function available. Provide a fetch option or use an environment with global fetch.')
        }
      } catch (error) {
        throw new Error(`Failed to fetch module from ${resolvedUrl}: ${error instanceof Error ? error.message : error}`)
      }

      // Parse and evaluate the module
      const moduleExports = {}
      const moduleScope = new Scope(self.scope.global(), true)
      moduleScope.const('__moduleExports__', moduleExports)
      // Create a nested loader that passes resolvedUrl as the base URL
      const moduleLoader = self.createModuleLoader()
      const nestedLoader = function* (nestedUrl: string): IterableIterator<any> {
        return yield* moduleLoader(nestedUrl, resolvedUrl)
      }
      moduleScope.const('__moduleLoader__', nestedLoader)
      moduleScope.const('exports', moduleExports)

      try {
        const ast = parse(code, assign({}, self.options, { sourceType: 'module' }) as Options)
        hoist(ast as Program, moduleScope)
        yield* evaluateAsync(ast as Node, moduleScope)
      } catch (error) {
        throw new Error(`Failed to evaluate module ${resolvedUrl}: ${error instanceof Error ? error.message : error}`)
      }

      // Cache the module exports
      self.moduleCache.set(resolvedUrl, moduleExports)

      return moduleExports
    }
  }
}

export default Sval