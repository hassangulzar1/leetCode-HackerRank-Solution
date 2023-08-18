let b = 60;
let keyboards = [40, 50, 60];
let drives = [5, 8, 12];
let getMoneySpent = (keyboards, drives, b) => {
  let budgets = -1;
  for (let i = 0; i < keyboards.length; i++) {
    for (let j = 0; j < drives.length; j++) {
      let sum = keyboards[i] + drives[j];
      if (sum <= b && sum >= budgets) {
        budgets = sum;
      }
    }
  }
  return budgets;
};
console.log(getMoneySpent(keyboards, drives, b));
