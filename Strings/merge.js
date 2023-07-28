let word1 = "abcd";
let word2 = "pq";
let mergeAlternately = (word1, word2) => {
  let s = "";

  for (let i = 0; i < Math.min(word1.length, word2.length); i++) {
    s += word1[i];
    s += word2[i];
  }

  if (s.length !== word1.length + word2.length) {
    if (word1.length > word2.length) {
      let slice = word1.slice(word2.length, word1.length);
      s += slice;
    } else if (word2.length > word1.length) {
      let slice = word2.slice(word1.length, word2.length);
      s += slice;
    }
  }
  return s;
};
console.log(mergeAlternately(word1, word2));
