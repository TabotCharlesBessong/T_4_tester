// Section 2: Nested Describe Blocks
// Functions to demonstrate organizing tests with nested describe() blocks

/**
 * Addition function
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Sum of a and b
 */
const add = (a, b) => {
  return a + b;
};

/**
 * Subtraction function
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Difference of a and b
 */
const subtract = (a, b) => {
  return a - b;
};

/**
 * Multiplication function
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Product of a and b
 */
const multiply = (a, b) => {
  return a * b;
};

/**
 * Division function
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Quotient of a and b
 */
const divide = (a, b) => {
  if (b === 0) {
    throw new Error('Division by zero is not allowed');
  }
  return a / b;
};

module.exports = {
  add,
  subtract,
  multiply,
  divide
};
