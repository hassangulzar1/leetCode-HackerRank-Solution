let gain = [-5, 1, 5, 0, -7];
let largestAltitude = (gain) => {
  let arr = [];
  for (let i = 0; i < gain.length; i++) {
    if (arr.length === 0) arr.push(i);
    arr.push(arr[i] + gain[i]);
  }
  return Math.max(...arr);
};
console.log(largestAltitude(gain));
