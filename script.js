/*
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
*/

// Assignment Code
var generateBtn = document.querySelector("#generate");

//lowercase, uppercase, numeric, and special characters
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = "1234567890";
var special = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

//method to generate password
function generatePassword(){


  //password length check
  var passwordLength = parseInt(prompt("Enter a password length of at least 8 characters and no more than 128 characters"));
  while(!(passwordLength >= 8 && passwordLength <= 128)){
    passwordLength = parseInt(prompt("Enter a password length of at least 8 characters and no more than 128 characters"));
  }


  //password characters check
  var lowercaseBool = confirm("Include lowercase characters?");
  var uppercaseBool = confirm("Include uppercase characters?");
  var numericBool = confirm("Include numeric characters?");
  var specialBool = confirm("Include special characters?");

  while(!(lowercaseBool || uppercaseBool || numericBool || specialBool)){
    alert("Include at least one character type");
    lowercaseBool = confirm("Include lowercase");
    uppercaseBool = confirm("Include uppercase");
    numericBool = confirm("Include numeric");
    specialBool = confirm("Include special");
  }


  //generate the password
  var includeCharacters = "";
  if(lowercaseBool) includeCharacters += lowercase;
  if(uppercaseBool) includeCharacters += uppercase;
  if(numericBool) includeCharacters += numeric;
  if(specialBool) includeCharacters += special;

  var generatedPassword = "";
  for(var i = 0; i < passwordLength; i++){
    var random = Math.floor(Math.random() * includeCharacters.length);
    generatedPassword += includeCharacters.charAt(random);
  }

  return generatedPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
