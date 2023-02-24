replaceVowel = (aString) => {
  let newString = aString.toLowerCase();

  for (let i = 0; i < aString.length; i++) {
    if (newString.charAt(i) == "a") {
      newString = newString.replace("a", "1");
    }
    if (newString.charAt(i) == "e") {
      newString = newString.replace("e", "2");
    }
    if (newString.charAt(i) == "i") {
      newString = newString.replace("i", "3");
    }
    if (newString.charAt(i) == "o") {
      newString = newString.replace("o", "4");
    }
    if (newString.charAt(i) == "u") {
      newString = newString.replace("u", "5");
    }
  }
  return newString;
};

console.log(replaceVowel("karAchi"));
console.log(replaceVowel("chEmBur"));
console.log(replaceVowel("khandbari"));
console.log(replaceVowel("LexiCAl"));
console.log(replaceVowel("fuNctionS"));
console.log(replaceVowel("EASY"));