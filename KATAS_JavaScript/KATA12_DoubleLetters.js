// Create a function that takes a word and returns true if the word has two consecutive 
// identical letters. 
const doubleLetters = (word) => {
    let result = false;
    for(let i = 0; i < word.length; i++){
        if(i < word.length-1){
        if(word[i] === word[i+1]){
            result = true;
        }
    }
    }
    return result;
}
console.log(doubleLetters("loop")) // ➞ true 
console.log(doubleLetters("yummy")) // ➞ true 
console.log(doubleLetters("orange")) // ➞ false 
console.log(doubleLetters("munchkin")) // ➞ false