const { NotImplementedError } = require('../lib');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates depth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  constructor (value) {
    this.array = value;
  }

  calculateDepth(arr) {
    if (!Array.isArray(arr)) return 0;
    if (arr.length === 0) return 1;

    let depth = arr.map(el => Array.isArray(el) ? this.calculateDepth(el) : 0);

    return 1 + Math.max(...depth);
  }
}

module.exports = {
  depthCalculator: new DepthCalculator(),
};
