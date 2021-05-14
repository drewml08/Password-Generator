// Assignment Code
var generateBtn = document.querySelector("#generate");

function getPassword() {
  for (;;) {
    var passwordLength = window.prompt("Please enter password length");
    if (passwordLength >= 8 && passwordLength <= 128) {
      return passwordLength;
    }
    window.alert("Error! Please enter a length between 8 and 128 characters");
}

}

function getTypes() {
  for (;;) {
    var useLower = window.prompt("Would you like the password to have lowercase characters? Y/N");
    var useUpper = window.prompt("Would you like the password to have uppercase characters? Y/N");
    var useNumeric = window.prompt("Would you like the password to have numeric characters? Y/N");
    var useSpecial = window.prompt("Would you like the password to have special characters? Y/N");


  }
}

function generatePassword() {
  
  var passwordLength = getPassword();
  var characterTypes = getTypes();



}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
