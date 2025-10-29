const { decorateObject } = require('../lib');
const { NotImplementedError } = require('../lib');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) { 
    this.chain.push(value !== undefined ? value : '');
    return this;
  },
  removeLink(position) {
    if (
      typeof position !== 'number' ||
      position % 1 !== 0 ||
      position < 1 ||
      position > this.chain.length
    ) {
      this.chain = [];
      throw new Error('You can\'t remove incorrect link!')
    }
    
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let res = '';

    for (let i = 0; i < this.chain.length; i++) {
      const el = this.chain[i];

      if (i === 0) res += `( ${el} )`;
      else res += `~~( ${el} )`;
    }

    this.chain = [];
    return res;
  },
};

module.exports = {
  chainMaker,
};
