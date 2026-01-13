// Section 3: Existence Checking Tests
// Learning: .exist, .null, .undefined, .empty

const {
  getTruthyValue,
  getFalsyNumber,
  getNullValue,
  getUndefinedValue,
  getEmptyString,
  getNonEmptyString,
  getEmptyArray,
  getNonEmptyArray,
  getEmptyObject,
  getNonEmptyObject
} = require('./functions');

describe('Section 3: Existence Checking', () => {
  let expect;

  before(async () => {
    const chai = await import('chai');
    expect = chai.expect;
  });

  describe('.exist - Check if value exists (not null/undefined)', () => {
    it('should pass for values that exist', () => {
      expect(getTruthyValue()).to.exist;
      expect(getFalsyNumber()).to.exist; // 0 exists, it's just falsy
      expect(getEmptyString()).to.exist; // Empty string exists
      expect(0).to.exist;
      expect(false).to.exist;
    });

    it('should fail for null and undefined', () => {
      // These would fail:
      // expect(getNullValue()).to.exist; // Fails
      // expect(getUndefinedValue()).to.exist; // Fails
      
      // Instead, check they don't exist:
      expect(getNullValue()).to.not.exist;
      expect(getUndefinedValue()).to.not.exist;
    });
  });

  describe('.null - Check if value is null', () => {
    it('should pass for null values', () => {
      expect(getNullValue()).to.be.null;
      expect(null).to.be.null;
    });

    it('should fail for non-null values', () => {
      expect(getTruthyValue()).to.not.be.null;
      expect(getUndefinedValue()).to.not.be.null; // undefined is not null!
    });
  });

  describe('.undefined - Check if value is undefined', () => {
    it('should pass for undefined values', () => {
      expect(getUndefinedValue()).to.be.undefined;
      expect(undefined).to.be.undefined;
    });

    it('should fail for defined values', () => {
      expect(getTruthyValue()).to.not.be.undefined;
      expect(getNullValue()).to.not.be.undefined; // null is not undefined!
    });
  });

  describe('.empty - Check if value is empty', () => {
    it('should pass for empty strings', () => {
      expect(getEmptyString()).to.be.empty;
      expect('').to.be.empty;
    });

    it('should fail for non-empty strings', () => {
      expect(getNonEmptyString()).to.not.be.empty;
      expect('hello').to.not.be.empty;
    });

    it('should pass for empty arrays', () => {
      expect(getEmptyArray()).to.be.empty;
      expect([]).to.be.empty;
    });

    it('should fail for non-empty arrays', () => {
      expect(getNonEmptyArray()).to.not.be.empty;
      expect([1, 2, 3]).to.not.be.empty;
    });

    it('should pass for empty objects', () => {
      expect(getEmptyObject()).to.be.empty;
      expect({}).to.be.empty;
    });

    it('should fail for non-empty objects', () => {
      expect(getNonEmptyObject()).to.not.be.empty;
      expect({ key: 'value' }).to.not.be.empty;
    });
  });

  describe('Understanding the difference', () => {
    it('.exist checks if value is not null/undefined', () => {
      expect(0).to.exist; // 0 exists
      expect('').to.exist; // Empty string exists
      expect(false).to.exist; // false exists
    });

    it('.empty checks if collections/strings are empty', () => {
      expect('').to.be.empty; // Empty string
      expect([]).to.be.empty; // Empty array
      expect({}).to.be.empty; // Empty object
    });

    it('A value can exist but be empty', () => {
      const emptyStr = '';
      expect(emptyStr).to.exist; // It exists
      expect(emptyStr).to.be.empty; // But it's empty
    });
  });
});
