let s = "1326#";
const freqAlphabets = (s) => {
  let ans = "";

  for (let i = s.length - 1; i >= 0; i--) {
    let char = s.charAt(i);
    if (char === "#") {
      char = s.charAt(i - 2) + s.charAt(i - 1);
      i -= 2;
    }
    let int = parseInt(char);
    let value = String.fromCharCode(int + 96);
    ans = value + ans;
  }

  return ans;
};
console.log(freqAlphabets(s));
