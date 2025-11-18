# Unimplemented Language Features - Summary

This document provides a quick overview of unimplemented JavaScript language features in Sval.

## Quick Reference Table

| Feature | Status | Behavior | Priority | ES Version |
|---------|--------|----------|----------|------------|
| WithStatement | ❌ Not Implemented | Throws error | LOW | ES3 |
| LabeledStatement | ❌ Not Implemented | Throws error | MEDIUM | ES3 |
| PropertyDefinition | ✅ Implemented | Fields initialized | - | ES2022 |
| PrivateIdentifier | ✅ Implemented | Private fields/methods work | - | ES2022 |
| StaticBlock | ⚠️ Silently Skipped | Not executed | MEDIUM | ES2022 |
| ImportExpression | ⚠️ Silently Skipped | Returns undefined | MEDIUM | ES2020 |
| ES6 Modules (import/export) | ❌ Parse Error | Requires sourceType | LOW | ES2015 |

## Behavior Categories

### ❌ Throws Error
These features throw an explicit error when encountered:
- `WithStatement isn't implemented`
- `LabeledStatement isn't implemented`

**Example:**
```javascript
// Throws: "WithStatement isn't implemented"
with (obj) { x = 1; }
```

### ✅ Implemented
These features are fully implemented and working:

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

### ⚠️ Silently Skipped
These features parse successfully but are not executed, leading to unexpected behavior:

**StaticBlock**
```javascript
class MyClass {
  static {
    this.value = 42  // Not executed
  }
}
console.log(MyClass.value)  // undefined (should be 42)
```

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
✅ PASS: WithStatement - Correctly threw error
✅ PASS: LabeledStatement - Correctly threw error
(Other tests verify silent failures produce undefined values)
```

## Recommended Implementation Order

1. **Phase 1: ES2022 Class Features** (HIGH priority)
   - ✅ ~~PropertyDefinition~~ (COMPLETED)
   - ✅ ~~PrivateIdentifier~~ (COMPLETED)
   - StaticBlock

2. **Phase 2: Control Flow** (MEDIUM priority)
   - LabeledStatement

3. **Phase 3: Module System** (LOW priority - requires architecture decisions)
   - ImportExpression
   - ES6 static imports/exports

4. **Phase 4: Deprecated** (NOT recommended)
   - WithStatement

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
