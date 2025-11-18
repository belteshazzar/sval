#!/usr/bin/env node

/**
 * Test262 Runner for Sval
 * Runs ECMAScript conformance tests against Sval interpreter
 */

const { readFileSync, readdirSync, statSync, existsSync } = require('fs')
const { join, relative } = require('path')
//const Sval = require(join(__dirname, '../node_modules/sval/dist/sval.umd.cjs'))
const Sval = require('../dist/sval.js').default
// Configuration
const TEST262_DIR = join(__dirname, '../test262')
const DEFAULT_TEST_DIR = 'test/language'
const HARNESS_DIR = join(TEST262_DIR, 'harness')

// Load Test262 harness files
let harnessJsContent = ''
try {
  const harnessFiles = readdirSync(HARNESS_DIR).filter(f => f.endsWith('.js'))
  for (const harnessFile of harnessFiles) {
    try {
      const tempContent = readFileSync(join(HARNESS_DIR, harnessFile), 'utf-8')
      // Remove the frontmatter from harness files
      harnessJsContent += tempContent.replace(/\/\*---[\s\S]*?---\*\/\n?/, '') + '\n'
    } catch (e) {
      console.warn(`Warning: Could not load ${harnessFile} from Test262 harness: ${e.message}`)
    }
  }
} catch (e) {
  console.warn(`Warning: Could not read Test262 harness directory: ${e.message}`)
}

// Test statistics
const stats = {
  total: 0,
  passed: 0,
  failed: 0,
  errors: []
}

// Parse YAML-like frontmatter from test files
function parseFrontmatter(content) {
  // Handle non-string content
  if (typeof content !== 'string') {
    console.warn('Warning: Non-string content passed to parseFrontmatter')
    return {}
  }
  
  // Match frontmatter with optional newline after opening
  const match = content.match(/\/\*---\s*\n([\s\S]*?)\n---\*\//)
  if (!match) return {}
  
  const frontmatter = {}
  const lines = match[1].split('\n')
  let currentKey = null
  
  for (const line of lines) {
    const keyMatch = line.match(/^(\w+):\s*(.*)/)
    if (keyMatch) {
      currentKey = keyMatch[1]
      const value = keyMatch[2].trim()
      if (value === '>') {
        frontmatter[currentKey] = ''
      } else if (value.startsWith('[')) {
        frontmatter[currentKey] = value.slice(1, -1).split(',').map(s => s.trim())
      } else {
        frontmatter[currentKey] = value
      }
    } else if (currentKey && line.trim()) {
      frontmatter[currentKey] += (frontmatter[currentKey] ? ' ' : '') + line.trim()
    }
  }
  
  return frontmatter
}

// Run a single test
async function runTest(testPath, content) {
  stats.total++
  
  const metadata = parseFrontmatter(content)
  const testCode = content.replace(/\/\*---[\s\S]*?---\*\/\n?/, '')
  
  const isAsync = metadata.flags && metadata.flags.includes('async')
  const isOnlyStrict = metadata.flags && metadata.flags.includes('onlyStrict')
  const isNoStrict = metadata.flags && metadata.flags.includes('noStrict')
  const isNegative = metadata.negative
  
  try {
    const interpreter = new Sval({
      ecmaVer: 'latest',
      sandBox: true
    })
    
    // For async tests, we need to handle $DONE callback
    let asyncTestComplete = null
    let asyncTestError = null
    
    if (isAsync) {
      asyncTestComplete = new Promise((resolve, reject) => {
        interpreter.import({
          $DONE: (error) => {
            if (error) {
              asyncTestError = error
              reject(error)
            } else {
              resolve()
            }
          },
          $ERROR: (message) => {
            const err = new Error(message)
            asyncTestError = err
            reject(err)
          },
          $262: {
            createRealm() {},
            detachArrayBuffer() {},
            evalScript() {},
            global: globalThis,
            agent: {
              start() {},
              broadcast() {},
              getReport() { return null },
              sleep() {}
            }
          },
          Test262Error: class Test262Error extends Error {
            constructor(message) {
              super(message)
              this.name = 'Test262Error'
            }
          },
          print: console.log,
          setTimeout,
          clearTimeout,
          setInterval,
          clearInterval,
          Promise,
          Map,
          Set,
          WeakMap,
          WeakSet,
          Symbol,
          Proxy,
          Reflect
        })
      })
    } else {
      interpreter.import({
        $DONE: (error) => {
          if (error) throw error
        },
        $ERROR: (message) => {
          throw new Error(message)
        },
        $262: {
          createRealm() {},
          detachArrayBuffer() {},
          evalScript() {},
          global: globalThis,
          agent: {
            start() {},
            broadcast() {},
            getReport() { return null },
            sleep() {}
          }
        },
        Test262Error: class Test262Error extends Error {
          constructor(message) {
            super(message)
            this.name = 'Test262Error'
          }
        },
        print: console.log,
        setTimeout,
        clearTimeout,
        setInterval,
        clearInterval,
        Promise,
        Map,
        Set,
        WeakMap,
        WeakSet,
        Symbol,
        Proxy,
        Reflect
      })
    }
    
    // For onlyStrict tests, prepend 'use strict' to the ENTIRE code (harness + test)
    // This ensures the whole program runs in strict mode
    const fullTestCode = isOnlyStrict 
      ? `'use strict';\n` + harnessJsContent + '\n' + testCode
      : harnessJsContent + '\n' + testCode
    
    interpreter.run(fullTestCode)
    
    // If async test, wait for $DONE to be called
    if (isAsync) {
      try {
        await Promise.race([
          asyncTestComplete,
          new Promise((_, reject) => 
            setTimeout(() => reject(new Error('Async test timeout')), 5000)
          )
        ])
      } catch (asyncError) {
        throw asyncTestError || asyncError
      }
    }
    
    // If test is negative (should throw), and we got here, it's a failure
    if (isNegative) {
      stats.failed++
      stats.errors.push({
        file: testPath,
        expected: `Should throw ${isNegative.type || 'error'}`,
        actual: 'No error thrown'
      })
      return { passed: false, error: 'Expected error but none thrown' }
    }
    
    stats.passed++
    return { passed: true }
    
  } catch (error) {
    // If test is negative (should throw), this is expected
    if (isNegative) {
      const expectedType = isNegative.type
      const actualType = error.constructor.name
      
      // Check if error type matches (if specified)
      if (!expectedType || actualType.includes(expectedType) || expectedType.includes(actualType)) {
        stats.passed++
        return { passed: true }
      }
    }
    
    // Test failed
    stats.failed++
    stats.errors.push({
      file: testPath,
      error: error.message,
      stack: error.stack
    })
    return { passed: false, error: error.message }
  }
}

// Recursively find all .js test files
function findTestFiles(dir, filter = null) {
  const files = []
  
  if (!existsSync(dir)) {
    return files
  }
  
  function walk(currentDir) {
    const items = readdirSync(currentDir)
    
    for (const item of items) {
      const fullPath = join(currentDir, item)
      const stat = statSync(fullPath)
      
      if (stat.isDirectory()) {
        walk(fullPath)
      } else if (item.endsWith('.js')) {
        if (!filter || filter(fullPath)) {
          files.push(fullPath)
        }
      }
    }
  }
  
  walk(dir)
  return files
}

// Main runner
async function runTests(testFilter = null) {
  console.log('Running Test262 ECMAScript Conformance Tests\n')
  
  // Check if test262 is cloned
  if (!existsSync(TEST262_DIR)) {
    console.error('Test262 not found!')
    console.error('Please run: npm run test262:setup')
    process.exit(1)
  }
    
  const testDir = join(TEST262_DIR, DEFAULT_TEST_DIR)
  const allTestFiles = findTestFiles(testDir, testFilter)
  
  console.log(`\nFound ${allTestFiles.length} test files\n`)
  
  const startTime = Date.now()
  let lastProgress = 0
  
  for (let i = 0; i < allTestFiles.length; i++) {
    const file = allTestFiles[i]
    const relativePath = relative(TEST262_DIR, file)
    
    try {
      const content = readFileSync(file, 'utf-8')
      await runTest(relativePath, content)
    } catch (readError) {
      // Skip files we can't read
      console.warn(`Could not read ${relativePath}: ${readError.message}`)
      stats.skipped++
    }
    
    // Progress indicator
    const progress = Math.floor((i + 1) / allTestFiles.length * 100)
    if (progress >= lastProgress + 10) {
      console.log(`Progress: ${progress}% (${i + 1}/${allTestFiles.length})`)
      lastProgress = progress
    }
  }
  
  const duration = ((Date.now() - startTime) / 1000).toFixed(2)
  
  // Print results
  console.log('\n' + '='.repeat(60))
  console.log('Test262 Results')
  console.log('='.repeat(60))
  console.log(`Total:   ${stats.total}`)
  console.log(`Passed:  ${stats.passed}`)
  console.log(`Failed:  ${stats.failed}`)
  console.log(`Pass Rate: ${((stats.passed / stats.total) * 100).toFixed(2)}%`)
  console.log(`Duration: ${duration}s`)
  console.log('='.repeat(60))
  
  // Show first 10 errors
  if (stats.errors.length > 0) {
    console.log('\nFirst 10 Failures:')
    stats.errors.slice(0, 10).forEach((err, i) => {
      console.log(`\n${i + 1}. ${err.file}`)
      console.log(`   ${err.error || err.expected}`)
    })
    
    if (stats.errors.length > 10) {
      console.log(`\n... and ${stats.errors.length - 10} more failures`)
    }
  }
  
  process.exit(stats.failed > 0 ? 1 : 0)
}

// CLI handling
const args = process.argv.slice(2)
const filter = args[0]

let testFilter = null
if (filter) {
  console.log(`Filtering tests: ${filter}`)
  testFilter = (path) => path.includes(filter)
}

runTests(testFilter)
