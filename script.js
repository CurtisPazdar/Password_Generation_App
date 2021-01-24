// Assignment Code

//Generate Button & Arrays
var generateBtn = document.querySelector("#generate");
var numericArray = [0,1,2,3,4,5,6,7,8,9]
var specialCharacterArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]
var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]






//Function to write password activated on click.

function writePassword() {
  //Variables for the password that is generated and where to display them in the html.
  var passwordText = document.querySelector("#password");
  var password = generatePassword();
  passwordText.value = password;


  //User Choice Options
  function userChoice(){
    var length = prompt("How many characters do you want in your password?","8") ;
    var upperCaseAnswer = confirm("Do you want to have uppercase characters in your password?");
    var lowerCaseAnswer = confirm("Do you want to have lowercase characters in your password?")
    var numericAnswer = confirm("Do you want to have numeric characters in your password?")
    var specialCharacterAnswer = confirm("Do you want to have special characters in your password?")
    return;
  };

  //Generate Password Function. Combines the selected where true arrays and concatenates them. Then runs a random character selection until the desired length is achieved.

  function generatePassword(length,numericArray,specialCharacterArray,upperCaseArray,lowerCaseArray){
    
    switch(password) {
      case (upperCaseAnswer=true, lowerCaseAnswer=true, numericAnswer=true, specialCharacterAnswer=true):
        var case1Array = concat(numericArray,specialCharacterArray,lowerCaseArray,upperCaseArray)
        for (var i = 0; i < length.length; i++) {
        password += case1Array[Math.floor(Math.random() * case1Array.length)]};
        break;
      case (upperCaseAnswer=true, lowerCaseAnswer=true, numericAnswer=true, specialCharacterAnswer=false):
        var case2Array = concat(numericArray,lowerCaseArray,upperCaseArray)
        for (var i = 0; i < length.length; i++) {
        password += case2Array[Math.floor(Math.random() * case2Array.length)]};
        break;
      case (upperCaseAnswer=true, lowerCaseAnswer=true, numericAnswer=false, specialCharacterAnswer=false):
        var case3Array = concat(numericArray,lowerCaseArray,upperCaseArray)
        for (var i = 0; i < length.length; i++) {
        password += case3Array[Math.floor(Math.random() * case3Array.length)]};
        break;
      case (upperCaseAnswer=true, lowerCaseAnswer=false, numericAnswer=false, specialCharacterAnswer=false):
          var case4Array = concat(upperCaseArray)
          for (var i = 0; i < length.length; i++) {
          password += case4Array[Math.floor(Math.random() * case4Array.length)]};
          break;
      case (upperCaseAnswer=true, lowerCaseAnswer=true, numericAnswer=false, specialCharacterAnswer=false):
        var case5Array = concat(upperCaseArray)
        for (var i = 0; i < length.length; i++) {
        password += case5Array[Math.floor(Math.random() * case5Array.length)]};
        break;
        default: "Invalid Password"
        return password;
        
    };
  };

  //Run user choice first followed by generate password and document the password in the html.
  userChoice();
  generatePassword();
  document.querySelector("#password");

};

// This is the on click event that runs the write password function and all subsequent functions.
generateBtn.addEventListener("click",writePassword); 







