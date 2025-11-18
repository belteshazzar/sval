# PR Summary: Unimplemented Language Features

## Overview

This PR comprehensively documents all JavaScript language features that Acorn can parse but Sval doesn't yet interpret. It provides tests, documentation, and a roadmap for future implementation.

## What Was Done

### 1. Research & Analysis
- Analyzed Acorn 8.15.0 parsing capabilities (ES2025 support)
- Examined Sval's evaluator implementations
- Identified 9 categories of unimplemented features
- Categorized by behavior: throws error, silently skipped, parse error

### 2. Test Suite Created
**File**: `tests/unimplemented-features.test.ts` (490 lines)
- Tests for all 9 unimplemented feature categories
- Currently failing tests showing expected vs actual behavior
- TODO comments indicating correct behavior when implemented
- Compatible with existing Jest test infrastructure

### 3. Documentation Created

**TODO.md** (345 lines) - Implementation Roadmap
- Detailed description of each unimplemented feature
- Code examples and use cases
- Implementation complexity estimates
- Priority rankings (HIGH/MEDIUM/LOW)
- Dependencies and blockers
- Technical implementation notes

**UNIMPLEMENTED.md** (122 lines) - Quick Reference
- Summary table of all features
- Behavior categorization
- Usage examples
- Recommended implementation order

**TESTING-UNIMPLEMENTED.md** (167 lines) - Test Guide
- How to run tests and verification
- Contributor guidelines
- Common questions and workarounds
- Step-by-step implementation guide

### 4. Verification Tool
**File**: `scripts/verify-unimplemented.js` (215 lines)
- Standalone verification script (no Jest required)
- Tests all unimplemented features
- Clear pass/fail output
- Currently: All 9 tests passing (correctly identifying unimplemented features)

## Key Findings

### Critical Issues (Silently Skipped Features)

These features parse successfully but don't work, potentially causing silent bugs:

1. **PropertyDefinition** (ES2022) - Class fields not initialized
   ```javascript
   class C { x = 1 }
   new C().x // undefined, should be 1
   ```

2. **PrivateIdentifier** (ES2022) - Private members not created
   ```javascript
   class C { #x = 1; get() { return this.#x } }
   new C().get() // undefined, should be 1
   ```

3. **StaticBlock** (ES2022) - Static initialization doesn't run
   ```javascript
   class C { static { this.x = 1 } }
   C.x // undefined, should be 1
   ```

4. **ImportExpression** (ES2020) - Dynamic imports return undefined
   ```javascript
   await import('./module.js') // undefined
   ```

### Features That Correctly Error

1. **WithStatement** - Throws: "WithStatement isn't implemented"
2. **LabeledStatement** - Throws: "LabeledStatement isn't implemented"

### Features With Parse Errors

1. **ES6 Modules** - import/export require sourceType: 'module'

## Recommendations

### Immediate Priority (HIGH)
Implement ES2022 class features to prevent silent failures:
1. PropertyDefinition (public/private class fields)
2. StaticBlock (static initialization blocks)  
3. PrivateIdentifier (private class members)

These are commonly used in modern JavaScript and currently fail silently.

### Medium Priority
1. LabeledStatement - For language completeness
2. ImportExpression - For dynamic module loading

### Low Priority
1. ES6 Module system - Requires architectural decisions
2. WithStatement - Deprecated, not recommended

## Testing

Run verification:
```bash
node scripts/verify-unimplemented.js
```

Output:
```
✅ All 9 tests passed
```

## Impact

- ✅ Zero breaking changes
- ✅ Only adds documentation and tests
- ✅ Provides clear roadmap for contributors
- ✅ Helps users understand limitations
- ✅ Tests will guide future implementation

## Files Changed

```
 TESTING-UNIMPLEMENTED.md             | 167 +++++++
 TODO.md                              | 345 ++++++++++++++
 UNIMPLEMENTED.md                     | 122 +++++
 scripts/verify-unimplemented.js      | 215 +++++++++
 tests/unimplemented-features.test.ts | 490 +++++++++++++++++++
 5 files changed, 1339 insertions(+)
```

## Next Steps

After this PR is merged:
1. Create issues for high-priority features
2. Begin implementation of ES2022 class features
3. Update README.md with link to UNIMPLEMENTED.md
4. Consider adding warning messages for silently skipped features

## Questions?

- See TESTING-UNIMPLEMENTED.md for usage guide
- See TODO.md for implementation details
- See UNIMPLEMENTED.md for quick reference
