let height = [1, 6, 3, 5, 2];
let k = 4;
let hurdleRace = (k, height) => {
  let max = Math.max(...height);
  let ans = max - k;

  if (ans >= 0) {
    return ans;
  } else {
    return 0;
  }
};
console.log(hurdleRace(k, height));
