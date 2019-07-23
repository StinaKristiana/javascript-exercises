/**
 * Two-fer or 2-fer is short for two for one. One for you and one for me.
 *
 * Given a name, return a string with the message: One for X, one for me.
 * Where X is the given name.
 *
 * However, if the name is missing, return the string: One for you, one for me.
 *
 * Examples:
 * twoFer("Alice") === "One for Alice, one for me."
 * twoFer("Bob") === "One for Bob, one for me."
 * twoFer() === "One for you, one for me."
 */

function twoFer(name = "you") {
  return `One for ${name}, one for me.`;
}

module.exports = twoFer;
