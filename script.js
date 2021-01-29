// Assignment Code

//Generate Button & Arrays
var generateBtn = document.querySelector("#generate");
var numericArray = ["0","1","2","3","4"
,"5","6","7","8","9",]
var specialCharacterArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")",]
var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",]
var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",]
var password = document.querySelector("#password");


// Function writePassword that will run on click of the generate button.
function writePassword() {

  //Create an object answers that generate the prompts and store the user input.
 var answers = {
 Number : prompt("How many characters do you want in your password?","8"),
 lowercase :confirm("Do you want to have lowercase characters in your password?"),
 upperCase : confirm("Do you want to have uppercase characters in your password?"),
 NumericCharacters: confirm("Do you want to have numeric characters in your password?"),
 SpecialCharacters : confirm("Do you want to have special characters in your password?")
 }

//creating a variable to local memory that is equal to the value of key Number in the answers object.
var numberLength = answers.Number;


//Creating the rule that the password must be between 8 & 128 characters in length. On confirm of the alert it will run the function again rending the prompts/confirms in the object answers.

if (numberLength < 8 || numberLength > 128){
  alert("Password must be between 8 and 128 characters in length. Please try again");
  writePassword();
};

//Creating an array that houses the values of answers.
var answerArray = Object.values(answers);


//creating an array to concatenate with our possible character sets. It starts empty. 

var consolidatedArray = [];

//Creating a series of switch cases that compare the answerArray values and concatenates a character set to the consolidatedArray as to include all the options the user chose above in the prompts/confirms. 
switch (answerArray[1]){
  case answerArray[1] = true:
    consolidatedArray1 = consolidatedArray + lowerCaseArray;
  break;
  case answerArray[1] = false:
    consolidatedArray1 = consolidatedArray;
  break;
};

switch (answerArray[2]){
  case answerArray[2] = true:
    consolidatedArray2 = consolidatedArray1 + upperCaseArray;
  break;
  case answerArray[2] = false:
    consolidatedArray2 = consolidatedArray1;
  break;
};

switch (answerArray[3]){
  case answerArray[3] = true:
    consolidatedArray3 = consolidatedArray2 + numericArray;
  break;
  case answerArray[3] = false:
    consolidatedArray3 = consolidatedArray2;
  break;
};

switch (answerArray[4]){
  case answerArray[4] = true:
    consolidatedArray4 = consolidatedArray3 + specialCharacterArray;
  break;
  case answerArray[4] = false:
    consolidatedArray4 = consolidatedArray3;
  break;
};

//Creating an if state that states if none of the answers were chosen the last consolidated array will either be = 0 or undefined. In that instance we alert the user they must chose at least one character set and we run the writePassword function to restart the user input process.

if (consolidatedArray4 === undefined || consolidatedArray4 == 0){
  alert("You must choose at least one character set to include in your password. Please try again");
  writePassword();
};

//Creating a variable that is an empty string.

var passTry = "";

//Creating a final array that removes the , commas as characters to be selected from the array.

var finalArray = consolidatedArray4.split(",")

//Creating a for loop that iterates through the finalArray appending characters for the length that was selected by user input.

for(i = 0; i < numberLength; i++){
  passTry += finalArray[Math.floor(Math.random()*finalArray.length)];
};


//The password variable that is associated with the id password in the html will now have the text content of the passTry variable. This displays the user the password.


password.textContent = passTry;
;

};



generateBtn.addEventListener("click",writePassword)







