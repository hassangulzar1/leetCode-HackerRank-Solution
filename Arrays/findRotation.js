let mat = [
  [0, 1],
  [1, 0],
];
let target = [
  [1, 0],
  [0, 1],
];
let findRotation = (mat, target) => {
  let height = mat.length;
  let width = mat[0].length;

  let normal = true;
  let rotateOne = true;
  let rotateTwo = true;
  let rotateThree = true;

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (mat[i][j] !== target[i][j]) {
        normal = false;
      }

      if (mat[i][j] !== target[j][width - 1 - i]) {
        rotateOne = false;
      }

      if (mat[i][j] !== target[height - 1 - i][width - 1 - j]) {
        rotateTwo = false;
      }

      if (mat[i][j] !== target[height - 1 - j][i]) {
        rotateThree = false;
      }
    }
  }
  return normal || rotateOne || rotateTwo || rotateThree;
};
console.log(findRotation(mat, target));
