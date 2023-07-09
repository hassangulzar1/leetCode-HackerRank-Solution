let items = [
  ["phone", "blue", "pixel"],
  ["computer", "silver", "lenovo"],
  ["phone", "gold", "iphone"],
];
let ruleKey = "color";
let ruleValue = "silver";
let countMatches = function (items, ruleKey, ruleValue) {
  let index = ["type", "color", "name"].indexOf(ruleKey);
  let count = 0;
  for (let i = 0; i < items.length; i++) {
    if (items[i][index] === ruleValue) {
      count += 1;
    }
  }
  return count;
};
console.log(countMatches(items, ruleKey, ruleValue));
