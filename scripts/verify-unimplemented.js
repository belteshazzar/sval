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

// Load the built Sval
const Sval = require('../dist/sval.js');

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
    expectedError: 'WithStatement'
  },
  {
    name: 'LabeledStatement',
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
    expectedError: 'LabeledStatement'
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
    `,
    expectedError: 'PropertyDefinition'
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
    expectedError: 'PrivateIdentifier'
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
    expectedError: 'StaticBlock'
  },
  {
    name: 'ImportExpression (dynamic import)',
    code: `
      async function loadModule() {
        const module = await import('./some-module.js')
        return module.default
      }
      
      exports.loader = loadModule
    `,
    expectedError: 'ImportExpression'
  },
  {
    name: 'ImportDeclaration',
    code: `
      import foo from 'module'
      exports.foo = foo
    `,
    expectedError: 'ImportDeclaration'
  },
  {
    name: 'ExportNamedDeclaration',
    code: `
      export const x = 1
    `,
    expectedError: 'ExportNamedDeclaration'
  },
  {
    name: 'ExportDefaultDeclaration',
    code: `
      export default function() {
        return 42
      }
    `,
    expectedError: 'ExportDefaultDeclaration'
  }
];

let passed = 0;
let failed = 0;

tests.forEach((test, index) => {
  try {
    const interpreter = new Sval({ ecmaVer: 'latest' });
    interpreter.run(test.code);
    
    console.log(`❌ FAIL: ${test.name}`);
    console.log(`   Expected error containing "${test.expectedError}" but code executed successfully`);
    console.log('');
    failed++;
  } catch (error) {
    if (error.message && error.message.includes(test.expectedError) && error.message.includes("isn't implemented")) {
      console.log(`✅ PASS: ${test.name}`);
      console.log(`   Correctly threw: ${error.message}`);
      console.log('');
      passed++;
    } else {
      console.log(`⚠️  UNEXPECTED: ${test.name}`);
      console.log(`   Expected error containing "${test.expectedError}"`);
      console.log(`   Got: ${error.message}`);
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
