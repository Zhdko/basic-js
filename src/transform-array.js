const { NotImplementedError } = require('../lib');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('\'arr\' parameter must be an instance of the Array!')
  }

  const array = [...arr];

  for (let i = 0; i < array.length; i++) {
    if (array[i] === '--double-next' && array[i + 1]) {
      array[i] = array[i + 1]; 
    }

    if(i > 0 && array[i] === '--discard-prev') {
      array[i] = null;
      array[i - 1] = null;
    }

    if(array[i] === '--discard-next') {
      array[i] = null;
      array[i + 1] = null;
    }

    if ( i > 0 && array[i] === '--double-prev') {
      array[i] = array[i - 1]; 
    }
  }

  return array.filter(a => Boolean(a) && typeof a !== 'string')
}

module.exports = {
  transform
};
