// Section 2: Type Checking Tests
// Learning: Using .a() and .an() for type checking

const {
  getNumber,
  getString,
  getBoolean,
  getArray,
  getObject,
  getNull,
  getUndefined,
  getFunction,
  getDate,
  getRegExp
} = require('./functions');

describe('Section 2: Type Checking', () => {
  let expect;

  before(async () => {
    const chai = await import('chai');
    expect = chai.expect;
  });

  describe('.a() - Type checking', () => {
    it('should check if value is a number', () => {
      expect(getNumber()).to.be.a('number');
      expect(42).to.be.a('number');
      expect(0).to.be.a('number');
    });

    it('should check if value is a string', () => {
      expect(getString()).to.be.a('string');
      expect('hello').to.be.a('string');
      expect('').to.be.a('string');
    });

    it('should check if value is a boolean', () => {
      expect(getBoolean()).to.be.a('boolean');
      expect(true).to.be.a('boolean');
      expect(false).to.be.a('boolean');
    });

    it('should check if value is an array', () => {
      expect(getArray()).to.be.a('array');
      expect([1, 2, 3]).to.be.a('array');
    });

    it('should check if value is an object', () => {
      expect(getObject()).to.be.a('object');
      expect({}).to.be.a('object');
      // Note: While arrays are objects in JavaScript, Chai distinguishes them
      // Arrays should be checked with 'array', not 'object'
      expect(getArray()).to.be.a('array'); // Use 'array' for arrays
      expect(getArray()).to.not.be.a('object'); // Arrays are NOT objects in Chai
    });

    it('should check if value is null', () => {
      expect(getNull()).to.be.a('null');
      expect(null).to.be.a('null');
    });

    it('should check if value is undefined', () => {
      expect(getUndefined()).to.be.a('undefined');
      expect(undefined).to.be.a('undefined');
    });

    it('should check if value is a function', () => {
      expect(getFunction()).to.be.a('function');
      expect(() => {}).to.be.a('function');
    });

    it('should check if value is a Date', () => {
      expect(getDate()).to.be.a('date');
      expect(new Date()).to.be.a('date');
    });

    it('should check if value is a RegExp', () => {
      expect(getRegExp()).to.be.a('regexp');
      expect(/test/).to.be.a('regexp');
    });
  });

  describe('.an() - Alternative syntax (same as .a())', () => {
    it('should work the same as .a()', () => {
      expect(getNumber()).to.be.an('number');
      expect(getString()).to.be.an('string');
      expect(getArray()).to.be.an('array');
    });
  });

  describe('Type checking vs Value checking', () => {
    // Helper function for demonstration
    const add = (a, b) => a + b;

    it('Type check: checks what type it is', () => {
      expect(add(2, 3)).to.be.a('number'); // Checks type
    });

    it('Value check: checks what value it is', () => {
      expect(add(2, 3)).to.equal(5); // Checks value
    });

    it('You can combine both!', () => {
      const result = add(2, 3);
      expect(result).to.be.a('number'); // First check type
      expect(result).to.equal(5); // Then check value
    });
  });
});
