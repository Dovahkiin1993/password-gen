// Assignment Code
var generateBtn = document.querySelector("#generate");
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numbers = [0,1,2,3,4,5,6,7,8,9];
var special = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@"];
var min = [8];
var max = [128];
var finalPass = ""
var finalChoices = []


function generatePassword(){
  let passwordlink = prompt ("please enter password length characters between 8-128");
  console.log(passwordlink)
  if(passwordlink > 8 && passwordlink < 128){
    console.log("sucsess")
    let capitalConfirm = confirm ("Do you want capital letters in your password?")
    console.log(capitalConfirm)
    if(capitalConfirm == true ){
      console.log("caps added")
      finalChoices = finalChoices.concat(uppercase)
    }
  
    let lowerConfirm = confirm("Do you want lowercase letters in your password?")
    if(lowerConfirm == true){
      console.log("lower case added")
      finalChoices = finalChoices.concat(lowercase)

    }

    let numConfirm = confirm("Do you want a number in your password?")
    if(numConfirm == true){
      console.log("nums added")
      finalChoices = finalChoices.concat(numbers)
    }

    let specConfirm = confirm("Do you want special characters in you password?")
    if(specConfirm == true){
      console.log(" special characters added")
      finalChoices = finalChoices.concat(special)

    }

    console.log(finalChoices.length)

    for(i = 0; i < finalChoices.length; i++){

    }

    // find a way to loop final choices 
    // find a way to get random letters from final choices
    // adding the random letters into finalpass var

    return finalPass
  } else{alert("Please choose the correct length")}

} 





// Write password to the #password input
function writePassword() {
  var password = (generatePassword)("#password");
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword) 
