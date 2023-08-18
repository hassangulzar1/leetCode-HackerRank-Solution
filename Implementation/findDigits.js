let n = 1012;
let findDigits = (n) => {
  let count = 0;
  let split = n.toString().split("");
  for (let i = 0; i < split.length; i++) {
    if (n % parseInt(split[i]) === 0) {
      count++;
    }
  }
  return count;
};
console.log(findDigits(n));
