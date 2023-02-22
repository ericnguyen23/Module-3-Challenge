// Storing variables and setting to false and 0 initially
var uppercase = false;
var numbers = false;
var characters = false;
var pwLength = 0;

// Prompt function
function prompts() {
  // using confirm method to set variables to boolean based on response
  uppercase = confirm("Would you like to include Uppercase characters?");
  numbers = confirm("Would you like to include numbers?");
  // characters = confirm("Would you like to include special characters?");
  pwLength = prompt(
    "What length would you like your password to be? Please at least 8 characters and at most 128"
  );
}

// Generate password
function generatePassword(length) {
  // set initial vars to store result and counter
  var result = "";
  var counter = 0;

  // assign type of characters to a var
  var userAcceptedChars = "abcdefghijklmnopqrstuvwxyz";
  var upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var nums = "0123456789";
  var specialChars = "!@#$%^&*()_+-~{}'<>?";

  if (upperCaseChars) {
    userAcceptedChars += upperCaseChars;
  } 

  // taking length as paramater, loop through that amount of times to dipslay appropriate charcter count
  while (counter < length) {
    result += userAcceptedChars.charAt(Math.floor(Math.random() * length));
    counter += 1;
  }

  return result;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // calling prompts function
  prompts();
  var password = generatePassword(pwLength);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
