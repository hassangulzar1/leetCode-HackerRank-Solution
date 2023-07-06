let accounts = [
  [1, 2, 3],
  [3, 2, 1],
];
let maximumWealth = (accounts) => {
  let arr1 = [];
  for (let i = 0; i < accounts.length; i++) {
    let arr = accounts[i].reduce((a, c) => a + c);
    arr1.push(arr);
  }
  return Math.max(...arr1);
};
console.log(maximumWealth(accounts));
