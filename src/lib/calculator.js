const { parse } = require('path');

module.exports.sum = (a, b) => {
  const num1 = parseInt(a, 10);
  const num2 = parseInt(b, 10);

  if (Number.isNaN(num1) || Number.isNaN(num2)) {
    throw new Error('Parameters must be numbers');
  }

  return num1 + num2;
};
