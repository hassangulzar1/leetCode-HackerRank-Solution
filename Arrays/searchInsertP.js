let nums = [1, 3, 5, 6];
let target = 7;
let searchInsert = (nums, target) => {
  //   if (nums.includes(target)) return nums.indexOf(target);
  //   let index = 0;
  //   for (let i = 0; i < nums.length; i++) {
  //     if (nums[i] > target) {
  //       index += 0;
  //     } else {
  //       index++;
  //     }
  //   }
  //   return index;

  //  ! short and efficience answer
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) return i;
    if (nums[i] > target) return i;
  }
  return nums.length;
};
console.log(searchInsert(nums, target));
