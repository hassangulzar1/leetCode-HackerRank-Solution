let nums = [1, 1, 2, 2];
let n = 2;
let shuffle = (nums, n) => {
  let slice = nums.slice(0, n);
  let slice2 = nums.slice(n, nums.length);
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(slice[i]);
    arr.push(slice2[i]);
  }
  return arr;
};
console.log(shuffle(nums, n));
