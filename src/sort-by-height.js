const { NotImplementedError } = require('../lib');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const res = [...arr];

  const heights = res.filter(x => x !== -1).sort((a, b) => a - b);

  let i = 0;
  for (let idx = 0; idx < res.length; idx++) {
    if (res[idx] !== -1) {
      res[idx] = heights[i++];
    }
  }

  return res;
}

module.exports = {
  sortByHeight
};
