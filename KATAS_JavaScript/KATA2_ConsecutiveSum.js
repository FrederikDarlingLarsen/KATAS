function consecutiveSum(number){

//Declare an array of numbers.
let numbers;

//Declare and intialize the boolean variable.
let isConsecutive = false;

//For loop that lopps through the possible numbers to start on.
for(let i = 0; i < number-1; i++){

//Intialize an empty array.
numbers = [];

//Declare and set result to 0.
let result = 0;

//Starts counting, pushes the numbers to an array, and uses the reduce() method to get the result.
for(let j = 1; result < number; j++){
    numbers.push(j+i);
    result = numbers.reduce((a, b) => {
        return a + b;
      });
}

//Checks whether result is equal to the input and set the boolean to true.
if(result == number ){
   isConsecutive = true;
}
}

//Prints the result.
console.log("Number is consecutive: " + isConsecutive);

}

consecutiveSum(9)

consecutiveSum(10) 

consecutiveSum(64) 