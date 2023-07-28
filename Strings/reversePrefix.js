let word = "abcd";
let ch = "z";
let reversePrefix = (word, ch) => {
  if (word.indexOf(ch) === -1) return word;
  let index = word.indexOf(ch);
  let slice = word.slice(0, index + 1);
  return (
    slice.split("").reverse().join("") + word.slice(index + 1, word.length)
  );
};
console.log(reversePrefix(word, ch));
