// Assignment Code
var generateBtn = document.querySelector("#generate");
var uppercase = ["A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z"];
var lowercase = ["a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z"];
var numbers = [0,1,2,3,4,5,6,7,8,9];
var special = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@"];
var min = [7];
var max = [127];
var notEnough = [6];
var toMuch = [128]
var less = [] 
more = [127 > 128]

var passwordLength = prompt("How many characters would you like your password to be? Choose between 8 and 128");





// Write password to the #password input
function writePassword() {
  var password = (generatePassword)("#password");
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword) 
