// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//updated based on user's selection
//var length;
var availableCharacters = [];
var numbers = "0123456789";
var special = "~!@#$%^&*(<>";
var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";


function generatePassword() {
    var password = "";
    //1. prompt user for parameters
    //Prompt for length
    var lengthUI = prompt("Type the number of characters you would like your password to contain. Minimum of 8 characters required and a maximum of 128 characters");

    if (lengthUI < 8 || lengthUI > 128) {
        alert("The number you typed was not within the the defined parameters of 8-128 characters");
        prompt("Type the number of characters you would like in your password. Number must be within the range of 8-128")
    } else if (lengthUI >= 8 || lengthUI <= 128) {
        alert("You may move onto the next prompt");
    }

    console.log(lengthUI)
    //Prompt for special characters
    var specialUI = confirm("Click ok if you need special characters")
    console.log(specialUI)

    if (specialUI) {
        console.log(availableCharacters = availableCharacters += special);
    }

    //Prompt for numbers
    var numbersUI = confirm("Click ok if you need numbers?")
    console.log(numbersUI)

    if (numbersUI) {
        console.log(availableCharacters = availableCharacters += numbers);
    }

    //Prompt for uppercase
    var uppercaseLettersUI = confirm("Click ok if you need uppercase letters")
    console.log(uppercaseLettersUI)

    if (uppercaseLettersUI) {
        console.log(availableCharacters = availableCharacters += uppercaseLetters);
    }

    //Prompt for lowercase
    var lowercaseLettersUI = confirm("Click ok if you need lowercase letters")
    console.log(lowercaseLettersUI)

    if (lowercaseLettersUI) {
        console.log(availableCharacters = availableCharacters += lowercaseLetters);
    }

    for (var i = 0; i < lengthUI; i++) {
        password = availableCharacters[Math.floor(Math.random()*availableCharacters.length)]
    }
    //getParameters()
    //2. create random password from available characters
    //for loop run the number of times that the user sets length to 
    //add random characters to password string
    //Math.floor(Math.random(availableCharacters)*length.length)
    //for (i=0; i<=length.length; i++) {
    //console.log(i)
    //}
    //add 1 random character to password

    return password
}
// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;

}

