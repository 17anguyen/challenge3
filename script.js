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

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}
var start = false;
generateBtn.addEventListener("click", function() {
if(!start){
  generatePassword();
  start=true;
}
generateBtn.addEventListener("click",writePassword);



});

function generatePassword() {
    // TODO: how to return a passsword?
  var pwdLength =
    prompt("Please enter the length of your password (between 8 and 128 characters):");
  if (pwdLength < 8 || pwdLength > 128) {
    alert("Can you read? Select a number between 8 and 128")
    generatePassword();
  } else {
    alert("testing if this works");
    // lowerCase
    var userLowerCase = confirm("Do you want lower case letters?");
    if (userLowerCase == true) {
      alert("have you ever played geoguesser? bet you could beat me. GG EZ")
      availChars = availChars.concat(lowerCase)
    } else {
      alert("Fine. Have it your way.")
    }

    var userUpperCase = confirm("Do you want upper case letters?");
    if (userUpperCase == true) {
      alert("AAAHHH")
      availChars = availChars.concat(upperCase)
    } else {
      alert("HOW AM I SUPPOSED TO HEAR YOU IF YOU AREN'T YELLING")
    }

    var userNums = confirm("Do you want numbers?");
    if (userNums == true) {
      alert("What comes after 9?")
      availChars.concat(nums)
    } else {
      alert("It's okay I don't like math either")
    }

    var userCharacters = confirm("Do you want special characters?");
    if (userCharacters == true) {
      alert("Is 'special characters' PC?")
      availChars.concat(characters)
    } else {
      alert("I want to cry I am so tired")
    }
   
    var password = [];
    // UpperSpecialLower
    if (
      userCharacters === true &&
      userLowerCase === true &&
      userUpperCase === true &&
      userNums === true
    ) {
      for (var i = 0; i < pwdLength; i++) {
        var randomIndex = Math.floor(
          Math.random() * all.length
        );
        password.push(all[randomIndex]);
      } console.log (password)
    }
    // UpperLower
    // else if (
    //   pwd.passwordSpecial === "n" &&
    //   pwd.passwordLower === "y" &&
    //   pwd.passwordLetters === "y" &&
    //   pwd.passwordUpper === "y"
    // ) {
    //   for (var i = 0; i < pwd.passwordLength; i++) {
    //     var randomIndex = Math.floor(Math.random() * pwd.UpperLower.length);
    //     password += pwd.UpperLower.charAt(randomIndex);
    //   }
    // }
    // // UpperSpecial
    // else if (
    //   pwd.passwordSpecial === "y" &&
    //   pwd.passwordLower === "n" &&
    //   pwd.passwordLetters === "y" &&
    //   pwd.passwordUpper === "y"
    // ) {
    //   for (var i = 0; i < pwd.passwordLength; i++) {
    //     var randomIndex = Math.floor(Math.random() * pwd.UpperSpecial.length);
    //     password += pwd.UpperSpecial.charAt(randomIndex);
    //   }
    // }
    // //LowerSpecial
    // else if (
    //   pwd.passwordSpecial === "y" &&
    //   pwd.passwordLower === "y" &&
    //   pwd.passwordLetters === "y" &&
    //   pwd.passwordUpper === "n"
    // ) {
    //   for (var i = 0; i < pwd.passwordLength; i++) {
    //     var randomIndex = Math.floor(Math.random() * pwd.LowerSpecial.length);
    //     password += pwd.LowerSpecial.charAt(randomIndex);
    //   }
    // }
    // //Lower
    // else if (
    //   pwd.passwordSpecial === "n" &&
    //   pwd.passwordLower === "y" &&
    //   pwd.passwordLetters === "y" &&
    //   pwd.passwordUpper === "n"
    // ) {
    //   for (var i = 0; i < pwd.passwordLength; i++) {
    //     var randomIndex = Math.floor(Math.random() * pwd.Lower.length);
    //     password += pwd.Lower.charAt(randomIndex);
    //   }
    // }
    // //Special
    // else if (pwd.passwordSpecial === "y" && pwd.passwordLetters === "n") {
    //   for (var i = 0; i < pwd.passwordLength; i++) {
    //     var randomIndex = Math.floor(Math.random() * pwd.Special.length);
    //     password += pwd.Special.charAt(randomIndex);
    //   }
    // }
    // //Upper
    // else {
    //   for (var i = 0; i < pwd.passwordLength; i++) {
    //     var randomIndex = Math.floor(Math.random() * pwd.Upper.length);
    //     password = password + pwd.Upper.charAt(randomIndex);
    //   }
    // }
    return password;
  }
}

    // build password
//     for (let i = 0; i < pwdLength; i++) {
//       var randomInput = Math.floor(Math.random() * availChars.length);
//       var password = availChars[randomInput]

//     }console.log(availChars);
//     console.log(password);
//   } 

//   return password
// }




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

