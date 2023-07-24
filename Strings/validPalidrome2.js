let s = "cbbcc";
let validPalindrome = (s) => {
  const isTruePalindrome = function (s, p1, p2) {
    while (p1 < p2) {
      if (s[p1] !== s[p2]) return false;
      p1++;
      p2--;
    }

    return true;
  };
  let p1 = 0;
  let p2 = s.length - 1;

  while (p1 < p2) {
    if (s[p1] !== s[p2])
      return isTruePalindrome(s, p1 + 1, p2) || isTruePalindrome(s, p1, p2 - 1);
    p1++;
    p2--;
  }

  return true;
};
console.log(validPalindrome(s));
