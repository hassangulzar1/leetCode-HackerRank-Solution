let nums = [12, 345, 2, 6, 7896];
let findNumbers = (nums) => {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i].toString().length % 2 === 0) {
      count++;
    }
  }
  return count;
};
console.log(findNumbers(nums));
