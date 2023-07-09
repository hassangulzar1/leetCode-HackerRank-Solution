let num = [9, 9, 9, 9, 9, 9, 9, 9, 9, 9];
let k = 1;
let addToArrayForm = (num, k) => {
  let sum = BigInt(num.join("")) + BigInt(k);
  let covertSum = sum
    .toString()
    .split("")
    .map((e) => parseInt(e));
  return covertSum;
};
console.log(addToArrayForm(num, k));
