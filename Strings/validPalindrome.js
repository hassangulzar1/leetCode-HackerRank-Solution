let s = "redder";
let isPalindrome = (s) => {
  let palideome = s.replace(/[^0-9a-z]/gi, "").toLowerCase();
  let is = palideome.split("").reverse().join("");
  return palideome === is;
};
console.log(isPalindrome(s));
