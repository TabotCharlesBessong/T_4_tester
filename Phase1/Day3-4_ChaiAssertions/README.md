# Day 3-4: Exploring Chai Assertions

## 📚 Learning Objectives

By the end of Day 3-4, you should understand:
- Different ways to write assertions in Chai
- When to use `.equal()` vs `.eql()` vs `.deep.equal()`
- How to check types with Chai
- How to check existence and emptiness
- How to make comparison assertions

## 📁 Structure

This folder contains 4 sections, each focusing on different types of Chai assertions:

### Section 1: Equal Assertions
**Files:**
- `functions.js` - Functions to test
- `functions.spec.js` - Test file demonstrating `.equal()`, `.eql()`, and `.deep.equal()`

**Key Concepts:**
- `.equal()` - Strict equality (===) - use for primitives
- `.eql()` - Deep equality - use for objects/arrays
- `.deep.equal()` - Same as `.eql()` - use for nested objects

### Section 2: Type Checking
**Files:**
- `functions.js` - Functions returning different types
- `functions.spec.js` - Test file demonstrating `.a()` and `.an()`

**Key Concepts:**
- `.a(type)` - Check if value is of a specific type
- `.an(type)` - Alternative syntax (same as `.a()`)
- Types: 'number', 'string', 'boolean', 'array', 'object', 'function', 'date', 'regexp', 'null', 'undefined'

### Section 3: Existence Checking
**Files:**
- `functions.js` - Functions returning various values (truthy, falsy, null, undefined)
- `functions.spec.js` - Test file demonstrating `.exist`, `.null`, `.undefined`, `.empty`

**Key Concepts:**
- `.exist` - Check if value exists (not null/undefined)
- `.null` - Check if value is null
- `.undefined` - Check if value is undefined
- `.empty` - Check if string/array/object is empty

### Section 4: Comparison Assertions
**Files:**
- `functions.js` - Math functions to test
- `functions.spec.js` - Test file demonstrating `.above()`, `.below()`, `.least()`, `.most()`, `.within()`

**Key Concepts:**
- `.above(n)` - Greater than n
- `.below(n)` - Less than n
- `.at.least(n)` - Greater than or equal to n
- `.at.most(n)` - Less than or equal to n
- `.within(min, max)` - Between min and max (inclusive)

## 🚀 How to Use

1. **Start with Section 1** - Read the test file and understand the differences
2. **Run the tests** - Execute each section's tests to see them in action
3. **Experiment** - Modify the tests and see what happens
4. **Practice** - Try writing your own tests using these assertions

## 🧪 Running Tests

To run tests for a specific section:

```bash
# From the Phase1 directory
cd Phase1

# Run individual sections
npm run test:section1  # Equal Assertions
npm run test:section2  # Type Checking
npm run test:section3  # Existence Checking
npm run test:section4  # Comparison Assertions

# Or run all Day 3-4 tests
npm run test:day3-4

# Or run all tests in Phase1
npm test
```

## 💡 Learning Tips

1. **Read the comments** - Each test file has detailed comments explaining concepts
2. **Try breaking tests** - Intentionally make tests fail to understand error messages
3. **Combine assertions** - See how you can use multiple assertions together
4. **Compare sections** - Notice how different assertions serve different purposes

## ❓ Questions to Answer

After completing each section, ask yourself:

- **Section 1**: When would I use `.equal()` vs `.eql()` in real projects?
- **Section 2**: Why is type checking important? When would I use it?
- **Section 3**: What's the difference between `.exist` and checking for truthy values?
- **Section 4**: When would comparison assertions be useful in testing?

## 📝 Next Steps

After mastering Day 3-4, you'll move on to:
- **Day 5-7**: Test Organization & Structure
- Learn about organizing tests with multiple `describe()` blocks
- Making tests readable and maintainable
