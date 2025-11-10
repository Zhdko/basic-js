const { NotImplementedError } = require('../lib');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
 const base = String(str);

  const repeatTimes = options.repeatTimes ?? 1;
  const separator = options.separator ?? '+';

  const hasAddition = Object.prototype.hasOwnProperty.call(options, 'addition');
  const addition = hasAddition ? String(options.addition) : '';

  const additionRepeatTimes = options.additionRepeatTimes ?? 1;
  const additionSeparator = options.additionSeparator ?? '|';

  const additionChunk = additionRepeatTimes > 0
    ? Array(additionRepeatTimes).fill(addition).join(additionSeparator)
    : '';

  const unit = base + additionChunk;

  return repeatTimes > 0
    ? Array(repeatTimes).fill(unit).join(separator)
    : '';
}

module.exports = {
  repeater
};
