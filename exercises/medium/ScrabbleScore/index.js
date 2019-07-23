/**
 * Scrabble Score
 *
 * Given a word, compute the scrabble score for that word.
 *
 * Letter Values
 * You'll need these:
 *
 *      Letter                           Value
 *      A, E, I, O, U, L, N, R, S, T       1
 *      D, G                               2
 *      B, C, M, P                         3
 *      F, H, V, W, Y                      4
 *      K                                  5
 *      J, X                               8
 *      Q, Z                               10
 *
 * Examples:
 *
 *      "cabbage" should be scored as worth 14 points:
 *
 *      3 points for C
 *      1 point for A, twice
 *      3 points for B, twice
 *      2 points for G
 *      1 point for E
 *
 * And to total:
 *
 *      3 + 2*1 + 2*3 + 2 + 1
 *      = 3 + 2 + 6 + 3
 *      = 5 + 9
 *      = 14
 *
 * Extensions:
 *
 *      You can play a double or a triple letter.
 *      You can play a double or a triple word.
 */
function scoreLetter(letter) {
  switch (letter) {
    case "A":
    case "E":
    case "I":
    case "O":
    case "U":
    case "L":
    case "N":
    case "R":
    case "S":
    case "T":
      return 1;
    case "D":
    case "G":
      return 2;
    case "B":
    case "C":
    case "M":
    case "P":
      return 3;
    case "F":
    case "H":
    case "V":
    case "W":
    case "Y":
      return 4;
    case "K":
      return 5;
    case "J":
    case "X":
      return 8;
    case "Q":
    case "Z":
      return 10;
      throw new Error("Ņo score for ${letter}");
  }
}
function score(word) {
  return word
    .split("")
    .map(letter => letter.toUpperCase())
    .map(letter => scoreLetter(letter))
    .reduce((acc, current) => acc + current, 0);
}
module.exports = score;
