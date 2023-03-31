// variables
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var characters = ['!', '@', '#', '$', '%']
var all = (lowerCase, upperCase, nums, characters)
var availChars = []

// TODO: ASK FOR HELP WITH LENGTH INPUT NOT SEEMING RANDOM
// TODO: GET HELP WITH A RETURN OUTPUT FOR THE ELSE OF PASSWORD
// TODO: store the response in a variable 


// TODO: restart for a new password
// var restartGen= true;
// while(restartGen) {}
// pwd length 
function generatePassword() {
  var outputPwd = ""



  // TODO: how to return a passsword?
  var pwdLength =
    prompt("Please enter the length of your password (between 8 and 128 characters):");
  console.log(pwdLength)
  if (pwdLength < 8 || pwdLength > 128) {
    alert("Can you read? Select a number between 8 and 128")
    return
  } else {


    // lowerCase
    var userLowerCase = confirm("Do you want lower case letters?");
    if (userLowerCase == true) {

      alert("have you ever played geoguesser? bet you could beat me. GG EZ")
  
        availChars = availChars.concat(lowerCase)
    } else {
      alert("Fine. Have it your way.")
    }

    // uppercase
    var userUpperCase = confirm("Do you want upper case letters?");
    if (userUpperCase == true) {

      alert("AAAHHH")
      availChars = availChars.concat(upperCase)
    
    } else {
      alert("WHY AM I YELLING?")
    }

    // numbers
    var userNums = confirm("Do you want numbers?");
    if (userNums == true) {

      alert("What comes after 9?")
      availChars = availChars.concat(nums)
      
    } else {
      alert("It's okay I don't like math either")
    }

    // characters
    var userCharacters = confirm("Do you want special characters?");
    if (userCharacters == true) {

      alert("Is 'special characters' PC?")
      availChars = availChars.concat(characters)

    } else {
      alert("I want to cry I am so tired")
    }
    console.log(availChars)


    // build password
    var outputPwd = ""
    for (let i = 0; i < pwdLength; i++) {
      var randomInput = availChars [Math.floor(Math.random()*availChars.length)]
      outputPwd += randomInput
      
    }
    return outputPwd
  }
  
}
      // generate random number in between 0 and the length avail chars.length
      // get random char by referncing availChars at the index of random num
      // add random char to passwo1rd
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}
generateBtn.addEventListener("click", writePassword);


// psuedo code
// code already has abutton 
// already has a generate password TODO: make generatePassword function
//store the response in a variable 
//if else statements for each confirm and if it is a yes pr true I would push or add random characters to a big array of all characters selected so far
// for loop white i is less than there answer for num length prompts
// in this loop we would randomly pull characters from the big array
// pull random characters from the array using math.random
//have a var declared above for loop
// taht var += theRandomChar
//return the password var 





// Add event listener to generate button