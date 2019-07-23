/**
 * Given a phrase, count the occurrences of each word in that phrase.
 *
 * For example for the input "olly olly in come free"
 *
 *  olly: 2
 *  in: 1
 *  come: 1
 *  free: 1
 */

class Words {
  count(text) {
    return text
      .trim()
      .toLowerCase()
      .split(/\s+/)
      .reduce((accumulator, current) => {
        accumulator[current] = accumulator[current] + 1 || 1;
        return accumulator;
      }, Object.create(null));
  }
}

module.exports = Words;
