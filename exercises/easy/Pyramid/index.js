/**
 * Pyramid
 *
 * Write a function that accepts a positive number N.
 * The function should print a pyramid shape
 * with N levels using the # character.
 *
 * Examples:
 * pyramid(1) = '#'
 *
 * pyramid(2) = ' # '
 *              '###'
 *
 * pyramid(3) = '  #  '
 *              ' ### '
 *              '#####'
 */

function pyramid(n) {
  for (let i = 1; i <= n; i++) {
    let emp = " ".repeat(n - i);
    let pyr = "#".repeat(i * 2 - 1);
    console.log(emp + pyr + emp);
  }
}

module.exports = pyramid;
