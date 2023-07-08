let nums = [1, 2, 3, 4, 0];
let index = [0, 1, 2, 3, 0];
let createTargetArray = (nums, index) => {
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    arr.splice(index[i], 0, nums[i]);
  }
  return arr;
};
console.log(createTargetArray(nums, index));
