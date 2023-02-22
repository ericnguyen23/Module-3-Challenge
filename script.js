// Storing variables and setting to false and 0 initially
var allowuUppercase = false;
var allowNumbers = false;
var allowCharacters = false;
var pwLength = 0;

// Prompt function
function prompts() {
  // using confirm method to set variables to boolean based on response
  allowUppercase = confirm("Would you like to include Uppercase characters?");
  allowNumbers = confirm("Would you like to include numbers?");
  allowCharacters = confirm("Would you like to include special characters?");
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
  var specialChars = "!@#$%^&*()./-=_+~`|}{[]:;?><,";

  // Check if user allows certain criteria and add to userAcceptedChars var
  if (allowUppercase) {
    userAcceptedChars += upperCaseChars;
  }

  if (allowNumbers) {
    userAcceptedChars += nums;
  }

  if (allowCharacters) {
    userAcceptedChars += specialChars;
  }

  // Loop to add to password depending on length provided by user
  for (var i = 0; i < length; i++) {
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
