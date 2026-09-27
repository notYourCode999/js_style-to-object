'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const elements = sourceString.split(';').map((element) => element.trim());
  const parts = elements.map((element) => {
    return element.split(':').map((part) => part.trim());
  });

  const result = parts.reduce((acc, part) => {
    acc[part[0]] = part[1];

    return acc;
  }, {});

  return result;
}

module.exports = convertToObject;
