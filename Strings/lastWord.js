let s = "   fly me   to   the moon  ";
let lengthOfLastWord = (s) => {
  let split = s.trim().split(" ");
  let length = split[split.length - 1];
  return length.length;
};
console.log(lengthOfLastWord(s));
