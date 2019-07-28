/**
 * Convert a phrase to its acronym.
 *
 * Techies love their TLA (Three Letter Acronyms)!
 *
 * Help generate some jargon by writing a program that converts a long name like Portable Network Graphics to its acronym (PNG).
 */

function parse(input) {
  const parsedInput = input.replace(/[^a-zA-Z0-9']/g, " ");
  const words = parsedInput.split(" ");
  let result = [];
  words.forEach(word => {
    result.push(word[0]);
  });
  return result.join("").toUpperCase();
}

module.exports = parse;
