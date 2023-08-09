let patterns = ["a", "abc", "bc", "d"];
let word = "abc";
let numOfStrings = (patterns, word) => {
  let words = 0;
  for (let i = 0; i < patterns.length; i++) {
    if (word.match(patterns[i])) {
      words += 1;
    }
  }
  return words;
};
console.log(numOfStrings(patterns, word));
