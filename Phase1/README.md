# Phase 1: JavaScript Testing Foundations

## 📚 Overview

Phase 1 covers the foundational concepts of JavaScript testing with Mocha and Chai. This phase is divided into three main learning periods:

- **Day 3-4**: Exploring Chai Assertions
- **Day 5-7**: Test Organization & Structure
- **Day 8-10**: Test Hooks & Setup

## 📁 Structure

```
Phase1/
├── Day3-4_ChaiAssertions/
│   ├── README.md
│   ├── Section1_EqualAssertions/
│   ├── Section2_TypeChecking/
│   ├── Section3_ExistenceChecking/
│   └── Section4_ComparisonAssertions/
│
└── Day5-7_TestOrganization/
    ├── README.md
    ├── Section1_MultipleDescribeBlocks/
    ├── Section2_NestedDescribeBlocks/
    ├── Section3_NamingConventions/
    └── Section4_Challenge_MultiplyFunction/
└── Day8-10_TestHooks/
    ├── README.md
    ├── Section1_BeforeAfter/
    ├── Section2_BeforeEachAfterEach/
    ├── Section3_TestDataSetup/
    └── Section4_HooksBestPractices/
```

## 🎯 Day 3-4: Exploring Chai Assertions

### Learning Objectives
- Different ways to write assertions in Chai
- When to use `.equal()` vs `.eql()` vs `.deep.equal()`
- Type checking with Chai
- Existence and emptiness checking
- Comparison assertions

### Sections

1. **Section 1: Equal Assertions** - Learn `.equal()`, `.eql()`, and `.deep.equal()`
2. **Section 2: Type Checking** - Learn `.a()` and `.an()` for type checking
3. **Section 3: Existence Checking** - Learn `.exist`, `.null`, `.undefined`, `.empty`
4. **Section 4: Comparison Assertions** - Learn `.above()`, `.below()`, `.least()`, `.most()`, `.within()`

### Quick Start
```bash
cd Phase1
npm run test:day3-4          # Run all Day 3-4 tests
npm run test:section1        # Run Section 1 only
npm run test:section2        # Run Section 2 only
npm run test:section3        # Run Section 3 only
npm run test:section4        # Run Section 4 only
```

**See [Day3-4_ChaiAssertions/README.md](./Day3-4_ChaiAssertions/README.md) for detailed documentation.**

## 🎯 Day 5-7: Test Organization & Structure

### Learning Objectives
- How to organize tests with multiple `describe()` blocks
- How to use nested `describe()` blocks for better structure
- Best practices for naming tests and describe blocks
- Making tests readable and maintainable
- Test-Driven Development (TDD) approach

### Sections

1. **Section 1: Multiple Describe Blocks** - Organize tests with separate describe blocks for each function
2. **Section 2: Nested Describe Blocks** - Create hierarchical test structures
3. **Section 3: Naming Conventions** - Learn best practices for test naming
4. **Section 4: Challenge - Multiply Function** - Practice TDD with a hands-on challenge

### Quick Start
```bash
cd Phase1
npm run test:day5-7                    # Run all Day 5-7 tests
npm run test:section1-day5-7          # Run Section 1 only
npm run test:section2-day5-7          # Run Section 2 only
npm run test:section3-day5-7          # Run Section 3 only
npm run test:section4-day5-7          # Run Section 4 only
```

**See [Day5-7_TestOrganization/README.md](./Day5-7_TestOrganization/README.md) for detailed documentation.**

## 🎯 Day 8-10: Test Hooks & Setup

### Learning Objectives
- How to use `before()`, `after()`, `beforeEach()`, and `afterEach()` hooks
- When and why to use each hook
- How to set up test data efficiently
- Best practices for test hooks

### Sections

1. **Section 1: before() and after()** - Hooks that run once before/after all tests
2. **Section 2: beforeEach() and afterEach()** - Hooks that run before/after each test
3. **Section 3: Test Data Setup** - Practical examples of setting up test data
4. **Section 4: Hooks Best Practices** - Decision guide and best practices

### Quick Start
```bash
cd Phase1
npm run test:day8-10                    # Run all Day 8-10 tests
npm run test:section1-day8-10          # Run Section 1 only
npm run test:section2-day8-10          # Run Section 2 only
npm run test:section3-day8-10          # Run Section 3 only
npm run test:section4-day8-10          # Run Section 4 only
```

**See [Day8-10_TestHooks/README.md](./Day8-10_TestHooks/README.md) for detailed documentation.**

## 🚀 Getting Started

### Prerequisites
- Node.js installed
- npm installed

### Installation
```bash
cd Phase1
npm install
```

### Running Tests

#### Run All Phase 1 Tests
```bash
npm test
```

#### Run Tests by Day
```bash
npm run test:day3-4    # Day 3-4 tests only
npm run test:day5-7    # Day 5-7 tests only
npm run test:day8-10   # Day 8-10 tests only
```

#### Run Individual Sections

**Day 3-4 Sections:**
```bash
npm run test:section1  # Equal Assertions
npm run test:section2  # Type Checking
npm run test:section3  # Existence Checking
npm run test:section4  # Comparison Assertions
```

**Day 5-7 Sections:**
```bash
npm run test:section1-day5-7  # Multiple Describe Blocks
npm run test:section2-day5-7  # Nested Describe Blocks
npm run test:section3-day5-7  # Naming Conventions
npm run test:section4-day5-7  # Challenge - Multiply Function
```

## 📊 Test Statistics

- **Day 3-4**: 53 tests covering Chai assertions
- **Day 5-7**: 69 tests covering test organization
- **Day 8-10**: 67 tests covering test hooks
- **Total**: 189 tests in Phase 1

## 📖 Learning Path

### Recommended Order

1. **Start with Day 3-4**
   - Complete Section 1 (Equal Assertions)
   - Complete Section 2 (Type Checking)
   - Complete Section 3 (Existence Checking)
   - Complete Section 4 (Comparison Assertions)

2. **Move to Day 5-7**
   - Complete Section 1 (Multiple Describe Blocks)
   - Complete Section 2 (Nested Describe Blocks)
   - Study Section 3 (Naming Conventions)
   - Complete Section 4 (Challenge - TDD Practice)

### Learning Tips

- ✅ Read the README in each day's folder for detailed guidance
- ✅ Run tests frequently to see them in action
- ✅ Experiment by modifying tests and seeing what happens
- ✅ Complete exercises in order - each builds on the previous
- ✅ Take notes on concepts you find challenging

## 🎓 Key Concepts Covered

### Day 3-4 Concepts
- Assertion types: `.equal()`, `.eql()`, `.deep.equal()`
- Type checking: `.a()`, `.an()`
- Existence checking: `.exist`, `.null`, `.undefined`, `.empty`
- Comparisons: `.above()`, `.below()`, `.least()`, `.most()`, `.within()`

### Day 5-7 Concepts
- Test organization with `describe()` blocks
- Nested test structures
- Test naming best practices
- Test-Driven Development (TDD)

### Day 8-10 Concepts
- Test hooks: `before()`, `after()`, `beforeEach()`, `afterEach()`
- Test data setup patterns
- Hook execution order
- Best practices for hooks

## 📝 Next Steps

After completing Phase 1, you'll move on to:

**Week 2: Intermediate Testing Concepts (Continued)**
- Day 11-12: Error Testing & Edge Cases
- Day 13-14: Async Testing Introduction

## 📚 Additional Resources

- [Mocha Documentation](https://mochajs.org/)
- [Chai Assertion Library](https://www.chaijs.com/)
- [MDN JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## ❓ Troubleshooting

### Tests Not Running?
- Make sure you're in the `Phase1` directory
- Run `npm install` to ensure dependencies are installed
- Check that you're using the correct test script name

### Import Errors?
- All test files use ES6 dynamic imports for Chai
- Make sure `chai` and `mocha` are installed: `npm install`

## 🎯 Success Criteria

By the end of Phase 1, you should be able to:
- ✅ Write tests using various Chai assertions
- ✅ Choose the right assertion for different scenarios
- ✅ Organize tests with multiple and nested describe blocks
- ✅ Write clear, descriptive test names
- ✅ Follow TDD practices

---

**Happy Testing! 🚀**
