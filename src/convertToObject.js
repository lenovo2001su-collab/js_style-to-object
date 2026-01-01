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
    if (value.trim() === '') {
      continue;
    }

    const colonIndex = value.indexOf(':');

    if (colonIndex === -1) {
      continue;
    }

    const key = value.slice(0, colonIndex).trim();
    const valuePart = value.slice(colonIndex + 1).trim();

    result[key] = valuePart;
  }

  return result;
}

module.exports = convertToObject;
