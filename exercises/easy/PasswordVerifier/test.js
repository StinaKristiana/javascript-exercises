/* Create a Password verifications class called “PasswordVerifier”.
Add the following verifications to a master function called “Verify() ”

- password should be larger than 8 chars

    - password should not be null

        - password should have one uppercase letter at least

            - password should have one lowercase letter at least

                - password should have one number at least

Each one of these should throw an exception with a different message of your choosing

2. Add feature: Password is OK if at least three of the previous conditions is true

3. Add feature: password is never OK if item 1.4 is not true. */

class Rule {
  constructor(validationFunction, errorMessage) {
    this.validationFunction = validationFunction;
    this.errorMessage = errorMessage;
  }

  isValid(password) {
    return this.validationFunction(password);
  }
}

const uppercaseRegex = /[A-Z]/g;
const lowercaseRegex = /[a-z]/g;
const numberRegex = /[0-9]/g;

const rules = [
  new Rule(password => password !== undefined, "Specify input!"),
  new Rule(
    password => password !== undefined && password.length >= 8,
    "Password too short!"
  ),
  new Rule(
    password => password !== undefined && password.match(uppercaseRegex),
    "Include at least one uppercase letter!"
  ),
  new Rule(
    password => password !== undefined && password.match(lowercaseRegex),
    "Include at least one lowercase letter!"
  ),
  new Rule(
    password => password !== undefined && password.match(numberRegex),
    "Include at least one number!"
  )
];

const verifyPassword = password => {
  let lastErrorMessage = "";
  let passedRulesCount = rules.reduce((accumulator, rule) => {
    if (rule.isValid(password)) {
      return accumulator + 1;
    }
    if (lastErrorMessage.length === 0) {
      lastErrorMessage = rule.errorMessage;
    }
    return accumulator;
  }, 0);
  if (passedRulesCount < 3) {
    throw new Error(lastErrorMessage);
  }
};

module.exports = verifyPasswor;
