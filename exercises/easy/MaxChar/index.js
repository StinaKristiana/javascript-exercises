/**
 * Max Char
 *
 * For given string return the character that is most
 * commonly used in the string.
 *
 * Examples:
 * maxChar("abcccccccd") === "c"
 * maxChar("apple 1231111") === "1"
 */

function maxChar(str) {
  let occurances = {};
  for (let letterIndex in str) {
    let letter = str[letterIndex];
    if (occurances[letter] == undefined) {
      occurances[letter] = 0;
    }
    occurances[letter] = occurances[letter] + 1;
  }
  let mostCommonLetter = str.charAt(0);
  for (let letter in occurances) {
    let currentLetterCount = occurances[letter];
    let mostCommonLetterCount = occurances[mostCommonLetter];
    if (currentLetterCount > mostCommonLetterCount) {
      mostCommonLetter = letter;
    }
  }
  return mostCommonLetter;
}
module.exports = maxChar;
