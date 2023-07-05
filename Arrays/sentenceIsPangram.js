let sentence = "leetcode";
let checkIfPangram = (sentence) => {
  let aToz = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  for (let i = 0; i < aToz.length; i++) {
    if (!sentence.includes(aToz[i])) {
      return false;
    }
  }
  return true;
};
console.log(checkIfPangram(sentence));
