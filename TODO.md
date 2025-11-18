# TODO: Unimplemented Language Features

This document tracks unimplemented ECMAScript features that the Acorn parser can parse but Sval doesn't yet interpret.

## Status Legend
- ❌ Not Implemented
- ⚠️ Partially Implemented
- ✅ Implemented

## High Priority Features (ES2022+)

### Class Features (ES2022)

#### PropertyDefinition - Public/Private Class Fields ❌
**Priority:** HIGH  
**ECMAScript Version:** ES2022 (ES13)  
**Complexity:** Medium  

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
- Currently commented as "skip for now" in `declaration.ts` line 99-102
- Needs to handle both instance and static fields
- Must execute field initializers in the correct order (during construction)
- Fields should be initialized before constructor body runs

**Related Tests:**
- `tests/unimplemented-features.test.ts` - "PropertyDefinition (ES2022 Class Fields)"

**Blocked By:** None  
**Blocks:** PrivateIdentifier support

---

#### PrivateIdentifier - Private Class Members ❌
**Priority:** HIGH  
**ECMAScript Version:** ES2022 (ES13)  
**Complexity:** High  

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
- Requires new internal mechanism for private field storage
- Must enforce access restrictions (no access from outside class)
- Needs to support both fields and methods
- Static private members also need support
- Private fields are NOT enumerable and NOT inherited

**Related Tests:**
- `tests/unimplemented-features.test.ts` - "PrivateIdentifier (ES2022 Private Fields)"

**Blocked By:** PropertyDefinition  
**Blocks:** None

---

#### StaticBlock - Static Initialization Blocks ❌
**Priority:** MEDIUM  
**ECMAScript Version:** ES2022 (ES13)  
**Complexity:** Medium  

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
- Currently commented as "skip for now" in `declaration.ts` line 102-104
- Executed when class is defined (not when instantiated)
- Can access private static fields
- Multiple static blocks execute in order
- `this` refers to the class constructor

**Related Tests:**
- `tests/unimplemented-features.test.ts` - "StaticBlock (ES2022)"

**Blocked By:** None  
**Blocks:** None

---

## Medium Priority Features

### LabeledStatement ❌
**Priority:** MEDIUM  
**ECMAScript Version:** ES3  
**Complexity:** Medium  

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
- Mentioned in README.md as "not recommended"
- Would require tracking label stack in scope
- Break/continue statements need to reference labels
- Can label any statement, not just loops
- Relatively rare in modern code

**Related Tests:**
- `tests/unimplemented-features.test.ts` - "LabeledStatement"

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

### WithStatement ❌
**Priority:** LOW  
**ECMAScript Version:** ES3  
**Complexity:** Medium  

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
- Explicitly mentioned in README.md as "not recommended"
- Forbidden in strict mode
- Generally considered bad practice
- Causes performance issues in JavaScript engines
- **RECOMMENDATION:** Leave unimplemented as it's deprecated

**Related Tests:**
- `tests/unimplemented-features.test.ts` - "WithStatement"

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

### Phase 1: ES2022 Class Features (Recommended First)
1. **PropertyDefinition** - Public class fields
2. **StaticBlock** - Static initialization blocks
3. **PrivateIdentifier** - Private fields and methods

**Rationale:** These are standard ES2022 features, commonly used in modern JavaScript, and have moderate complexity.

### Phase 2: Control Flow Enhancement
1. **LabeledStatement** - For completeness

**Rationale:** Less commonly used but straightforward to implement.

### Phase 3: Module System (Optional)
1. **Design module resolution strategy**
2. **ImportExpression** - Dynamic imports
3. **Static imports/exports** (if needed)

**Rationale:** These require significant architectural decisions and may not be necessary for Sval's interpreter use case.

### Phase 4: Deprecated Features (Not Recommended)
1. **WithStatement** - Only if absolutely necessary for compatibility

**Rationale:** Deprecated and considered harmful; leave unimplemented.

---

## Testing Strategy

All unimplemented features have corresponding tests in `tests/unimplemented-features.test.ts` that are currently expected to throw errors with messages like:
- `"PropertyDefinition isn't implemented"`
- `"LabeledStatement isn't implemented"`
- etc.

As features are implemented:
1. Update the corresponding evaluator function
2. Remove the `expect().toThrow()` wrapper from tests
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
