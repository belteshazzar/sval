#!/bin/bash

# Setup Test262 test suite for Sval

echo "Cloning Test262 ECMAScript Conformance Test Suite..."

# Check if test262 already exists
if [ -d "test262" ]; then
  echo "test262 directory already exists"
  echo "Pulling latest changes..."
  cd test262
  git pull
  cd ..
else
  # Clone with shallow depth to save space (full clone is ~500MB)
  git clone --depth 1 --single-branch https://github.com/tc39/test262.git
  
  if [ $? -eq 0 ]; then
    echo "Test262 cloned successfully!"
    echo ""
    echo "Test262 Statistics:"
    find test262/test -name "*.js" | wc -l | xargs echo "   Total test files:"
  else
    echo "Failed to clone Test262"
    exit 1
  fi
fi

echo ""
echo "Setup complete!"
echo ""
echo "Run tests with:"
echo "  npm run test262           # Run all tests"
echo "  npm run test262 arrow     # Run tests matching 'arrow'"
echo "  npm run test262 class     # Run tests matching 'class'"
