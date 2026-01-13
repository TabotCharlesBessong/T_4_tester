// Section 1: Equal Assertions Tests
// Learning: .equal() vs .eql() vs .deep.equal()

const { add, createPerson, createArray, createNestedObject } = require('./functions');

describe('Section 1: Equal Assertions', () => {
  let expect;

  before(async () => {
    const chai = await import('chai');
    expect = chai.expect;
  });

  describe('.equal() - Strict Equality (===)', () => {
    it('should pass for primitive values with .equal()', () => {
      expect(add(2, 3)).to.equal(5);
      expect(add(0, 0)).to.equal(0);
    });

    it('should fail for objects with .equal() (different references)', () => {
      const person1 = createPerson('John', 30);
      const person2 = createPerson('John', 30);
      // This will fail because .equal() uses === (reference comparison)
      // expect(person1).to.equal(person2); // This would fail
      // Instead, we need to compare the same reference:
      expect(person1).to.equal(person1);
    });
  });

  describe('.eql() - Deep Equality (value comparison)', () => {
    it('should pass for objects with same values using .eql()', () => {
      const person1 = createPerson('John', 30);
      const person2 = createPerson('John', 30);
      expect(person1).to.eql(person2); // Passes! Compares values
    });

    it('should pass for arrays with same values using .eql()', () => {
      const arr1 = createArray(1, 2, 3);
      const arr2 = createArray(1, 2, 3);
      expect(arr1).to.eql(arr2); // Passes! Compares values
    });
  });

  describe('.deep.equal() - Deep Equality (same as .eql())', () => {
    it('should pass for nested objects with .deep.equal()', () => {
      const obj1 = createNestedObject('John', { city: 'NYC', zip: 10001 });
      const obj2 = createNestedObject('John', { city: 'NYC', zip: 10001 });
      expect(obj1).to.deep.equal(obj2); // Passes! Deep comparison
    });

    it('.deep.equal() and .eql() are equivalent', () => {
      const person1 = createPerson('Jane', 25);
      const person2 = createPerson('Jane', 25);
      expect(person1).to.deep.equal(person2);
      expect(person1).to.eql(person2); // Same thing!
    });
  });

  describe('When to use which?', () => {
    it('Use .equal() for primitives', () => {
      expect(add(5, 10)).to.equal(15);
      expect('hello').to.equal('hello');
    });

    it('Use .eql() or .deep.equal() for objects/arrays', () => {
      const arr1 = [1, 2, 3];
      const arr2 = [1, 2, 3];
      expect(arr1).to.eql(arr2);
      expect(arr1).to.deep.equal(arr2);
    });
  });
});
