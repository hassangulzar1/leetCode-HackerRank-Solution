let arr = [1, 3, 2, 6, 1, 2];
let n = arr.length;
let k = 3;
let divisibleSumPairs = (n, k, ar) => {
  let divisiblePairs = [];
  for (let i = 0; i < n; i++) {
    for (let i = 1; i < ar.length; i++) {
      if ((ar[0] + ar[i]) % k === 0) {
        divisiblePairs.push([ar[0], ar[i]]);
      }
    }
    ar.shift();
  }
  return divisiblePairs.length;
};
console.log(divisibleSumPairs(n, k, arr));
