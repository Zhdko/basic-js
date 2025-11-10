const { NotImplementedError } = require('../lib');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */

class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }
    return this.process(String(message).toUpperCase(), String(key).toUpperCase(), true);
  }

  decrypt(encryptedMessage, key) {
    if (encryptedMessage === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }
    return this.process(String(encryptedMessage).toUpperCase(), String(key).toUpperCase(), false);
  }

  process(msg, key, isEncrypt) {
    const A = 'A'.charCodeAt(0);
    const isLetter = (ch) => ch >= 'A' && ch <= 'Z';

    const keyIdx = [];
    for (let i = 0; i < key.length; i++) {
      const ch = key[i];
      if (isLetter(ch)) keyIdx.push(ch.charCodeAt(0) - A);
    }

    let ki = 0;
    const out = [];

    for (let i = 0; i < msg.length; i++) {
      const ch = msg[i];
      if (!isLetter(ch)) {
        out.push(ch);
        continue;
      }
      const m = ch.charCodeAt(0) - A;
      const k = keyIdx[ki % keyIdx.length];
      ki++;

      const code = isEncrypt
        ? (m + k) % 26
        : (m - k + 26) % 26;

      out.push(String.fromCharCode(A + code));
    }

    if (!this.isDirect) out.reverse();
    return out.join('');
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
