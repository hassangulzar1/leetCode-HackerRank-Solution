let arr = [-4, 3, -9, 0, 4, 1];
let plusMinus = (arr) => {
  let negative = [];
  let positive = [];
  let zero = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      negative.push(arr[i]);
    } else if (arr[i] > 0) {
      positive.push(arr[i]);
    } else {
      zero.push(arr[i]);
    }
  }
  console.log((positive.length / arr.length).toFixed(6));
  console.log((negative.length / arr.length).toFixed(6));
  console.log((zero.length / arr.length).toFixed(6));
};
console.log(plusMinus(arr));
