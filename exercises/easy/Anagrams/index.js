/**
 * Anagrams
 *
 * Return true of false depends on provided strings are anagrams of eachother.
 * One string is an anagram of another if it uses the same characters
 * in the same quantity. Only consider characters, not spaces
 * or punctuation. Consider capital letters to be the same as lower case.
 *
 * Examples:
 * anagrams('rail safety', 'fairy tales') === true
 * anagrams('RAIL! SAFETY!', 'fairy tales') === true
 * anagrams('Hi there', 'Bye there') === false
 */

function countLettersInString(source, letterToFind) {
    let count = 0
    for (let letterIndex in source) {
        let leter = source[letterIndex]
        if (leter == letterToFind) {
            count++
        }
    }
    return count
}
function anagrams(stringA, stringB) {
    let aLower = stringA.toLowerCase()
    let bLower = stringB.toLowerCase()
    let aLetters = aLower.replace(/[^a-z]/gi, '')
    let bLetters = bLower.replace(/[^a-z]/gi, '')
    if (aLetters.length != bLetters.length) {
        return false
    }
    for (let letterIndex in aLetters) {
        let letter = aLetters[letterIndex]
        let aCount = countLettersInString(aLetters, letter)
        let bCount = countLettersInString(bLetters, letter)
        if (aCount != bCount) {
            return false
        }
    }
    return true
}
module.exports = anagrams;
