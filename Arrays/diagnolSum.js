let mat = [[5]];
let diagonalSum = (mat) => {
  let sum = 0;
  for (let i = 0; i < mat.length; i++) {
    sum += mat[i][i];
  }
  let rev = mat.reverse();
  for (let i = 0; i < rev.length; i++) {
    sum += rev[i][i];
  }
  if (mat.length % 2 !== 0) {
    let arr = Math.floor(mat.length / 2);
    sum -= mat[arr][arr];
  }
  return sum;
};
console.log(diagonalSum(mat));
