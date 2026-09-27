'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const elements = sourceString.split(';').map((element) => element.trim());
  const parts = elements
    .filter((element) => element.includes(':') && element.length !== 0)
    .map((element) => {
      return element.split(':').map((part) => part.trim());
    });

  const stylesObject = parts.reduce((acc, part) => {
    acc[part[0]] = part[1];

    return acc;
  }, {});

  return stylesObject;
}

module.exports = convertToObject;
