# Sval - JavaScript Interpreter Copilot Instructions

## Project Overview

Sval is a JavaScript interpreter written in JavaScript, capable of running ES5-ES2025 code in both sandbox and invasive modes. It uses **Acorn** for parsing and **generator functions** for AST evaluation with async/await support.

## Critical Architecture

### Two-Stage Build Process (`npm run build`)

Sval uses a **dual-codebase system** with generators automatically transformed to non-generator code:

1. **Source code** (`src/evaluate/`): Uses `function*` generators and `yield*` for evaluation
2. **Generated code** (`src/evaluate_n/`): Generators stripped out by `scripts/index.js`

**Key points:**
- `src/index.ts` imports from `evaluate_n/` (the generated version)
- `src/evaluate/` files use `function* foo()` and `yield* evaluate()`
- Build script transforms: `function*` → `function`, removes `yield*`, strips `: IterableIterator<any>`
- **ALWAYS edit `src/evaluate/` files**, never `src/evaluate_n/`
- Run `npm start` to regenerate `evaluate_n/` during development

### Code Generation Tags

Special comment syntax in `src/evaluate/` files controls transformations:

```typescript
/*<add>*//*import * as program from './program'*//*</add>*/  // Adds content when generating
/*<remove>*/code to remove/*</remove>*/                      // Removes content
/*<replace by:='new'>*/old/*</replace>*/                     // Replaces content
```

See `scripts/plugins/{add,remove,replace}.js` for implementation.

### Evaluation Pattern

All AST node evaluators in `src/evaluate/` follow this pattern:

```typescript
export function* NodeType(node: estree.NodeType, scope: Scope): IterableIterator<any> {
  // Recursively evaluate child nodes with yield*
  const result = yield* evaluate(node.child, scope)
  return result
}
```

The `evaluate` function in `src/evaluate/index.ts` routes node types to handlers.

### Scope System

`src/scope/index.ts` implements JavaScript scope semantics:

- **Isolated scopes**: Function scopes vs. block scopes (`isolated: boolean`)
- **Hoisting**: `hoist()` in `helper.ts` pre-processes `var` and function declarations
- **TDZ support**: `let`/`const` use `DEADZONE` constant for temporal dead zone
- **Scope chain**: Parent traversal via `scope.find(name)` up to global `window`

Variables are tracked with three methods: `scope.var()`, `scope.let()`, `scope.const()`.

## Development Workflows

### Build & Test

```bash
npm start         # Regenerate evaluate_n/ and build with Vite (dev + prod)
npm test          # Run vitest tests
npm run build     # Full build with tests and Vite bundles
npm run test:watch      # Run tests in watch mode
npm run test:coverage   # Run tests with coverage report
```

**Build outputs:**
- `dist/sval.js` - UMD build (ES5, unminified, with sourcemap)
- `dist/sval.esm.js` - ES module build (with sourcemap)
- `dist/sval.min.js` - UMD build (ES5, minified)
- `types/` - TypeScript declarations

### Adding Language Feature Support

1. Add evaluator to `src/evaluate/[category].ts` (NOT `evaluate_n/`)
2. Export function following `function* NodeType(node, scope)` pattern
3. Use `yield* evaluate()` for child node evaluation
4. Import and add to `evaluateOps` object in `src/evaluate/index.ts`
5. Add test in `tests/` (see `unimplemented-features.test.ts` for examples)
6. Run `npm start` to regenerate, then `npm test`

### Unimplemented Features

See `TODO.md` and `UNIMPLEMENTED.md` for:
- **ES2022 class features**: `PropertyDefinition`, `PrivateIdentifier`, `StaticBlock` (all currently skipped in `ClassBody`)
- **Dynamic imports**: `ImportExpression` 
- **Labeled statements**: `LabeledStatement`
- **With statements**: `WithStatement` (intentionally skipped - deprecated)

Tests in `tests/unimplemented-features.test.ts` verify these throw or fail gracefully.

## Project Conventions

### Async/Await Handling

Async evaluation uses generators + `runAsync()` helper in `src/share/async.ts`:
- Generator yields `AWAIT` constant with wrapped promise
- `runAsync()` converts generator to promise, resuming on resolution
- See `src/evaluate/statement.ts` `ForOfStatement` for `for await` example

### Class Implementation

Classes are functions created via `createClass()` in `helper.ts`:
- Constructor extracted from `MethodDefinition` with `kind: 'constructor'`
- Methods added to `prototype` or constructor (if `static`)
- Super class support via `SUPER`, `SUPERCALL` scope variables
- Property fields and static blocks currently unimplemented (ES2022)

### Error Handling

Unimplemented features throw: `throw new Error(\`\${node.type} isn't implemented\`)`

### TypeScript Configuration

- **Target**: ES5 for broad compatibility
- **Generators**: Require `downlevelIteration: true` in tsconfig.json
- **Types**: Auto-generated to `types/` via `tsc --emitDeclarationOnly`

## Critical Files

- `src/index.ts`: Main Sval class with import/run/parse API
- `src/evaluate/index.ts`: AST evaluation router
- `src/evaluate/helper.ts`: `hoist()`, `createFunc()`, `createClass()`, `pattern()` utilities
- `src/scope/index.ts`: Scope chain and variable management
- `scripts/index.js`: Generator transformation build step
- `vite.config.ts`: Vite build configuration for UMD and ES module bundles
- `vitest.config.ts`: Vitest testing configuration

## External Dependencies

- **acorn** (v8.15.0): ECMAScript parser supporting ES2025
- **tslib**: TypeScript runtime helpers
- **@types/estree**: AST type definitions

## Testing Approach

Tests use vitest. Each test file targets a category:
- `expression.test.ts`, `statement.test.ts`, `declaration.test.ts`: Core language features
- `class.test.ts`, `function.test.ts`: OOP and functions
- `modern-features.test.ts`: ES6+ features (destructuring, spread, etc.)
- `unimplemented-features.test.ts`: Validates unimplemented features fail predictably

## Common Pitfalls

1. **Editing `evaluate_n/` directly** - Changes will be overwritten; edit `src/evaluate/` instead
2. **Forgetting `yield*`** - Must use `yield*` when calling `evaluate()` or other generators
3. **Wrong scope for hoisting** - Use `scope.var()` for function-scoped, `scope.let()`/`scope.const()` for block-scoped
4. **Missing generator transformation** - Run `npm start` or `node scripts` before testing changes
5. **Incomplete pattern matching** - Use `pattern()` helper for destructuring assignments/declarations
