/**
 * Manage a game player's High Score list.
 *
 * Your task is to build a high-score component of the classic Frogger game, one of the highest selling and addictive games of all time, and a classic of the arcade era. Your task is to write methods that return the highest score from the list, the last added score and the three highest scores.
 */

class HighScores {
  constructor(input) {
    this.scores = input;
    this.input = input;
    this.sortedInput = [...this.input];
    this.sortedInput.sort(function (a, b) { return b - a })
  }

  get latest() {
    return this.input[this.input.length - 1];
  }

  get personalBest() {
    return this.sortedInput[0];
  }

  get personalTopThree() {
    return this.sortedInput.slice(0, 3);
  }
}

module.exports = HighScores;
