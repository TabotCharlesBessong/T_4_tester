// Section 4: Comparison Assertions
// Functions to demonstrate comparison assertions with Chai

/**
 * Returns a number
 * @param {number} num - Number to return
 * @returns {number}
 */
const getNumber = (num) => {
  return num;
};

/**
 * Returns the sum of two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Sum of a and b
 */
const add = (a, b) => {
  return a + b;
};

/**
 * Returns the product of two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Product of a and b
 */
const multiply = (a, b) => {
  return a * b;
};

/**
 * Returns the maximum of two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Maximum of a and b
 */
const max = (a, b) => {
  return Math.max(a, b);
};

/**
 * Returns the minimum of two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Minimum of a and b
 */
const min = (a, b) => {
  return Math.min(a, b);
};

/**
 * Returns a random number between min and max
 * @param {number} min - Minimum value
 * @param {number} max - Maximum value
 * @returns {number} Random number in range
 */
const randomInRange = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

module.exports = {
  getNumber,
  add,
  multiply,
  max,
  min,
  randomInRange
};
