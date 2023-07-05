let nums = [1, 1, 1, 1, 1];
let runningSum = (nums) => {
  let newArr = [];
  for (let i = 0; i < nums.length; i++) {
    let slice = nums.slice(0, i + 1);
    let arr = slice.reduce((a, c) => a + c, 0);
    newArr.push(arr);
  }
  return newArr;
};
console.log(runningSum(nums));
