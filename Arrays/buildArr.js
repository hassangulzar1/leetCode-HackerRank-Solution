let nums = [0, 2, 1, 5, 3, 4];
let buildArray = (nums) => {
  return nums.map((num) => nums[num]);
};
console.log(buildArray(nums));
