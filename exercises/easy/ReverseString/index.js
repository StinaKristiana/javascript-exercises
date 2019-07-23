/**
 * Reverse String
 *
 * For given string return a new string
 * with the reversed order of characters.
 *
 * Examples:
 * reverse('apple') === 'elppa'
 * reverse('hello') === 'olleh'
 * reverse('Greetings!') === '!sgniteerG'
 */

function reverse(str) {
  if (str)
    return str
      .split("")
      .reverse()
      .join("");
  return "";
}

module.exports = reverse;
