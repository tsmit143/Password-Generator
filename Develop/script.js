// Assignment code here

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
var digits = '123456789';
var specials = '@#$!*';
var criteriaOps = [];

//___________________lowercase prompt______________________
var lowCase = confirm ("Select 'OK' if for Lowercase"); 

if (lowCase === true) { //lowercase is confiremed and lowercase letter added to critieria array
for(var i=0; i < small.length; i++){
//  alert ("Lowercase is confirmed!");
criteriaOps.push(small[i]);
 }
} else if (lowCase === false){alert("Lowercase is denied");}//lowercase is denied and not added to critieria array

console.log(criteriaOps);

//____________________uppercase prompt_________________________
var upperCase = confirm ("Select 'OK' if for Uppercase");

if (upperCase === true) {//uppercase is confiremed and uppercase letter added to critieria array
for(var i=0; i < big.length; i++){
 // alert ("Uppercase is confirmed!");
  criteriaOps.push(big[i]);
 }
} else if (upperCase === false){alert("Lowercase is denied");}//uppercase is denied and not added to critieria array

console.log(criteriaOps);
//___________________special prompt__________________________
var specChar = confirm ("Select 'OK' if for Special Characters");
if (specChar === true) {
  for(var i=0; i < specials.length; i++){
    criteriaOps.push(specials[i]);
   }
  } else if (specChar === false){alert("Lowercase is denied");}
  
  console.log(criteriaOps);

//___________________numbers prompt____________________________
var nums = confirm ("Select 'OK' if for Numebrs");
if (nums === true) {
  for(var i=0; i < digits.length; i++){
    criteriaOps.push(digits[i]);
   }
  } else if (nums === false){alert("Lowercase is denied");}
  
  console.log(criteriaOps);
//_____________________password generation_________________________

var pass = ''; //password varible
for (var i = 1; i <= lengthOption; i++){
  const randomIndex = Math.floor(Math.random() * criteriaOps.length);
  console.log (criteriaOps[randomIndex]);
 pass += criteriaOps[randomIndex];
}
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
