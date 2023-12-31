let columnNumber = 40;
let convertToTitle = (columnNumber) => {
  let ans = "";

  while (columnNumber > 0) {
    let code = --columnNumber % 26;
    ans = String.fromCharCode(code + 65) + ans;
    columnNumber = (columnNumber - code) / 26;
  }

  return ans;
};
console.log(convertToTitle(columnNumber));
