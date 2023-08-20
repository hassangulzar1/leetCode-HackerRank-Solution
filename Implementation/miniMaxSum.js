let array = [1, 2, 3, 4, 5];
let miniMaxSum = (arr) => {
  let maxAndMin = [];
  let slicing = 0;
  for (let i = 0; i < arr.length; i++) {
    let arr1 = arr.slice(0, slicing);
    let arr2 = arr.slice(slicing + 1, arr.length);
    let final = arr1.concat(arr2);
    let sum = final.reduce((prev, curr) => prev + curr);
    maxAndMin.push(sum);
    slicing++;
  }
  let max = Math.max(...maxAndMin);
  let min = Math.min(...maxAndMin);
  console.log(min, max);
};
console.log(miniMaxSum(array));
