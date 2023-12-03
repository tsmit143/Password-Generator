// Assignment code here
/*
//**Gathers the desired amount of password characters**
//Make Prompt for length of password
var lengthOption = prompt ("Enter password length: must be between 8 and 128 characters!");
//Displays error message if too short
if (lengthOption < 8) {
 alert ("Option request too short, try again");
}
// Displays error message if too 
if (lengthOption > 128) {
 alert ("option resquest too long, try again");
}
console.log(lengthOption); //delete later

//make prompt for character types -  lowercase, uppercase, numeric, and/or special characters
//going to need an array for each option

//prompt for instructions moving forward
var promtInstructions = prompt ("Respond either [Yes or No] to the following prompts to selcet your password criteria options...select OK to continue!");

var lowCase = prompt ("Lowercase: Yes or No");

/*if (lowCase === "Yes"){
  console.log("True");
} else if (lowCase === "No"){
  console.log("False");
} else { alert ("Please respond with Yes or No");}*//*

var answer = false;
function criteriaQuestion (choice){
  if (choice === "Yes"){
    answer = true;
  } else if (choice === "No"){ 
    answer = false;
  } else { alert ("Please respond with Yes or No");
         }
         return;
}
criteriaQuestion (lowCase);
*/



//display selected options options: lowercase, uppercase, numeric, and/or special characters.. if corret move fwd if not ask them to adjust options

//Check type input return error if not one of the above
//Return error if no option is selected




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword(){
//console.log("hey");
//Make Prompt for length of password

//_________________________________________
var lengthOption = prompt ("Enter password length: must be between 8 and 128 characters!"); //gives char length
//Displays error message if too short
if (lengthOption < 8) {
 alert ("Option request too short, try again");
}
// Displays error message if too 
if (lengthOption > 128) {
 alert ("option resquest too long, try again");
}
console.log(lengthOption); //delete later
//_________________________________________
var big = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var small = 'abcdefghijklmnopqrstuvwxyz';
var nums = 123456789;
var specChar = '@#$!*';
var criteriaOps = [0];
//_________________________________________

var lowCase = confirm ("Select 'OK' if for Lowercase"); // asks if user wants lowercase in passsword

if (lowCase === true) {
for(var i=0; i < small.length; i++){
  criteriaOps.push(small[i]);
 }
}

console.log(criteriaOps);

var upperCase = confirm ("Select 'OK' if for Uppercase");
var specChar = confirm ("Select 'OK' if for Special Characters");
var nums = confirm ("Select 'OK' if for Numebrs");

var pass = '';//password varible

/*for (var i=1; i <= lengthOption; i++){
  var char = Math.floor(Math.random()* criteriaOps.length );
  pass += criteriaOps.charAt(char)
}

*/

  return pass;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

 passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
