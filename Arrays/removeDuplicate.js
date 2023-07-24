// let nums = [1, 1, 1, 1];
let nums = [0, 1, 1, 1, 1, 2, 2, 3, 4];
let removeDuplicates = (nums) => {
  // let arr = nums;
  // for (let i = 0; i < arr.length; i++) {
  //   for (let j = i + 1; j < arr.length; j++) {
  //     if (arr[i] === arr[i + 1]) {
  //       arr.splice(i + 1, arr.lastIndexOf(arr[i]) - i);
  //     } else {
  //       break;
  //     }
  //     console.log(arr);
  //   }
  // }
  // return arr.length;

  // !with space and timeComplexcity
  if (nums.length === 0) return 0;
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[i]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
};
console.log(removeDuplicates(nums));
