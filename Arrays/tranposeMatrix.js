let matrix = [
  [1, 2, 3],
  [4, 5, 6],
];
let transpose = (matrix) => {
  // Brute Force Approch
  //   let arr = [];
  //   for (let i = 0; i < matrix[0].length; i++) {
  //     matrix.forEach((e) => {
  //       arr.push(e[i]);
  //     });
  //   }
  //   let finalArr = [];
  //   let inc = 0;
  //   let last = matrix.length;
  //   for (let i = 0; i < matrix[0].length; i++) {
  //     finalArr.push(arr.slice(inc, last));
  //     inc += matrix.length;
  //     last += matrix.length;
  //   }
  //   return finalArr;

  //   Efficence code
  let arr = [];
  for (let i = 0; i < matrix[0].length; i++) {
    let ar2 = [];
    matrix.forEach((e) => {
      ar2.push(e[i]);
    });
    arr.push(ar2);
  }
  return arr;
};
console.log(transpose(matrix));
