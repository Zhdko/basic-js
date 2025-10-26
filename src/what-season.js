const { NotImplementedError } = require('../lib');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';
  
  if (!(date instanceof Date) || Object.getOwnPropertyNames(date).length > 0 || isNaN(date)) {
    throw new Error('Invalid date!');
  }

  const month = date.getMonth() + 1;
  const seasons = {
    winter: [12, 1, 2],
    spring: [3, 4, 5],
    summer: [6, 7, 8],
    autumn: [9, 10, 11],
  };

  for (let season in seasons) {
    if (seasons[season].includes(month)) return season;
  }
}

module.exports = {
  getSeason
};
