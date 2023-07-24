let nums = [3, 3];
let val = 5;
let removeElement = (nums, val) => {
  //   if (nums.length === 0 || !nums.includes(val)) return nums.length;
  //   let loop = nums.length;
  //   for (let j = 0; j < loop; j++) {
  //     if (nums.includes(val)) {
  //       nums.splice(nums.indexOf(val), 1);
  //     }
  //   }
  //   return nums.length;

  //  ! short and efficient answer
  let j = 0;
  for (const n of nums) if (n !== val) nums[j++] = n;
  return j;
};
console.log(removeElement(nums, val));
