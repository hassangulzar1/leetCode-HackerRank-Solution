let candies = [2, 8, 7];
let extraCandies = 1;
let kidsWithCandies = (candies, extraCandies) => {
  let bolianArr = [];
  let max = Math.max(...candies);
  candies.forEach((e) => {
    if (e + extraCandies >= Math.max(...candies)) {
      bolianArr.push(true);
    } else {
      bolianArr.push(false);
    }
  });

  return bolianArr;
};
console.log(kidsWithCandies(candies, extraCandies));
