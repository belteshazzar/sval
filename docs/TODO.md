# TODO: Unimplemented Language Features

This document tracks unimplemented ECMAScript features that the Acorn parser can parse but Sval doesn't yet interpret.

## Status Legend
- ❌ Not Implemented
- ⚠️ Partially Implemented
- ✅ Implemented

## High Priority Features (ES2022+)

### Class Features (ES2022)

#### PropertyDefinition - Public/Private Class Fields ✅
**Priority:** HIGH  
**ECMAScript Version:** ES2022 (ES13)  
**Complexity:** Medium  
**Status:** ✅ IMPLEMENTED

**Description:**
Class fields allow defining properties directly in the class body without using the constructor.

**Examples:**
```javascript
class Counter {
  count = 0  // Public field
  #private = 42  // Private field
  
  increment() {
    this.count++
  }
}
```

**Implementation Notes:**
- ✅ Implemented in `declaration.ts` 
- ✅ Handles both instance and static fields
- ✅ Executes field initializers in the correct order (during construction)
- ✅ Fields are initialized before constructor body runs

**Related Tests:**
- `tests/unimplemented-features.test.ts` - "PropertyDefinition (ES2022 Class Fields)" ✅ PASSING

**Blocked By:** None  
**Blocks:** None (PrivateIdentifier also implemented)

---

#### PrivateIdentifier - Private Class Members ✅
**Priority:** HIGH  
**ECMAScript Version:** ES2022 (ES13)  
**Complexity:** High  
**Status:** ✅ IMPLEMENTED

**Description:**
Private class fields and methods using the `#` prefix that are only accessible within the class.

**Examples:**
```javascript
class BankAccount {
  #balance = 0
  
  deposit(amount) {
    this.#balance += amount
  }
  
  #validateTransaction() {
    // Private method
  }
}
```

**Implementation Notes:**
- ✅ Uses WeakMap for private field storage per instance
- ✅ Enforces access restrictions (no access from outside class)
- ✅ Supports both fields and methods
- ✅ Static private members are supported
- ✅ Private fields are NOT enumerable and NOT inherited

**Related Tests:**
- `tests/unimplemented-features.test.ts` - "PrivateIdentifier (ES2022 Private Fields)" ✅ PASSING

**Blocked By:** None  
**Blocks:** None

---

#### StaticBlock - Static Initialization Blocks ✅
**Priority:** MEDIUM  
**ECMAScript Version:** ES2022 (ES13)  
**Complexity:** Medium  
**Status:** ✅ IMPLEMENTED

**Description:**
Static blocks allow complex initialization logic for static class properties.

**Examples:**
```javascript
class MyClass {
  static config
  
  static {
    // Complex initialization
    this.config = loadConfig()
  }
}
```

**Implementation Notes:**
- ✅ Implemented in `declaration.ts`
- ✅ Executed when class is defined (not when instantiated)
- ✅ Can access private static fields
- ✅ Multiple static blocks execute in order
- ✅ `this` refers to the class constructor

**Related Tests:**
- `tests/unimplemented-features.test.ts` - "StaticBlock (ES2022)" ✅ PASSING

**Blocked By:** None  
**Blocks:** None

---

## Medium Priority Features

### LabeledStatement ✅
**Priority:** MEDIUM  
**ECMAScript Version:** ES3  
**Complexity:** Medium  
**Status:** ✅ IMPLEMENTED

**Description:**
Labels provide a way to identify loops or blocks, allowing `break` and `continue` to target specific outer loops.

**Examples:**
```javascript
outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) {
      break outer  // Breaks the outer loop
    }
  }
}
```

**Implementation Notes:**
- ✅ Implemented in `statement.ts`
- ✅ Tracks labels using special `__LABEL__` scope variable
- ✅ Break/continue statements can reference labels
- ✅ Can label any statement, not just loops
- ✅ Uses `scope.hasOwn()` to prevent nested loops from incorrectly matching outer labels

**Related Tests:**
- `tests/unimplemented-features.test.ts` - "LabeledStatement" ✅ PASSING
- Comprehensive tests in `scripts/verify-unimplemented.js`

**Blocked By:** None  
**Blocks:** None

---

### ImportExpression - Dynamic Import ❌
**Priority:** MEDIUM  
**ECMAScript Version:** ES2020 (ES11)  
**Complexity:** High  

**Description:**
Dynamic import allows importing modules at runtime as a promise.

**Examples:**
```javascript
async function loadModule(name) {
  const module = await import(`./modules/${name}.js`)
  return module.default
}
```

**Implementation Notes:**
- Returns a Promise
- Acorn parses it as `ImportExpression` node type
- Sval would need a module resolution strategy
- Should integrate with Sval's import/export system
- Requires async support (already implemented)

**Related Tests:**
- `tests/unimplemented-features.test.ts` - "ImportExpression (Dynamic Import)"

**Blocked By:** Module system infrastructure  
**Blocks:** None

---

## Low Priority Features

### WithStatement ✅
**Priority:** LOW  
**ECMAScript Version:** ES3  
**Complexity:** Medium  
**Status:** ✅ IMPLEMENTED

**Description:**
With statement extends the scope chain for a statement (deprecated and not allowed in strict mode).

**Examples:**
```javascript
with (obj) {
  // Properties of obj are in scope
  x = 1  // Sets obj.x = 1
}
```

**Implementation Notes:**
- ✅ Implemented in `statement.ts`
- ✅ Creates a new scope with object properties as variables
- ⚠️ Only works in non-strict mode (as per JavaScript spec)
- ⚠️ Generally considered bad practice but implemented for compatibility

**Related Tests:**
- `tests/unimplemented-features.test.ts` - "WithStatement" ✅ PASSING

**Blocked By:** None  
**Blocks:** None

---

### ES6 Module System ❌
**Priority:** LOW (for interpreter use case)  
**ECMAScript Version:** ES6 (ES2015)  
**Complexity:** Very High  

**Description:**
Static import/export declarations for ES6 modules.

**Node Types:**
- `ImportDeclaration`
- `ImportSpecifier`
- `ImportDefaultSpecifier`
- `ImportNamespaceSpecifier`
- `ExportNamedDeclaration`
- `ExportSpecifier`
- `ExportDefaultDeclaration`
- `ExportAllDeclaration`

**Examples:**
```javascript
// Imports
import foo from 'module'
import { bar, baz } from 'module'
import * as module from 'module'

// Exports
export const x = 1
export default function() {}
export * from 'module'
export { foo, bar }
```

**Implementation Notes:**
- Requires complete module resolution system
- Static analysis at parse time
- Module registry/cache
- Circular dependency handling
- Sval already has `import()` method for sandbox imports
- May not be critical for interpreter use case
- Would need to define how modules are resolved/loaded

**Related Tests:**
- `tests/unimplemented-features.test.ts` - "ES6 Modules (Import/Export)"

**Blocked By:** Module infrastructure design decision  
**Blocks:** ImportExpression (dynamic import)

---

## Already Implemented Features

These were identified as potentially missing but are actually implemented:

### Program ✅
- Implemented in `src/evaluate/program.ts`
- Currently commented out in index but present

### Property ✅
- Handled within `ObjectExpression` in `src/evaluate/expression.ts`
- Not a separate evaluator function

### RegExpLiteral ⚠️
- Regular expressions work via `Literal` evaluator
- May need testing for edge cases with newer flags (s, u, y, d)

---

## Implementation Roadmap

### Phase 1: ES2022 Class Features ✅ COMPLETED
1. ✅ **PropertyDefinition** - Public class fields (COMPLETED)
2. ✅ **StaticBlock** - Static initialization blocks (COMPLETED)
3. ✅ **PrivateIdentifier** - Private fields and methods (COMPLETED)

**Rationale:** These are standard ES2022 features, commonly used in modern JavaScript, and have moderate complexity.

### Phase 2: Control Flow Enhancement ✅ COMPLETED
1. ✅ **LabeledStatement** - For completeness (COMPLETED)
2. ✅ **WithStatement** - For compatibility (COMPLETED)

**Rationale:** Less commonly used but straightforward to implement.

### Phase 3: Module System (Optional - Remaining Work)
1. **Design module resolution strategy**
2. **ImportExpression** - Dynamic imports
3. **Static imports/exports** (if needed)

**Rationale:** These require significant architectural decisions and may not be necessary for Sval's interpreter use case.

---

## Testing Strategy

All previously unimplemented features now have comprehensive tests in:
- `tests/unimplemented-features.test.ts` - Basic feature tests
- `scripts/verify-unimplemented.js` - Detailed verification script

**Current Status:**
- ✅ PropertyDefinition - PASSING
- ✅ PrivateIdentifier - PASSING  
- ✅ StaticBlock - PASSING
- ✅ LabeledStatement - PASSING
- ✅ WithStatement - PASSING
- ⚠️ ImportExpression - Silently skipped (not implemented)
- ❌ ES6 Modules - Parse error (sourceType: module required)

As features are implemented:
1. Update the corresponding evaluator function
2. Update test expectations from throwing errors to checking correct behavior
3. Update the status in this document
4. Add more comprehensive test cases

---

## Notes

- Sval uses Acorn 8.15.0 which supports up to ES2025
- The interpreter pattern with generators limits some implementation approaches
- Some features may require changes to the Scope system
- Private identifiers will need special handling in the scope/variable system

---

## References

- [ESTree Spec](https://github.com/estree/estree)
- [Acorn Parser](https://github.com/acornjs/acorn)
- [TC39 Finished Proposals](https://github.com/tc39/proposals/blob/main/finished-proposals.md)
- [MDN JavaScript Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
