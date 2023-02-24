countBoomerangs = (input) => {
  let result = 0;

  if (input.length > 2) {
    for (let i = 0; i < input.length; i++) {
      if (isNaN(input[i])) {
        return "error";
      }
      if (input[i] === input[i + 2] && input[i + 1] !== input[i]) {
        result++;
      }
    }
  } else {
    result = "error";
  }
  return result;
};

console.log(countBoomerangs([9, 5, 9, 5, 1, 1, 1])); // ➞ 2
console.log(countBoomerangs([5, 6, 6, 7, 6, 3, 9])); // ➞ 1
console.log(countBoomerangs([4, 4, 4, 9, 9, 9, 9])); // ➞ 0
console.log(countBoomerangs([1, 7, 1, 7, 1, 7, 1])); // ➞ 5
console.log(countBoomerangs([])); // ➞ error
console.log(countBoomerangs([1, 7])); // ➞ error
console.log(countBoomerangs([1, 7, 1, 7, "one", 7, 1])); // ➞ error