const noStrangers = (sentence) => {
  let words = sentence.toLowerCase().match(/\b(\w+)\b/g);
  let aqu = [];
  let fri = [];

  let counts = {};
  for (word of words) {
    if (counts[word]) {
      counts[word]++;
      if (counts[word] === 3) {
        aqu.push(word);
      }
      if (counts[word] === 5) {
        aqu.splice(aqu.indexOf(word), 1);
        fri.push(word);
      }
    } else {
      counts[word] = 1;
    }
  }
  return [aqu, fri];
};

let res = noStrangers("See Spot run. See Spot jump. Spot likes jumping. See Spot fly.");
console.log(res[0], res[1]);