# Unimplemented Language Features - Summary

This document provides a quick overview of unimplemented JavaScript language features in Sval.

## Quick Reference Table

| Feature | Status | Behavior | Priority | ES Version |
|---------|--------|----------|----------|------------|
| WithStatement | ✅ Implemented | Works in non-strict mode | - | ES3 |
| LabeledStatement | ✅ Implemented | Labels work with break/continue | - | ES3 |
| PropertyDefinition | ✅ Implemented | Fields initialized | - | ES2022 |
| PrivateIdentifier | ✅ Implemented | Private fields/methods work | - | ES2022 |
| StaticBlock | ✅ Implemented | Static blocks executed | - | ES2022 |
| ImportExpression | ⚠️ Silently Skipped | Returns undefined | MEDIUM | ES2020 |
| ES6 Modules (import/export) | ❌ Parse Error | Requires sourceType | LOW | ES2015 |

## Behavior Categories

### ✅ Implemented
These features are fully implemented and working:

**WithStatement (ES3)**
```javascript
const obj = { x: 1, y: 2 }
with (obj) {
  console.log(x + y)  // 3
}
```
Note: `with` statement is deprecated and not allowed in strict mode, but works in non-strict mode.

**LabeledStatement (ES3)**
```javascript
// Break to outer loop from nested loop
outer: for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    if (i === 2 && j === 2) break outer
  }
}

// Continue with label
outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (j === 1) continue outer
  }
}
```

**PropertyDefinition (Class Fields)**
```javascript
class MyClass {
  x = 10  // Instance field
  static y = 20  // Static field
}
const obj = new MyClass()
console.log(obj.x)  // 10
console.log(MyClass.y)  // 20
```

**PrivateIdentifier (Private Fields & Methods)**
```javascript
class MyClass {
  #private = 42  // Private instance field
  static #staticPrivate = 'secret'  // Private static field
  
  #privateMethod() {  // Private method
    return this.#private
  }
  
  getPrivate() {
    return this.#privateMethod()
  }
}
const obj = new MyClass()
console.log(obj.getPrivate())  // 42
// obj.#private  // Error: Cannot read private member
```

**StaticBlock (Static Initialization Blocks)**
```javascript
class MyClass {
  static value
  static {
    this.value = 42  // Executed during class creation
  }
}
console.log(MyClass.value)  // 42
```

### ⚠️ Silently Skipped
These features parse successfully but are not executed, leading to unexpected behavior:

**ImportExpression**
```javascript
const module = await import('./module.js')  // Returns undefined
```

### ❌ Parse Error
These features cannot be parsed with current Sval configuration:

**ES6 Modules**
```javascript
// Throws parsing error: "'import' and 'export' may appear only with 'sourceType: module'"
import foo from 'module'
export const x = 1
```

## Testing

All unimplemented features have corresponding tests in `tests/unimplemented-features.test.ts`.

Run verification script:
```bash
node scripts/verify-unimplemented.js
```

Expected output:
```
✅ PASS: WithStatement - Feature is working correctly
✅ PASS: LabeledStatement - Feature is working correctly
(Other tests verify implemented features work correctly)
```

## Recommended Implementation Order

1. **Phase 1: ES2022 Class Features** (HIGH priority)
   - ✅ ~~PropertyDefinition~~ (COMPLETED)
   - ✅ ~~PrivateIdentifier~~ (COMPLETED)
   - ✅ ~~StaticBlock~~ (COMPLETED)

2. **Phase 2: Control Flow** (MEDIUM priority)
   - ✅ ~~LabeledStatement~~ (COMPLETED)
   - ✅ ~~WithStatement~~ (COMPLETED)

3. **Phase 3: Module System** (LOW priority - requires architecture decisions)
   - ImportExpression
   - ES6 static imports/exports

## For Developers

When implementing a feature:

1. Remove the "skip" comment or add handler in `src/evaluate/`
2. Update the corresponding test in `tests/unimplemented-features.test.ts`
3. Remove the TODO comments and add normal assertions
4. Update this summary and TODO.md
5. Run tests to verify implementation

## Additional Resources

- See `TODO.md` for detailed implementation notes
- See `tests/unimplemented-features.test.ts` for test cases
- See `README.md` for general Sval documentation
