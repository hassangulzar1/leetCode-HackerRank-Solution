let digits = [4, 3, 2, 1];
let plusOne = (digits) => {
  if (digits.length === 1 && digits[0] === 9) {
    return [1, 0];
  }
  let lastE = digits.pop() + 1;
  digits.push(lastE);
  return digits;
};
console.log(plusOne(digits));
