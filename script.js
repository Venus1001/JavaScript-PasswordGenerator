




// Action when user click on the "Generate Button":

var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", acceptCriteria);

// Golabl variables:

var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var symbols = ["&", "^", "%", "$", "#", "@","~"];


// Function for acceptCriteria:
function acceptCriteria() {
    var acceptCriteria = confirm("Please follow below criteria to generate a new password!");
    if (acceptCriteria == false) {
        alert("System will not generate password.");
        return;
    }
    var isValid = confirm("Your password must meet the following criteria?\n" +
        "1. Contains Uppercase and lowercase letters \n" +
        "2. Contains Special characters and numbers");
    if (isValid == false) {
        alert("System will not generate password.");
        return;
    }
    var numberOfLength = prompt("Please enter the length of the password.");

    if (!numberOfLength > 8 && numberOfLength < 128) {

        alert("Password length reset");
        return;
    }

    writePassword(numberOfLength);
}

// Function for system generate the password:

function generatePassword(passwordLength) {
    var temp = passwordLength;
    var userPassword = "";
    while (temp > 0) {
        userPassword = userPassword + letters[Math.floor(Math.random() * letters.length)];
        temp--;
        if (!temp > 0) break;
        userPassword = userPassword + letters[Math.floor(Math.random() * letters.length)].toLowerCase();
        temp--;
        if (!temp > 0) break;
        userPassword = userPassword + numbers[Math.floor(Math.random() * numbers.length)];
        temp--;
        if (!temp > 0) break;

        userPassword = userPassword + symbols[Math.floor(Math.random() * symbols.length)];
        temp--;
        if (!temp > 0) break;
    }
    return userPassword;
}


//Write password to the #password input
function writePassword(number) {
    var password = generatePassword(number);
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}
