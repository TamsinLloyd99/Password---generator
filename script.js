// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  let length = prompt ("How many letters would you like your password to be?");
  if (length <= 8){
    alert ("Please pick a number higher than 8.");
    getPasswordOptions();
  } else if (length >= 128){
    alert ("Please pick a number less than 128.");
    getPasswordOptions();
  }
  alert ("You have chosen to generate a password that is " + length + " characters long!");
  let characterType = prompt ("Please pick the special characters you would like to include in your password.\n A.) Lowercase B.) Uppercase C.) Numeric \n D.) Special characters ($@%&*, etc.)");
  let upperCaseAnswer = characterType.toUpperCase();
  let lowerCaseChoice;
  let upperCaseChoice;
  let numericChoice;
  let specialCharactersChoice;

  if (upperCaseAnswer === "A" ){
    lowerCaseChoice = alert ("You have chosen to add Lower Case letters to your pasword");
  } else if (upperCaseAnswer === "B") {
    upperCaseChoice = alert ("You have chosen to add Upper Case letters to your password");
  } else if (upperCaseAnswer === "C"){
    numericChoice = alert ("You have chosen to add Numerals to your password");
  } else if (upperCaseAnswer === "D"){
    specialCharactersChoice = alert("You have chosen to add Special Characters to your password");
  }
}


// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

getPasswordOptions();