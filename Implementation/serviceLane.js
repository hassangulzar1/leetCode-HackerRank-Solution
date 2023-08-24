let width = [1, 2, 2, 2, 1];
let cases = [
  [2, 3],
  [1, 4],
  [2, 4],
  [2, 4],
  [2, 3],
];
let serviceLane = (n, cases) => {
  let arr = [];
  for (let i = 0; i < cases.length; i++) {
    let [s, e] = cases[i];
    let slice = width.slice(s, e + 1);
    arr.push(Math.min(...slice));
  }
  return arr;
};
console.log(serviceLane(width, cases));
