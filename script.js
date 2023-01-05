var characterLength = 8;
var choiceArr = [];

var specialCharArr = ['!','@','#','$','%','^','&','*','?',',','~','{','}'];
var lowerCaseArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCaseArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numberArr = ['0','1','2','3','4','5','6','7','8','9'];





// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  console.log(choiceArr)
  console.log(characterLength)
  //GeneratePassword based on the prompts
  var password = "";
  for(var i = 0; i < characterLength; i++ ){
    var randomIndex = Math.floor(Math.random() * choiceArr.length)
    password = password + choiceArr[randomIndex]
  }
  console.log(password)
  return password;
}

function getPrompts(){
  choiceArr = [];
  characterLength = prompt("How many characters would you prefer for the length of your password? (8-128 characters)")
  
  if(isNaN(characterLength) || characterLength < 8 || characterLength > 128){ // This should be false
    alert("oh no! It looks like you made a mistake. Please try again. Password must be 8 - 128 characters long. Thank you!")
    return false;
  }

  if (confirm("Would you like to have lowercase letters in your password?")){
    choiceArr = choiceArr.concat(lowerCaseArr)
  }
  if (confirm("Would you like to have uppercase letters in your password?")){
    choiceArr = choiceArr.concat(upperCaseArr)
  }
  if (confirm("Would you like to have special characters in your password?")){
    choiceArr = choiceArr.concat(specialCharArr)
  }
  if (confirm("Would you like to have numbers in your password?")){
    choiceArr = choiceArr.concat(numberArr)
  }
  console.log(choiceArr)
  return true;
}


// Write password to the #password input
function writePassword() {
    var correctPrompts = getPrompts();  //returns true or false
    var passwordText = document.querySelector("#password");
  if(correctPrompts) {
    console.log('string')
      var newPassword = generatePassword();
    passwordText.value = newPassword;
  } else{
    passwordTest.value = "";
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

