// Section 1: Equal Assertions
// Functions to demonstrate .equal(), .eql(), and .deep.equal()

/**
 * Simple addition function
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Sum of a and b
 */
const add = (a, b) => {
  return a + b;
};

/**
 * Returns an object with properties
 * @param {string} name - Name property
 * @param {number} age - Age property
 * @returns {object} Object with name and age
 */
const createPerson = (name, age) => {
  return { name, age };
};

/**
 * Returns an array
 * @param {...number} numbers - Numbers to include in array
 * @returns {array} Array of numbers
 */
const createArray = (...numbers) => {
  return numbers;
};

/**
 * Returns a nested object
 * @param {string} name - Name property
 * @param {object} address - Address object
 * @returns {object} Nested object with name and address
 */
const createNestedObject = (name, address) => {
  return { name, address };
};

module.exports = {
  add,
  createPerson,
  createArray,
  createNestedObject
};
