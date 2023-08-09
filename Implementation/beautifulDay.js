let i = 1;
let j = 2000000;
let k = 1000000000;
let beautifulDays = (i, j, k) => {
  let count = 0;
  for (let index = i; index <= j; index++) {
    let reverse = parseInt(index.toString().split("").reverse().join(""));
    if (Math.abs(index - reverse) % k == 0) count++;
  }
  return count;
};

console.log(beautifulDays(i, j, k));
