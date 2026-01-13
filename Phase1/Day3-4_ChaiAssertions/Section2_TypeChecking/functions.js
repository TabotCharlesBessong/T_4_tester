// Section 2: Type Checking
// Functions to demonstrate type checking with Chai

/**
 * Returns a number
 */
const getNumber = () => {
  return 42;
};

/**
 * Returns a string
 */
const getString = () => {
  return 'hello world';
};

/**
 * Returns a boolean
 */
const getBoolean = () => {
  return true;
};

/**
 * Returns an array
 */
const getArray = () => {
  return [1, 2, 3];
};

/**
 * Returns an object
 */
const getObject = () => {
  return { key: 'value' };
};

/**
 * Returns null
 */
const getNull = () => {
  return null;
};

/**
 * Returns undefined
 */
const getUndefined = () => {
  return undefined;
};

/**
 * Returns a function
 */
const getFunction = () => {
  return () => {};
};

/**
 * Returns a Date object
 */
const getDate = () => {
  return new Date();
};

/**
 * Returns a RegExp
 */
const getRegExp = () => {
  return /test/;
};

module.exports = {
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
};
