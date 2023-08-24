let p = [2, 3, 1];

let permutationEquation = (p) => {
  let y = [];
  for (let i = 1; i <= p.length; i++) {
    let x = p.indexOf(i) + 1;
    let index = p.indexOf(x) + 1;
    y.push(index);
  }
  return y;
};
console.log(permutationEquation(p));
