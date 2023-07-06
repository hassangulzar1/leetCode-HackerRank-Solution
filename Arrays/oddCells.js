let m = 2;
let n = 3;
let indices = [
  [0, 1],
  [1, 1],
];

let oddCells = (m, n, indices) => {
  const matrix = new Array(m).fill(0).map((item) => new Array(n).fill(0));
  let output = 0;

  for (let i = 0; i < indices.length; i++) {
    const [x, y] = indices[i];

    for (let j = 0; j < n; j++) {
      matrix[x][j]++;

      if (matrix[x][j] % 2) output++;
      else output--;
    }
    for (let p = 0; p < m; p++) {
      matrix[p][y]++;
      if (matrix[p][y] % 2) output++;
      else output--;
    }
  }
  return output;
};
console.log(oddCells(m, n, indices));
