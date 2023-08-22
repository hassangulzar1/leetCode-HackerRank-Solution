let bill = [3, 10, 2, 9];
let k = 1;
let b = 7;
let bonAppetit = (bill, k, b) => {
  let sum = bill.reduce((prev, curr) => prev + curr, 0);
  let collectedBill = (sum - bill[k]) / 2;
  if (collectedBill === b) {
    console.log("Bon Appetit");
  } else {
    console.log(b - collectedBill);
  }
};
console.log(bonAppetit(bill, k, b));
