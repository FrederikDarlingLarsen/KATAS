// Create a function which returns how many Friday 13ths there are in a given year.

howUnlucky = (year) => {
  let counter = 0;
  const months = 12;
  const friday = 5;

  for (let i = 1; i <= months; i++) {
    const d = new Date(`${year}-${i}-13`);
    if (d.getDay() == friday) {
      counter++;
    }
  }

  return counter;
};

console.log(howUnlucky(2020)); // ➞ 2
console.log(howUnlucky(2026)); // ➞ 3
console.log(howUnlucky(2016)); // ➞ 1