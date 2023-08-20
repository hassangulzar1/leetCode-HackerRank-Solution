let x1 = 4523;
let v1 = 8092;
let x2 = 9419;
let v2 = 8076;

let kanjroo = (x1, v1, x2, v2) => {
  let kanjroo1 = x1;
  let kanjroo2 = x2;
  let yes = false;
  let no = false;
  for (let i = 0; i < 10000; i++) {
    kanjroo1 += v1;
    kanjroo2 += v2;
    if (kanjroo1 === kanjroo2) {
      yes = true;
      break;
    }
    if (kanjroo2 > kanjroo1 || kanjroo1 > kanjroo2) {
      no = true;
    }
  }
  if (yes) {
    return "YES";
  }
  if (no) {
    return "NO";
  }
};
console.log(kanjroo(x1, v1, x2, v2));
