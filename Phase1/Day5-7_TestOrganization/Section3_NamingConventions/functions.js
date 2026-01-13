// Section 3: Naming Conventions
// Functions to demonstrate good naming conventions for tests

/**
 * Capitalizes the first letter of a string
 * @param {string} str - String to capitalize
 * @returns {string} Capitalized string
 */
const capitalize = (str) => {
  if (!str || typeof str !== 'string') {
    return '';
  }
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

/**
 * Reverses a string
 * @param {string} str - String to reverse
 * @returns {string} Reversed string
 */
const reverseString = (str) => {
  if (!str || typeof str !== 'string') {
    return '';
  }
  return str.split('').reverse().join('');
};

/**
 * Checks if a string is a palindrome
 * @param {string} str - String to check
 * @returns {boolean} True if palindrome, false otherwise
 */
const isPalindrome = (str) => {
  if (!str || typeof str !== 'string') {
    return false;
  }
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return cleaned === cleaned.split('').reverse().join('');
};

/**
 * Counts the number of words in a string
 * @param {string} str - String to count words in
 * @returns {number} Number of words
 */
const countWords = (str) => {
  if (!str || typeof str !== 'string') {
    return 0;
  }
  return str.trim().split(/\s+/).filter(word => word.length > 0).length;
};

module.exports = {
  capitalize,
  reverseString,
  isPalindrome,
  countWords
};
