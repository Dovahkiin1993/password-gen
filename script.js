// Assignment Code
var generateBtn = document.querySelector("#generate");
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numbers = [0,1,2,3,4,5,6,7,8,9];
var special = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@"];
var min = [8];
var max = [128];

// This function is asking the user what they would like in their password.
// It is also capturing what the user is inputting and generates a password accordingly

function generatePassword(){
  var finalChoices = []
  let passwordlink = prompt ("Please enter the password length you require between 8-128 characters");
  // console.log(passwordlink)
  if(passwordlink > 8 && passwordlink < 128){
    // console.log("sucsess")
    let capitalConfirm = confirm ("Do you want capital letters in your password? choose ok for yes or cancel for no")
    // console.log(capitalConfirm)
    if(capitalConfirm == true ){
      // console.log("caps added")
      finalChoices = finalChoices.concat(uppercase)
    }
  
    let lowerConfirm = confirm("Do you want lowercase letters in your password? choose ok for yes or cancel for no")
    if(lowerConfirm == true){
      // console.log("lower case added")
      finalChoices = finalChoices.concat(lowercase)

    }

    let numConfirm = confirm("Do you want any numbers in your password? choose ok for yes or cancel for no")
    if(numConfirm == true){
      // console.log("nums added")
      finalChoices = finalChoices.concat(numbers)
    }

    let specConfirm = confirm("Do you want any special characters in your password? choose ok for yes or cancel for no")
    if(specConfirm == true){
      // console.log(" special characters added")
      finalChoices = finalChoices.concat(special)

    }

    // console.log(passwordlink.length)
    var passlength = parseInt(passwordlink)
    var finalPass = ""
    for(i = 0; i < passlength; i++){
      var randomIndex = Math.floor(Math.random() * finalChoices.length)
      var randomChar = finalChoices[randomIndex]
      finalPass += randomChar
// grab a random index based on finalchoices.length
// grab a character from final choices using random index
// add characters to the final pass

    }

     

    // find a way to loop final choices 
    // find a way to get random letters from final choices
    // adding the random letters into finalpass var

    return finalPass
  } else{alert("Please choose the correct length of characters")}

} 





// Write password to the #password input
function writePassword() {

  var password = (generatePassword)("#password");
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword) 
