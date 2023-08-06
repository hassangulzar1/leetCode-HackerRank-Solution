let mat = [
  [1, 2],
  [3, 4],
];
let r = 2;
let c = 2;
let matrixReshape = (mat, r, c) => {
  //   let onedimensional = mat.reduce((p, c) => p.concat(c));
  //   if (mat.length * mat[0].length != r * c) return mat;
  //
  //   let matrix = [];
  //   let s = 0;
  //   let e = c;
  //   for (let i = 0; i < r; i++) {
  //     matrix.push(onedimensional.slice(s, e));
  //     s += c;
  //     e += c;
  //   }
  //   return matrix;

  let arr = mat.flat();
  if (mat.length * mat[0].length != r * c) return mat;
  let ans = [];
  while (r--) {
    ans.push(arr.slice(ans.length * c, ans.length * c + c));
  }
  return ans;
};
console.log(matrixReshape(mat, r, c));
