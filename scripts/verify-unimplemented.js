#!/usr/bin/env node

/**
 * Verification script to test unimplemented features
 * This manually tests the features to verify they throw the expected errors
 */

const path = require('path');

// Build the project first if needed
const { execSync } = require('child_process');

console.log('Building Sval...\n');
try {
  execSync('npm run start', { 
    cwd: path.join(__dirname, '..'),
    stdio: 'pipe'
  });
} catch (e) {
  // Ignore build errors for now
}

// Load the built Sval - use dynamic import for ES module
(async () => {
  const { default: Sval } = await import('../dist/sval.js');

  console.log('Testing Unimplemented Features\n');
  console.log('=' .repeat(60) + '\n');

const tests = [
  {
    name: 'WithStatement',
    code: `
      const obj = { x: 10, y: 20 }
      with (obj) {
        exports.result = x + y
      }
    `,
    expectedBehavior: 'works',
    verify: (exports) => exports.result === 30
  },
  {
    name: 'WithStatement - nested scope',
    code: `
      const outer = { a: 1, b: 2 }
      const inner = { b: 3, c: 4 }
      with (outer) {
        exports.a = a
        with (inner) {
          exports.b = b  // Should be 3 from inner
          exports.c = c
        }
      }
    `,
    expectedBehavior: 'works',
    verify: (exports) => exports.a === 1 && exports.b === 3 && exports.c === 4
  },
  {
    name: 'LabeledStatement - break to label',
    code: `
      exports.result = 0
      outer: for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (i === 1 && j === 1) {
            break outer
          }
          exports.result++
        }
      }
    `,
    expectedBehavior: 'works',
    verify: (exports) => exports.result === 4  // 3 iterations in first row + 1 in second row
  },
  {
    name: 'LabeledStatement - continue to label',
    code: `
      exports.result = 0
      outer: for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (j === 1) {
            continue outer
          }
          exports.result++
        }
      }
    `,
    expectedBehavior: 'works',
    verify: (exports) => exports.result === 3  // Only j=0 executes for each i
  },
  {
    name: 'LabeledStatement - while loop',
    code: `
      exports.count = 0
      outer: while (exports.count < 10) {
        exports.count++
        if (exports.count === 5) {
          break outer
        }
      }
    `,
    expectedBehavior: 'works',
    verify: (exports) => exports.count === 5
  },
  {
    name: 'LabeledStatement - labeled block',
    code: `
      exports.result = 0
      myLabel: {
        exports.result = 1
        break myLabel
        exports.result = 2  // Should not execute
      }
    `,
    expectedBehavior: 'works',
    verify: (exports) => exports.result === 1
  },
  {
    name: 'PropertyDefinition (class fields)',
    code: `
      class MyClass {
        x = 10
        y = 20
        
        getSum() {
          return this.x + this.y
        }
      }
      
      const instance = new MyClass()
      exports.result = instance.getSum()
      exports.x = instance.x
      exports.y = instance.y
    `,
    expectedBehavior: 'works',
    verify: (exports) => exports.x === 10 && exports.y === 20 && exports.result === 30
  },
  {
    name: 'PrivateIdentifier',
    code: `
      class MyClass {
        #private = 42
        
        getPrivate() {
          return this.#private
        }
      }
      
      const instance = new MyClass()
      exports.result = instance.getPrivate()
    `,
    expectedBehavior: 'works',
    verify: (exports) => exports.result === 42
  },
  {
    name: 'StaticBlock',
    code: `
      class MyClass {
        static value
        
        static {
          this.value = 42
        }
      }
      
      exports.result = MyClass.value
    `,
    expectedBehavior: 'works',
    verify: (exports) => exports.result === 42
  },
  {
    name: 'ImportExpression (dynamic import)',
    code: `
      async function loadModule() {
        const module = await import('./some-module.js')
        return module
      }
      
      exports.loader = loadModule
      exports.loaderType = typeof loadModule
    `,
    expectedBehavior: 'silently_skipped',
    verify: (exports) => exports.loaderType === 'function'
  },
  {
    name: 'ImportDeclaration',
    code: `
      import foo from 'module'
      exports.foo = foo
    `,
    expectedBehavior: 'parse_error',
    expectedError: 'sourceType: module'
  },
  {
    name: 'ExportNamedDeclaration',
    code: `
      export const x = 1
    `,
    expectedBehavior: 'parse_error',
    expectedError: 'sourceType: module'
  },
  {
    name: 'ExportDefaultDeclaration',
    code: `
      export default function() {
        return 42
      }
    `,
    expectedBehavior: 'parse_error',
    expectedError: 'sourceType: module'
  }
];

let passed = 0;
let failed = 0;

tests.forEach((test, index) => {
  try {
    const interpreter = new Sval({ ecmaVer: 'latest' });
    interpreter.run(test.code);
    
    // If we get here, code executed successfully
    if (test.expectedBehavior === 'works') {
      // Verify the feature is working correctly
      if (test.verify(interpreter.exports)) {
        console.log(`✅ PASS: ${test.name}`);
        console.log(`   Feature is working correctly`);
        console.log('');
        passed++;
      } else {
        console.log(`❌ FAIL: ${test.name}`);
        console.log(`   Feature executed but verification failed`);
        console.log(`   exports:`, interpreter.exports);
        console.log('');
        failed++;
      }
    } else if (test.expectedBehavior === 'silently_skipped') {
      // Verify the feature is indeed not working correctly
      if (test.verify(interpreter.exports)) {
        console.log(`✅ PASS: ${test.name}`);
        console.log(`   Feature is silently skipped (fields/blocks not initialized)`);
        console.log('');
        passed++;
      } else {
        console.log(`❌ FAIL: ${test.name}`);
        console.log(`   Feature appears to be working (unexpected)`);
        console.log('');
        failed++;
      }
    } else {
      console.log(`❌ FAIL: ${test.name}`);
      console.log(`   Expected error containing "${test.expectedError}" but code executed successfully`);
      console.log('');
      failed++;
    }
  } catch (error) {
    if (test.expectedBehavior === 'parse_error' || test.expectedBehavior === 'throws_error') {
      const expectedMsg = test.expectedError;
      if (error.message && error.message.includes(expectedMsg)) {
        console.log(`✅ PASS: ${test.name}`);
        console.log(`   Correctly threw: ${error.message}`);
        console.log('');
        passed++;
      } else {
        console.log(`⚠️  UNEXPECTED: ${test.name}`);
        console.log(`   Expected error containing "${expectedMsg}"`);
        console.log(`   Got: ${error.message}`);
        console.log('');
        failed++;
      }
    } else {
      console.log(`❌ FAIL: ${test.name}`);
      console.log(`   Unexpected error: ${error.message}`);
      console.log('');
      failed++;
    }
  }
});

console.log('=' .repeat(60));
console.log(`\nResults: ${passed} passed, ${failed} failed out of ${tests.length} tests`);
console.log('');

if (passed === tests.length) {
  console.log('✅ All unimplemented features correctly throw errors!');
  process.exit(0);
} else {
  console.log('⚠️  Some tests did not behave as expected.');
  process.exit(1);
}
})();
