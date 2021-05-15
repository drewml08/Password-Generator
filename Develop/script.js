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

    useLower = useLower.toUpperCase(); 
    useUpper = useUpper.toUpperCase();
    useNumeric = useNumeric.toUpperCase();
    useSpecial = useSpecial.toUpperCase(); 

    var result = {};
    result.useLower = useLower; 
    result.useUpper = useUpper;
    result.useNumeric = useNumeric;
    result.useSpecial = useSpecial;

    if (useLower === "Y" || useUpper === "Y" || useNumeric === "Y" || useSpecial === "Y") {

      return result;
    }

    window.alert("Error!  You must choose at least one character type");

  }
}

function generatePassword() {
  
  var passwordLength = getPassword();
  var characterTypes = getTypes();

  var passwordCharacters = [];
  var password = "";

  if (characterTypes.useUpper === "Y") {
    passwordCharacters.push("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
  } 

  if (characterTypes.useLower === "Y") {
    passwordCharacters.push("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
  } 

  if (characterTypes.useNumeric === "Y") {
    passwordCharacters.push("0", "1", "2", "3", "4", "5", "6", "7", "8", "9");
  }

  if (characterTypes.useSpecial === "Y") {
    passwordCharacters.push("!", "@", "#", "$", "%", "^", "&", "*", "(", ")");
  }

  for (var i = 0; i < passwordLength; i ++){
    var index = Math.floor(Math.random() * passwordCharacters.length);
    password = password + passwordCharacters[index];

  }

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
