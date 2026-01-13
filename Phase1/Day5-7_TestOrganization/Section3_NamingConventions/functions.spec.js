// Section 3: Naming Conventions
// Learning: Best practices for naming tests and describe blocks

const { capitalize, reverseString, isPalindrome, countWords } = require('./functions');

describe('Section 3: Naming Conventions', () => {
  let expect;

  before(async () => {
    const chai = await import('chai');
    expect = chai.expect;
  });

  // GOOD: Use descriptive names that explain what the function does
  describe('capitalize()', () => {
    // GOOD: Test name describes the behavior
    it('should capitalize the first letter of a string', () => {
      expect(capitalize('hello')).to.equal('Hello');
    });

    // GOOD: Test name describes the scenario
    it('should handle already capitalized strings', () => {
      expect(capitalize('Hello')).to.equal('Hello');
    });

    // GOOD: Test name describes the edge case
    it('should handle empty strings', () => {
      expect(capitalize('')).to.equal('');
    });

    // GOOD: Test name describes the input type
    it('should handle strings with all uppercase letters', () => {
      expect(capitalize('HELLO')).to.equal('Hello');
    });

    // GOOD: Test name describes what happens with invalid input
    it('should return empty string for null or undefined', () => {
      expect(capitalize(null)).to.equal('');
      expect(capitalize(undefined)).to.equal('');
    });
  });

  // GOOD: Group related tests together
  describe('reverseString()', () => {
    // GOOD: Use "should" to describe expected behavior
    it('should reverse a simple string', () => {
      expect(reverseString('hello')).to.equal('olleh');
    });

    // GOOD: Be specific about what you're testing
    it('should reverse a string with spaces', () => {
      expect(reverseString('hello world')).to.equal('dlrow olleh');
    });

    // GOOD: Mention edge cases clearly
    it('should return empty string for empty input', () => {
      expect(reverseString('')).to.equal('');
    });

    // GOOD: Test name explains the scenario
    it('should handle single character strings', () => {
      expect(reverseString('a')).to.equal('a');
    });
  });

  // GOOD: Use nested describe blocks for better organization
  describe('isPalindrome()', () => {
    describe('valid palindromes', () => {
      // GOOD: Test name is clear and specific
      it('should return true for simple palindrome', () => {
        expect(isPalindrome('racecar')).to.be.true;
      });

      it('should return true for palindrome with different cases', () => {
        expect(isPalindrome('RaceCar')).to.be.true;
      });

      it('should return true for palindrome with spaces and punctuation', () => {
        expect(isPalindrome('A man a plan a canal Panama')).to.be.true;
      });
    });

    describe('invalid palindromes', () => {
      // GOOD: Test name clearly states what should NOT happen
      it('should return false for non-palindrome strings', () => {
        expect(isPalindrome('hello')).to.be.false;
      });

      it('should return false for empty string', () => {
        expect(isPalindrome('')).to.be.false;
      });

      it('should return false for null or undefined', () => {
        expect(isPalindrome(null)).to.be.false;
        expect(isPalindrome(undefined)).to.be.false;
      });
    });
  });

  // GOOD: Organize by function, then by scenario
  describe('countWords()', () => {
    describe('normal cases', () => {
      it('should count words in a simple sentence', () => {
        expect(countWords('hello world')).to.equal(2);
      });

      it('should count words with multiple spaces', () => {
        expect(countWords('hello    world')).to.equal(2);
      });

      it('should count single word', () => {
        expect(countWords('hello')).to.equal(1);
      });
    });

    describe('edge cases', () => {
      it('should return 0 for empty string', () => {
        expect(countWords('')).to.equal(0);
      });

      it('should return 0 for string with only spaces', () => {
        expect(countWords('   ')).to.equal(0);
      });

      it('should return 0 for null or undefined', () => {
        expect(countWords(null)).to.equal(0);
        expect(countWords(undefined)).to.equal(0);
      });
    });
  });

  // BAD NAMING EXAMPLES (commented out - don't do this!)
  /*
  describe('test capitalize', () => {  // BAD: "test" is redundant
    it('test 1', () => {  // BAD: Not descriptive
    it('capitalize works', () => {  // BAD: Vague, doesn't explain what "works" means
    it('should work', () => {  // BAD: Too vague
  */
});
