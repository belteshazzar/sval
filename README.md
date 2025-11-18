# Sval

[![npm](https://img.shields.io/npm/v/sval.svg?style=flat-square)](https://www.npmjs.com/package/sval)
[![travis-ci](https://img.shields.io/travis/Siubaak/sval.svg?style=flat-square)](https://travis-ci.org/Siubaak/sval)
[![coveralls](https://img.shields.io/coveralls/github/Siubaak/sval.svg?style=flat-square)](https://coveralls.io/github/Siubaak/sval)

A JavaScript interpreter writen in JavaScript, based on parser [Acorn](https://github.com/acornjs/acorn).

- **Running on ES5, supporting ES5~latest (ES2025) full features**
- **Both invasived and sandbox modes available**

It's useful to evaluate the code of higher ECMAScript editions, or for the environment with disabled `eval`, `setTimeout` and `new Function`.

[Try Sval on the playground.](https://jsbin.com/kehahiqono/edit?js,console)

## Installation

### Node

Install Sval with [npm](https://www.npmjs.com/package/sval).

```bash
npm install sval
```

### Browser

Simply source from [unpkg](https://unpkg.com/sval). Or, download from [releases](https://github.com/Siubaak/sval/releases), get minimized file `dist/min/sval.min.js`, and source at your html page. You can access a global variable **Sval** directly.

```html
<script type="text/javascript" src="https://unpkg.com/sval"></script>
```

## Usage

```js
import Sval from 'sval'

// Sval options
const options = {
  // ECMA Version of the code (5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 2015 | 2016 | 2017 | 2018 | 2019 | 2020 | 2021 | 2022 | 2023 | 2024 | 2025 | 'latest')
  ecmaVer: 'latest',
  // Whether the code runs in a sandbox
  sandBox: true,
  // Source type of the code ('script' | 'module')
  sourceType: 'script',
  // Custom fetch function for loading modules (optional, for module imports)
  fetch: async (url) => {
    // Return module source code as string
    // Default uses global fetch if available
  }
}

// Create a interpreter
const interpreter = new Sval(options)

// Add global modules in interpreter
interpreter.import('importWhatYouNeed', 'AllKindsOfStuffs')
// Or interpreter.import({ importWhatYouNeed: 'AllKindsOfStuffs' })

// Parse and run the code
interpreter.run(`
  const msg = 'Hello World'
  exports.msg = msg // Export any you want
`)

interpreter.run(`
  exports.mod = importWhatYouNeed // Export again and merge
`)

// Get exports from runs
console.log(interpreter.exports.msg) // Get 'Hello World'
console.log(interpreter.exports.mod) // Get 'AllKindsOfStuffs'
```

Sval constructor has options with three fields, **ecmaVer**, **sandBox**, and **sourceType**.

- **ecmaVer** is the ECMAScript edition of the code. Currently, 5, 6(2015), 7(2016), 8(2017), 9(2018), 10(2019), 11(2020), 12(2021), 13(2022), 14(2023), 15(2024), 16(2025) and 'latest' are supported. The default edition is 'latest', which supports the latest ECMAScript features that Acorn can parse.

- **sandBox** is true for sandbox mode or false for invasived mode. Sandbox mode will run code in an isolated sandbox and won't pollute your global scope. Invasived mode allows you run code in the same global scope of your current environment. The default setting is true.

- **sourceType** is 'script' or 'module'. This determines how the code is parsed and executed. Use 'module' to enable ES6 module syntax (import/export statements) and top-level await. The default is 'script'.

- **fetch** is an optional custom function for loading modules when using import statements. It receives a URL string and should return a Promise that resolves to the module source code as a string. If not provided, Sval will use the global `fetch` function (available in browsers and modern Node.js). This is only used when `sourceType` is 'module'.

Sval instance has three methods, **import**, **parse** and **run**.

- **import** is to import modules into your Sval instance scope, expecting a name and a module as arguments like `import(name: string, mod: any)`, or an object which contains the modules as argument like `import({ [name: string]: any })`. The modules will be automatically declared as global variables. This method is more likely to be used in sandbox mode.

- **parse** is to parse the code with internal [Acorn](https://github.com/acornjs/acorn) or custom parser, to get the corresponding AST, like `parse(code: string)` or `parse(code: string, parser: (code: string, options: SvalOptions) => estree.Node`

- **run** is to evaluate the code inputed, expecting a string as argument like `run(code: string)`, or an AST followed ESTree Spec as argument like `run(ast: estree.Node)`. If you want to export something, there is a internal global `exports` object for mounting what you want to export. For synchronous execution.

- **runAsync** is the async version of **run**, used when code contains await expressions or import statements. Returns a Promise that resolves when execution completes.

Sval instance also has a field, **exports**, to get what you exported from runs, merged if several runs have exports.

## ES6 Modules

Sval supports ES6 module syntax when `sourceType: 'module'` is set. This includes:

### Import Statements

```js
import Sval from 'sval'

const interpreter = new Sval({ sourceType: 'module' })

await interpreter.runAsync(`
  // Import from CDN
  import isEven from 'https://cdn.jsdelivr.net/npm/is-even@1.0.0/+esm'
  
  // Named imports
  import { x, y } from 'module-url'
  
  // Namespace imports
  import * as mod from 'module-url'
  
  // Mixed imports
  import defaultExport, { named1, named2 } from 'module-url'
  
  // Dynamic imports
  const module = await import('module-url')
  
  exports.result = isEven(2) // true
`)
```

### Export Statements

```js
// Named exports
export const x = 10
export function foo() {}
export class Bar {}

// Default export
export default function() {}
export default 42

// Re-exports
export { x } from 'module-url'
export * from 'module-url'
export * as namespace from 'module-url'
```

### Custom Module Loading

You can provide a custom fetch function to control how modules are loaded:

```js
const interpreter = new Sval({
  sourceType: 'module',
  fetch: async (url) => {
    if (url.startsWith('custom://')) {
      // Load from custom source
      return await loadFromCustomSource(url)
    }
    // Fall back to standard fetch
    return await fetch(url).then(r => r.text())
  }
})
```

### Module Caching

Modules are automatically cached - each unique URL is only fetched and evaluated once per Sval instance.

### Nested Imports

Modules can import other modules, and relative paths are resolved correctly:

```js
// CDN modules can import dependencies with relative or absolute paths
// is-even imports is-odd internally, which imports is-number, etc.
import isEven from 'https://cdn.jsdelivr.net/npm/is-even@1.0.0/+esm'
```

## Note

**WithStatement** and **LabeledStatement** aren't implemented and recommended. Please avoid to use them.

## Reference

- [ESTree](https://github.com/estree/estree)
- [Acorn](https://github.com/acornjs/acorn)
- [Jsjs](https://github.com/bramblex/jsjs)

## License

Sval is licensed under the [MIT](https://github.com/Siubaak/sval/blob/master/LICENSE).