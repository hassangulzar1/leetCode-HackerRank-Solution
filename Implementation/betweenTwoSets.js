// Using While Loop
// let a = [2, 6];
// let b = [24, 36];
//
// function getTotalX(a, b) {
//   let result = 0;
//   let index = 1;
//   let cloneA = a.splice(1, a.length);
//   while (a[a.length - 1] * index <= b[0]) {
//     if (
//       cloneA.every((item) => (a[a.length - 1] * index) % item === 0) &&
//       b.every((item) => item % (a[a.length - 1] * index) === 0)
//     ) {
//       result++;
//     }
//     index++;
//   }
//   return result;
// }
// console.log(getTotalX(a, b));

// Using For Loop
let a = [2, 6];
let b = [24, 36];

function getTotalX(a, b) {
  let result = 0;
  let cloneA = a.splice(1, a.length);
  for (let i = a[a.length - 1]; i <= b[0]; i++) {
    if (
      cloneA.every((item) => i % item === 0) &&
      b.every((item) => item % i === 0)
    ) {
      result++;
    }
  }

  return result;
}
console.log(getTotalX(a, b));
