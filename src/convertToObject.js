'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  const source = sourceString.split(';');

  for (const value of source) {
    if (value !== '') {
      const str = value.split(':');
      const key = str[0].trim();

      const values = str[1].trim();

      result[key] = values;
    }
  }

  return result;
}

module.exports = convertToObject;
