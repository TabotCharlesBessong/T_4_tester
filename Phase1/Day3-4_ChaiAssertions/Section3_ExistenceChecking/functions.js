// Section 3: Existence Checking
// Functions to demonstrate existence checking with Chai

/**
 * Returns a truthy value
 */
const getTruthyValue = () => {
  return 'hello';
};

/**
 * Returns a falsy value (0)
 */
const getFalsyNumber = () => {
  return 0;
};

/**
 * Returns null
 */
const getNullValue = () => {
  return null;
};

/**
 * Returns undefined
 */
const getUndefinedValue = () => {
  return undefined;
};

/**
 * Returns an empty string
 */
const getEmptyString = () => {
  return '';
};

/**
 * Returns a non-empty string
 */
const getNonEmptyString = () => {
  return 'hello';
};

/**
 * Returns an empty array
 */
const getEmptyArray = () => {
  return [];
};

/**
 * Returns a non-empty array
 */
const getNonEmptyArray = () => {
  return [1, 2, 3];
};

/**
 * Returns an empty object
 */
const getEmptyObject = () => {
  return {};
};

/**
 * Returns a non-empty object
 */
const getNonEmptyObject = () => {
  return { key: 'value' };
};

module.exports = {
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
};
