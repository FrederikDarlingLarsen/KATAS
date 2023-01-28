 //Declare function.
function reorder(aString){

   //Declare and intialize an empty string.
   let newString = "";

   //Find all of the uppercase letters by replacing all other characters by "".
   let upperCase = aString.replace(/[^A-Z]/g, '');
   // Add uppercase letters to newString.
   newString += upperCase;

   //Find all of the lowercase letters by replacing all other characters by "".
   let lowerCase = aString.replace(/[^a-z]/g, ''); 
   // Add lowercase letter to newString.
   newString += lowerCase;

   //Find all of the numbers by replacing all other characters by "".
   let numbers = aString.replace(/[^0-9]/g, '');
   //Add numbers to newString.
   newString += numbers;
   
   //Return the newString
   return newString;
}

//Console log the reorder() function to print the reordered string.
console.log(reorder("hA2p4Py"));
