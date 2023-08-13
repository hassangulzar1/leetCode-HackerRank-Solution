let candles = [4, 4, 1, 3];
let birthdayCakeCandles = (candles) => {
  let max = Math.max(...candles);
  let count = 0;
  for (let i = 0; i < candles.length; i++) {
    if (max === candles[i]) {
      count++;
    }
  }
  return count;
};
console.log(birthdayCakeCandles(candles));
