// Storing variables and setting to false and 0 initially
var allowUppercase = false;
var allowNumbers = false;
var allowCharacters = false;
var pwLength = 0;

// Prompt function
function prompts() {
  var confirmText = "OK for yes, Cancel for no.";

  // grab user criteria and save to var
  allowUppercase = confirm(
    "Would you like to include UPPERCASE characters? " + confirmText
  );
  allowNumbers = confirm("Would you like to include numbers? " + confirmText);
  allowCharacters = confirm(
    "Would you like to include special characters? " + confirmText
  );
  pwLength = parseInt(
    prompt(
      "How long would you like your password to be? Please enter a numeric value between 8 and 128."
    )
  );

  // check if correct amount of characters and store boolean value into a var
  var rightAmountOfChars = pwLength > 7 && pwLength < 129 ? true : false;

  // validate if user has entered a numeric value
  while (isNaN(pwLength) || rightAmountOfChars === false) {
    pwLength = parseInt(
      prompt(
        "How long would you like your password to be? PLEASE ENTER A NUMERIC VALUE BETWEEN 8 and 128."
      )
    );

    // set rightAmountOfChars to true if criteria is met
    if (pwLength > 7 && pwLength < 129) {
      rightAmountOfChars = true;
    }
  }
}

// Generate password
function generatePassword(length) {
  // set initial vars to store result and counter
  var result = "";

  // assign type of characters to a var, lower cased will be defaulted
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

  // loop through the amount of times length is equal to, to get random password
  for (var i = 0; i < length; i++) {
    // get random number based on length of userAcceptedChars
    var randomNumber = Math.floor(Math.random() * userAcceptedChars.length);
    // store each iteration into result variable
    result += userAcceptedChars[randomNumber];
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
