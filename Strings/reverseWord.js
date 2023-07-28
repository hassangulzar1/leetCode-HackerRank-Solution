let s = "Let's take LeetCode contest";
let reverseWords = (s) => {
  let split = s.split(" ");
  let arr = [];
  for (let i = 0; i < split.length; i++) {
    arr.push(split[i].split("").reverse().join(""));
  }
  return arr.join(" ");
};
console.log(reverseWords(s));
