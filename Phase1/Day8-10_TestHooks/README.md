# Day 8-10: Test Hooks & Setup

## 📚 Learning Objectives

By the end of Day 8-10, you should understand:
- How to use `before()`, `after()`, `beforeEach()`, and `afterEach()` hooks
- When and why to use each hook
- How to set up test data efficiently
- Best practices for test hooks
- How to prevent tests from affecting each other

## 📁 Structure

This folder contains 4 sections, each focusing on different aspects of test hooks:

### Section 1: before() and after() Hooks
**Files:**
- `functions.js` - Database, API Client, and FileSystem simulators
- `functions.spec.js` - Tests demonstrating `before()` and `after()` hooks

**Key Concepts:**
- `before()` - Runs ONCE before ALL tests in a describe block
- `after()` - Runs ONCE after ALL tests in a describe block
- Perfect for: expensive setup operations, shared resources, one-time initialization

### Section 2: beforeEach() and afterEach() Hooks
**Files:**
- `functions.js` - Calculator, UserSession, and ShoppingCart classes
- `functions.spec.js` - Tests demonstrating `beforeEach()` and `afterEach()` hooks

**Key Concepts:**
- `beforeEach()` - Runs BEFORE EACH test
- `afterEach()` - Runs AFTER EACH test
- Perfect for: resetting state, creating fresh instances, ensuring test isolation

### Section 3: Test Data Setup
**Files:**
- `functions.js` - User, Product, Order models and DataRepository
- `functions.spec.js` - Practical examples of setting up test data

**Key Concepts:**
- Setting up shared test data with `before()`
- Setting up fresh data with `beforeEach()`
- Complex test data setup patterns
- When to use static vs dynamic data

### Section 4: Hooks Best Practices
**Files:**
- `functions.js` - DatabaseManager, TestDataGenerator, CacheManager
- `functions.spec.js` - Decision guide and examples of good/bad practices

**Key Concepts:**
- When to use which hook
- Common patterns and anti-patterns
- Decision guide for different scenarios
- How to prevent test interference

## 🚀 How to Use

1. **Start with Section 1** - Understand `before()` and `after()` hooks
2. **Move to Section 2** - Learn `beforeEach()` and `afterEach()` hooks
3. **Study Section 3** - See practical test data setup examples
4. **Complete Section 4** - Learn best practices and decision-making

## 🧪 Running Tests

To run tests for a specific section:

```bash
# From the Phase1 directory
cd Phase1

# Run individual sections
npm run test:section1-day8-10  # before() and after()
npm run test:section2-day8-10  # beforeEach() and afterEach()
npm run test:section3-day8-10  # Test Data Setup
npm run test:section4-day8-10  # Hooks Best Practices

# Or run all Day 8-10 tests
npm run test:day8-10
```

## 💡 Learning Tips

1. **Watch the console** - Hooks log messages to show execution order
2. **Compare sections** - Notice the difference between `before()` and `beforeEach()`
3. **Read the comments** - Each test file has detailed explanations
4. **Experiment** - Try moving hooks around and see what happens

## 📝 Hook Execution Order

Understanding when hooks run is crucial:

```
describe('Example', () => {
  before(() => {
    // Runs ONCE before all tests
  });

  beforeEach(() => {
    // Runs BEFORE EACH test
  });

  afterEach(() => {
    // Runs AFTER EACH test
  });

  after(() => {
    // Runs ONCE after all tests
  });
});
```

**Execution flow for 3 tests:**
1. `before()` - runs once
2. `beforeEach()` - runs before test 1
3. Test 1
4. `afterEach()` - runs after test 1
5. `beforeEach()` - runs before test 2
6. Test 2
7. `afterEach()` - runs after test 2
8. `beforeEach()` - runs before test 3
9. Test 3
10. `afterEach()` - runs after test 3
11. `after()` - runs once

## 🎯 Decision Guide: Which Hook to Use?

### Use `before()` when:
- ✅ Setting up expensive operations (database connections, API initialization)
- ✅ Creating shared resources that don't change
- ✅ Loading configuration that applies to all tests
- ✅ One-time setup operations

### Use `beforeEach()` when:
- ✅ Resetting state between tests
- ✅ Creating fresh instances for each test
- ✅ Setting up test data that should be isolated
- ✅ Ensuring tests don't affect each other

### Use `after()` when:
- ✅ Closing connections
- ✅ Releasing resources
- ✅ Final cleanup
- ✅ One-time teardown

### Use `afterEach()` when:
- ✅ Cleaning up after each test
- ✅ Resetting state
- ✅ Closing test-specific resources
- ✅ Ensuring clean state for next test

## ❓ Questions to Answer

After completing each section, ask yourself:

- **Section 1**: Why use `before()` for database connections instead of `beforeEach()`?
- **Section 2**: What happens if you use `before()` for mutable state?
- **Section 3**: When should you use `before()` vs `beforeEach()` for test data?
- **Section 4**: How do hooks prevent tests from interfering with each other?

## 📘 Next Steps

After mastering Day 8-10, you'll move on to:
- **Day 11-12**: Error Testing & Edge Cases
- Learn how to test that functions throw errors
- Test edge cases (null, undefined, empty strings)
- Make functions more robust

## 🎓 Key Takeaways

1. **`before()` and `after()`** - For one-time setup/teardown
2. **`beforeEach()` and `afterEach()`** - For per-test setup/teardown
3. **Test isolation** - Use `beforeEach()` to prevent tests from affecting each other
4. **Performance** - Use `before()` for expensive operations
5. **Clean state** - Always ensure tests start with predictable state
