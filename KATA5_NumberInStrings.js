// Create a function that takes an array of strings and returns an array with only the strings that
// have numbers in them. If there are no strings containing numbers, return an empty array.

numInStr = (args) => {
  let newArr = [];
  for (let i = 0; i < args.length; i++) {
    for (let j = 0; j < args[i].length; j++) {
      if (!isNaN(args[i][j]) && args[i][j] != " ") {
        newArr.push(args[i])
        break;
      }
    }
  }
  return newArr
}

console.log(numInStr(["1a", "a", "2b", "b"]));
console.log(numInStr(["abc", "abc10"]));
console.log(numInStr(["abc", "ab10c", "a10bc", "bcd"]));
console.log(numInStr(["this is a test", "test1"]));
console.log(numInStr(["who needs numbers", "not me"]));
console.log(numInStr(["!!", "##", "@"]));