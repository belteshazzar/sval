# Unimplemented Features - Test Guide

This directory contains tests and documentation for JavaScript language features that Sval does not yet implement.

## Files

- **`tests/unimplemented-features.test.ts`** - Jest test suite for all unimplemented features
- **`TODO.md`** - Detailed implementation roadmap with priorities and notes
- **`UNIMPLEMENTED.md`** - Quick reference summary of unimplemented features
- **`scripts/verify-unimplemented.js`** - Standalone verification script

## Quick Start

### Run Verification Script

The fastest way to see what's not implemented:

```bash
node scripts/verify-unimplemented.js
```

This will show you:
- ✅ Features that correctly throw errors
- ✅ Features that are silently skipped
- ❌ Any unexpected behavior

### Run Jest Tests

```bash
npm test unimplemented-features.test.ts
```

Note: There may be Jest compatibility issues with the current setup. The verification script is a reliable alternative.

## Understanding the Status

### Throws Error ❌
These features will throw an explicit error when you try to use them:
- `WithStatement isn't implemented`
- `LabeledStatement isn't implemented`

### Silently Skipped ⚠️
These features parse successfully but don't execute correctly:
- **PropertyDefinition** - Class fields are not initialized (remain undefined)
- **PrivateIdentifier** - Private class members are not created
- **StaticBlock** - Static initialization blocks don't run
- **ImportExpression** - Dynamic imports return undefined

### Parse Error ❌
These features cause parsing errors:
- **ES6 Modules** - import/export statements require `sourceType: 'module'`

## What This Means for Users

If you try to use an unimplemented feature in Sval, you'll encounter one of these behaviors:

```javascript
// Example 1: Throws explicit error
interpreter.run(`
  with (obj) { x = 1 }  // Error: "WithStatement isn't implemented"
`)

// Example 2: Silently fails (field is undefined)
interpreter.run(`
  class Test {
    field = 42  // This is silently skipped
  }
  const t = new Test()
  console.log(t.field)  // undefined (should be 42)
`)

// Example 3: Parse error
interpreter.run(`
  import foo from 'bar'  // Error: requires sourceType: 'module'
`)
```

## For Contributors

### Adding a New Feature

When implementing one of these features:

1. **Find the implementation location**
   - Check `TODO.md` for notes on where to add code
   - Usually in `src/evaluate/declaration.ts`, `expression.ts`, or `statement.ts`

2. **Update the evaluator**
   - Add or uncomment the handler function
   - Implement the feature logic

3. **Update the tests**
   - Go to `tests/unimplemented-features.test.ts`
   - Find the test for your feature
   - Remove `expect().toThrow()` or `.toBeUndefined()` assertions
   - Add proper assertions for the implemented behavior

4. **Update documentation**
   - Mark feature as ✅ in `UNIMPLEMENTED.md`
   - Update implementation status in `TODO.md`
   - Remove from unimplemented list

5. **Verify**
   - Run `node scripts/verify-unimplemented.js`
   - Run full test suite
   - Update PR description

### Priority Order

See `TODO.md` for the recommended implementation order. Generally:

1. **High Priority**: ES2022 class features (PropertyDefinition, PrivateIdentifier, StaticBlock)
2. **Medium Priority**: LabeledStatement
3. **Low Priority**: Module system (requires architectural decisions)
4. **Not Recommended**: WithStatement (deprecated)

## Testing Details

### Test Structure

Each unimplemented feature has tests that verify current behavior:

```typescript
it('should handle feature X', () => {
  const interpreter = new Sval({ ecmaVer: 'latest' })
  
  interpreter.run(`/* code using feature X */`)
  
  // Current behavior (feature not working)
  expect(result).toBeUndefined()
  
  // TODO: When implemented, should be:
  // expect(result).toBe(expectedValue)
})
```

### Why Test Unimplemented Features?

1. **Documentation** - Tests serve as examples of what doesn't work
2. **Regression Prevention** - Ensures behavior is consistent
3. **Implementation Guide** - Shows expected behavior when implemented
4. **User Awareness** - Makes limitations clear

## Common Questions

**Q: Why don't some features throw errors?**  
A: Some features are silently skipped during evaluation. This happens when the parser recognizes them but the evaluator doesn't handle them.

**Q: Will these features be implemented?**  
A: See `TODO.md` for implementation priorities. ES2022 class features are high priority. Some features (like WithStatement) may never be implemented.

**Q: How can I work around these limitations?**  
A: 
- For class fields, use constructor assignments
- For private fields, use WeakMaps or naming conventions
- For static blocks, use static properties with initialization
- For modules, use Sval's `import()` method

**Q: Can I help implement these features?**  
A: Yes! Check `TODO.md` for detailed implementation notes, then submit a PR.

## Additional Resources

- **MDN Documentation** - For feature specifications
- **ESTree Spec** - For AST node definitions
- **Acorn Parser** - To understand what can be parsed
- **TC39 Proposals** - For feature status and details
