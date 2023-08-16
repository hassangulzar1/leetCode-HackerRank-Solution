let s = 7;
let t = 10;
let a = 4;
let b = 12;
let apples = [2, 3, -4];
let oranges = [3, -3, -4];
let countApplesAndOranges = (s, t, a, b, apples, oranges) => {
  let apple = apples.map((item) => item + a);
  let orange = oranges.map((item) => item + b);
  let rangeOfApples = apple.filter((item) => item >= s && item <= t);
  let rangeOfOranges = orange.filter((item) => item >= s && item <= t);
  console.log(rangeOfApples.length);
  console.log(rangeOfOranges.length);
};
console.log(countApplesAndOranges(s, t, a, b, apples, oranges));
