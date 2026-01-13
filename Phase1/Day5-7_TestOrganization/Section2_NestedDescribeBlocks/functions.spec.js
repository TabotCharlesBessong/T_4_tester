// Section 2: Nested Describe Blocks
// Learning: Organizing tests with nested describe() blocks for better structure

const { add, subtract, multiply, divide } = require('./functions');

describe('Section 2: Nested Describe Blocks', () => {
  let expect;

  before(async () => {
    const chai = await import('chai');
    expect = chai.expect;
  });

  // Main category: Math Operations
  describe('Math Operations', () => {
    
    // Nested: Addition operations
    describe('Addition', () => {
      it('should add two positive numbers', () => {
        expect(add(2, 3)).to.equal(5);
      });

      it('should add negative numbers', () => {
        expect(add(-2, -3)).to.equal(-5);
      });

      it('should add positive and negative numbers', () => {
        expect(add(5, -3)).to.equal(2);
      });

      describe('Edge Cases', () => {
        it('should add zero', () => {
          expect(add(5, 0)).to.equal(5);
          expect(add(0, 5)).to.equal(5);
        });

        it('should add decimal numbers', () => {
          expect(add(1.5, 2.5)).to.equal(4);
        });
      });
    });

    // Nested: Subtraction operations
    describe('Subtraction', () => {
      it('should subtract two positive numbers', () => {
        expect(subtract(5, 3)).to.equal(2);
      });

      it('should subtract negative numbers', () => {
        expect(subtract(-2, -3)).to.equal(1);
      });

      it('should subtract when result is negative', () => {
        expect(subtract(3, 5)).to.equal(-2);
      });

      describe('Edge Cases', () => {
        it('should subtract zero', () => {
          expect(subtract(5, 0)).to.equal(5);
        });

        it('should subtract decimal numbers', () => {
          expect(subtract(5.5, 2.5)).to.equal(3);
        });
      });
    });

    // Nested: Multiplication operations
    describe('Multiplication', () => {
      it('should multiply two positive numbers', () => {
        expect(multiply(3, 4)).to.equal(12);
      });

      it('should multiply negative numbers', () => {
        expect(multiply(-2, -3)).to.equal(6);
      });

      it('should multiply positive and negative numbers', () => {
        expect(multiply(5, -3)).to.equal(-15);
      });

      describe('Edge Cases', () => {
        it('should multiply by zero', () => {
          expect(multiply(5, 0)).to.equal(0);
          expect(multiply(0, 5)).to.equal(0);
        });

        it('should multiply decimal numbers', () => {
          expect(multiply(2.5, 4)).to.equal(10);
        });
      });
    });

    // Nested: Division operations
    describe('Division', () => {
      it('should divide two positive numbers', () => {
        expect(divide(10, 2)).to.equal(5);
      });

      it('should divide negative numbers', () => {
        expect(divide(-6, -2)).to.equal(3);
      });

      it('should divide positive and negative numbers', () => {
        expect(divide(10, -2)).to.equal(-5);
      });

      describe('Edge Cases', () => {
        it('should divide decimal numbers', () => {
          expect(divide(7.5, 2.5)).to.equal(3);
        });

        it('should throw error when dividing by zero', () => {
          expect(() => divide(10, 0)).to.throw('Division by zero is not allowed');
        });
      });
    });
  });
});
