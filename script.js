// Storing variables and setting to false and 0 initially
var allowUppercase = false;
var allowNumbers = false;
var allowCharacters = false;
var pwLength = 0;

// Prompt function
function prompts() {
  var okyes = "OK for yes, cancel for no.";
  // using confirm method to set variables to boolean based on response
  allowUppercase = confirm(
    "Would you like to include Uppercase characters? " + okyes
  );
  allowNumbers = confirm("Would you like to include numbers? " + okyes);
  allowCharacters = confirm(
    "Would you like to include special characters? " + okyes
  );
  pwLength = prompt(
    "What length would you like your password to be? Please at least 8 characters and at most 128."
  );

  // validate if user has entered a value for pw length
  // if (pwLength == "") {
  //   pwLength = prompt(
  //     "PLEASE ENTER A VALUE. What length would you like your password to be? Please at least 8 characters and at most 128."
  //   );
  // }

  // validate if user entered a numerical value for pw lentgh
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
  var specialChars = "!@#$%^&*()./-=_+~`|}{[]:;?><";

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

  // Mix up userAcceptedChars at random first

  // Loop to add to password depending on length provided by user
  for (var i = 0; i < length; i++) {
    result += userAcceptedChars.charAt(Math.floor(Math.random() * length));
    counter += 1;
  }

  console.log(userAcceptedChars);

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
