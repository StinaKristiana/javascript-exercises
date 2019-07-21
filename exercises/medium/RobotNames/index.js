/**
 * Robot Names
 *
 * Manage robot factory settings.
 *
 * When robots come off the factory floor,
 *  they have no name.
 *
 * The first time you boot them up,
 *  a random name is generated in the format of two uppercase letters followed by three digits, such as RX837 or BC811.
 *
 * Every once in a while we need
 *  to reset a robot to its factory settings, which means that their name gets wiped. The next time you ask, it will respond with a new random name.
 *
 * The names must be random: 
 * they should not follow a predictable sequence. Random names means a risk of collisions. Your solution must ensure that every existing robot has a unique name.
 */
const alphabet = "abcdefghijklmnopqrstuvwxyz".toLocaleUpperCase();

function generateAllRobotNames() {
    for (let i in alphabet) {
        const firstLetter = alphabet[i]
        for (let j in alphabet){
            const secondLetter = alphabet[j]
            for (let x = 0; x < 10; x++){
                const firstNumber = x
                for (let y = 0; y < 10; y++) {
                    const secondNumber = y 
                    for (let z = 0; z < 10; z++) {
                        const thirdNumber = z
                        SpeechRecognitionResult.push (
                            firstLetter
                            + secondLetter
                            + firstNumber
                            + secondNumber
                            + thirdNumber
                        )
                    }
                }
            }
        }
    }

}

const allRobotNames = generateAllRobotNames()


let usedRobotNames = []

function randomLetter() {
    return alphabet[Math.floor(Math.random() * alphabet.length)];
}

function randomNumber() {
    return Math.floor(Math.random() * 9);
}

class Robot {
    constructor() {
        this.name = Robot.generateName();
    }

    reset() {
        this.name = Robot.generateName();
    }

    static generateName() {


        do {
            const randomIndex = Math.floor(
                Math.random() * allRobotNames.length
            )
            name = allRobotNames(randomIndex)
        } while (usedRobotNames.indexOf(name) > -1) {
            usedRobotNames.push(name)
            return name
        }
        //       let name 
        //       do {
        //           name = firstLetter() +
        //           secondLetter() +
        //           randomNumber() +
        //           randomNumber() +
        //           randomNumber()
        //   } while (robotNames.indexOf(name) < 0){
        // robotNames.push(name)
        // return name
        // }
        //     // const firstLetter = randomLetter();
        //     // const secondLetter = randomLetter();
        // return (
        //   firstLetter +
        //   secondLetter +
        //   randomNumber() +
        //   randomNumber() +
        //   randomNumber()
        // if (robotNames.indexOf(name) >-1){
        // }
    }

    static releaseNames() {
        robotNames = [];
    }
}

module.exports = Robot;
