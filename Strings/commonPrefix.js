let strs = ["flower", "flow", "flight"];
let longestCommonPrefix = (strs) => {
  if (strs.length === 0) {
    return "";
  }
  let ans = strs[0];
  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(ans) !== 0) {
      ans = ans.substring(0, ans.length - 1);
      if (ans === "") {
        return "";
      }
    }
  }
  return ans;
};

console.log(longestCommonPrefix(strs));
