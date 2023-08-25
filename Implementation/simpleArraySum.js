let array = [1, 2, 3];

let simpleArraySum = (arr) => {
  let sum = arr.reduce((a, b) => {
    return a + b;
  });
  return sum;
};
console.log(simpleArraySum(array));
