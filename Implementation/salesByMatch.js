let arr = [10, 20, 20, 10, 10, 30, 50, 10, 20];
let n = arr.length;
let sockMerchant = (n, ar) => {
  let pairs = [];
  let sort = ar.sort((a, b) => a - b);
  let remove = 0;
  for (let i = 0; i < n; i++) {
    let slice = sort.slice(remove, sort.length);
    if (slice.length < 2) break;
    if (slice[0] == slice[1]) {
      pairs.push([slice[0], slice[1]]);
      remove += 2;
    } else {
      remove++;
    }
  }
  return pairs.length;
};
console.log(sockMerchant(n, arr));
