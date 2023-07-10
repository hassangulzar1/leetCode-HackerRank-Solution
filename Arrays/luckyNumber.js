let matrix = [
  [3, 6],
  [7, 1],
  [5, 2],
  [4, 8],
];
let luckyNumbers = (matrix) => {
  for (let i = 0; i < matrix.length; i++) {
    let lowerstElement = Math.min(...matrix[i]);
    let indexOf = matrix[i].indexOf(lowerstElement);
    if (matrix.every((arr) => arr[indexOf] <= lowerstElement))
      return [lowerstElement];
  }
  return [];
};
console.log(luckyNumbers(matrix));
