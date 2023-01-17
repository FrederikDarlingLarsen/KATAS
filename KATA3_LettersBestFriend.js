bestFriend = (sentence, a, b) => {

  let result = true
  let words = sentence.split(" ")

  words.forEach((word) => {
    let chars = word.split("")
    for (let i = 0; i < chars.length; i++) {
      if (chars[i] === a && chars[i + 1] !== b) {
        result = false
      }
    }})
  return result
}

console.log(bestFriend("this is a sentence", "i", "s")) 
console.log(bestFriend("this is", "i", "s"))
console.log(bestFriend("this is testi", "i", "s"))