// Section 4: Comparison Assertions Tests
// Learning: .above(), .below(), .least(), .most(), .within()

const {
  getNumber,
  add,
  multiply,
  max,
  min,
  randomInRange
} = require('./functions');

describe('Section 4: Comparison Assertions', () => {
  let expect;

  before(async () => {
    const chai = await import('chai');
    expect = chai.expect;
  });

  describe('.above() - Greater than', () => {
    it('should pass when value is above the threshold', () => {
      expect(add(2, 3)).to.be.above(4);
      expect(add(5, 10)).to.be.above(10);
      expect(10).to.be.above(5);
    });

    it('should fail when value is not above the threshold', () => {
      expect(add(2, 3)).to.not.be.above(10);
      expect(5).to.not.be.above(10);
    });
  });

  describe('.below() - Less than', () => {
    it('should pass when value is below the threshold', () => {
      expect(add(2, 3)).to.be.below(10);
      expect(add(1, 1)).to.be.below(5);
      expect(3).to.be.below(5);
    });

    it('should fail when value is not below the threshold', () => {
      expect(add(5, 10)).to.not.be.below(10);
      expect(15).to.not.be.below(10);
    });
  });

  describe('.least() - Greater than or equal to', () => {
    it('should pass when value is at least the threshold', () => {
      expect(add(2, 3)).to.be.at.least(5); // Exactly 5
      expect(add(5, 10)).to.be.at.least(10); // Greater than 10
      expect(add(5, 10)).to.be.at.least(15); // Exactly 15
      expect(10).to.be.at.least(10);
      expect(15).to.be.at.least(10);
    });

    it('should fail when value is less than the threshold', () => {
      expect(add(2, 3)).to.not.be.at.least(10);
      expect(5).to.not.be.at.least(10);
    });
  });

  describe('.most() - Less than or equal to', () => {
    it('should pass when value is at most the threshold', () => {
      expect(add(2, 3)).to.be.at.most(10); // Less than 10
      expect(add(2, 3)).to.be.at.most(5); // Exactly 5
      expect(5).to.be.at.most(5);
      expect(3).to.be.at.most(5);
    });

    it('should fail when value is greater than the threshold', () => {
      expect(add(5, 10)).to.not.be.at.most(10);
      expect(15).to.not.be.at.most(10);
    });
  });

  describe('.within() - Check if value is within a range', () => {
    it('should pass when value is within the range (inclusive)', () => {
      expect(add(2, 3)).to.be.within(4, 6); // 5 is between 4 and 6
      expect(add(2, 3)).to.be.within(5, 10); // 5 is at the start
      expect(add(2, 3)).to.be.within(0, 5); // 5 is at the end
      expect(5).to.be.within(1, 10);
    });

    it('should fail when value is outside the range', () => {
      expect(add(2, 3)).to.not.be.within(10, 20);
      expect(5).to.not.be.within(10, 20);
    });
  });

  describe('Practical examples', () => {
    it('should verify add function returns reasonable results', () => {
      const result = add(10, 20);
      expect(result).to.be.above(25); // Should be greater than 25
      expect(result).to.be.below(35); // Should be less than 35
      expect(result).to.be.within(25, 35); // Should be in range
    });

    it('should verify multiply function results', () => {
      const result = multiply(5, 6);
      expect(result).to.be.at.least(30); // At least 30
      expect(result).to.be.at.most(30); // At most 30 (exactly 30)
    });

    it('should verify max function returns maximum value', () => {
      const result = max(10, 20);
      expect(result).to.be.above(15);
      expect(result).to.be.at.least(20);
    });

    it('should verify min function returns minimum value', () => {
      const result = min(10, 20);
      expect(result).to.be.below(15);
      expect(result).to.be.at.most(10);
    });

    it('should verify randomInRange returns value within range', () => {
      const result = randomInRange(1, 10);
      expect(result).to.be.within(1, 10);
      expect(result).to.be.at.least(1);
      expect(result).to.be.at.most(10);
    });
  });

  describe('Combining assertions', () => {
    it('can combine multiple comparison assertions', () => {
      const result = add(5, 5);
      expect(result).to.be.above(5); // Greater than 5
      expect(result).to.be.below(15); // Less than 15
      expect(result).to.be.within(5, 15); // In range
      expect(result).to.be.at.least(10); // At least 10
      expect(result).to.be.at.most(10); // At most 10
    });
  });
});
