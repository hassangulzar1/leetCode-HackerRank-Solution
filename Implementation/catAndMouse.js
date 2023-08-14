let x = 1;
let y = 3;
let z = 2;
let catAndMouse = (x, y, z) => {
  for (let i = 0; i < q; i++) {
    let catA = Math.abs(z - x);
    let catB = Math.abs(z - y);
    if (catA < catB) {
      return "Cat A";
    } else if (catA > catB) {
      return "Cat B";
    } else {
      return "Cat C";
    }
  }
};
console.log(catAndMouse(x, y, z));
