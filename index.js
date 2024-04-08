// Write your solution in this file!
var customerName = 'bob';
function upperCaseCustomerName() {
   //Access the global variable customerName
   return customerName.toUpperCase();
} 

//Call the funtion and store the uppercase version in a new variable
var uppercaseName = upperCaseCustomerName();
console.log(uppercaseName); //Output: BOB