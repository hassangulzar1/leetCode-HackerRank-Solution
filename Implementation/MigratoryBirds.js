let arr = [1, 1, 2, 2, 3];
let migratoryBirds = (arr) => {
  let freq = {};
  for (let i = 0; i < arr.length; i++) {
    let char = arr[i];
    if (freq[char]) {
      freq[char]++;
    } else {
      freq[char] = 1;
    }
  }
  let Arr = [];
  for (const key in freq) {
    Arr.push(freq[key]);
  }
  let maximumChars = Math.max(...Arr);
  let FinalArr = [];
  for (const keys in freq) {
    if (freq[keys] === maximumChars) {
      FinalArr.push(keys);
    }
  }
  let toNumber = FinalArr.map((e) => parseInt(e));
  return Math.min(...toNumber);
};
console.log(migratoryBirds(arr));
