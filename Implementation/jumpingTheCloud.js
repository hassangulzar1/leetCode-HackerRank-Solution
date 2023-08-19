let c = [1, 1, 1, 0, 1, 1, 0, 0, 0, 0];
let k = 3;
let jumpingOnClouds = (c, k) => {
  let e = 100;
  let i = 0;
  do {
    e--;
    i = (i + k) % c.length;
    console.log(i);
    e = c[i] == 1 ? (e -= 2) : e;
  } while (i != 0);

  return e;
};
console.log(jumpingOnClouds(c, k));
