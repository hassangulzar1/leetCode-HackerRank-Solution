let n = 5;

let utopianTree = (n) => {
  let h = 1;

  for (let i = 2; i <= n; i++) {
    if (i % 2 !== 0) {
      h = h + h;
    }
    h++;
  }
  return h + 1;
};
console.log(utopianTree(n));
