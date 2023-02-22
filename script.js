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
  pwLength = parseInt(
    prompt(
      "How long of a password? Please enter a numeric value between 8 and 128 characters in length."
    )
  );

  var rightAmountOfChars = pwLength > 7 && pwLength < 129 ? true : false;

  console.log(rightAmountOfChars);

  // validate if user has entered a numeric value
  while (isNaN(pwLength) || rightAmountOfChars === false) {
    pwLength = parseInt(
      prompt(
        "How long of a password? PLEASE ENTER A NUMERIC VALUE BETWEEN 8 and 128 CHARCTERS IN LENGTH."
      )
    );

    // set rightAmountOfChars to true if criteria is met
    if (pwLength > 7 && pwLength < 129) {
      rightAmountOfChars = true;
    }
  }

  // accept only 8-128 characters
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

  // loop through to get random password
  for (var i = 0; i < length; i++) {
    // get random number based on length passed in
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
