// Section 4: Challenge - Multiply Function
// TDD Approach: Write tests FIRST, then implement the function
// 
// INSTRUCTIONS:
// 1. Read through all the test cases below
// 2. Think about what the multiply function needs to handle
// 3. Implement the multiply function in functions.js
// 4. Run the tests: npm run test:section4
// 5. Make all tests pass!

const { multiply } = require('./functions');

describe('Section 4: Challenge - Multiply Function', () => {
  let expect;

  before(async () => {
    const chai = await import('chai');
    expect = chai.expect;
  });

  describe('multiply() - Basic Operations', () => {
    it('should multiply two positive numbers', () => {
      expect(multiply(3, 4)).to.equal(12);
    });

    it('should multiply two negative numbers', () => {
      expect(multiply(-2, -3)).to.equal(6);
    });

    it('should multiply positive and negative numbers', () => {
      expect(multiply(5, -3)).to.equal(-15);
      expect(multiply(-5, 3)).to.equal(-15);
    });
  });

  describe('multiply() - Edge Cases', () => {
    it('should multiply by zero', () => {
      expect(multiply(5, 0)).to.equal(0);
      expect(multiply(0, 5)).to.equal(0);
      expect(multiply(0, 0)).to.equal(0);
    });

    it('should multiply by one', () => {
      expect(multiply(5, 1)).to.equal(5);
      expect(multiply(1, 5)).to.equal(5);
    });

    it('should multiply decimal numbers', () => {
      expect(multiply(2.5, 4)).to.equal(10);
      expect(multiply(0.5, 0.5)).to.equal(0.25);
    });

    it('should multiply large numbers', () => {
      expect(multiply(1000, 1000)).to.equal(1000000);
    });
  });

  describe('multiply() - Type Checking', () => {
    it('should return a number', () => {
      expect(multiply(2, 3)).to.be.a('number');
    });
  });

  // BONUS CHALLENGE: Add your own test cases!
  // Think about: What other scenarios should be tested?
  // Try adding tests for:
  // - Very small numbers (0.0001)
  // - Negative decimals
  // - Commutative property (multiply(a, b) === multiply(b, a))
});
