let word1 = ["ab", "c"];
let word2 = ["a", "bc"];
let arrayStringsAreEqual = (word1, word2) => {
  let sum1 = word1.reduce((acc, curr) => acc + curr, "");
  let sum2 = word2.reduce((acc, curr) => acc + curr, "");
  if (sum1 === sum2) {
    return true;
  } else {
    return false;
  }
};
console.log(arrayStringsAreEqual(word1, word2));
