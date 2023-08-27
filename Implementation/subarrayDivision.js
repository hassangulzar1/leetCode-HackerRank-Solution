let s = [5, 5, 3, 2, 2, 2, 1, 2, 5, 3, 5, 5, 4, 3, 3, 5];
let d = 13;
let m = 3;
let birthday = (s, d, m) => {
  if (s.length === m && s[0] === d) {
    return 1;
  }

  let setCounts = 0;
  for (let i = 0; i < 100; i++) {
    let arrS = s;
    let sumArr = arrS.slice(0, m);
    if (sumArr.length < m) {
      break;
    }
    let SumCheck = sumArr.reduce((prev, curr) => prev + curr);
    if (SumCheck === d) {
      setCounts++;
    } else {
      setCounts += 0;
    }
    arrS.shift();
  }

  return setCounts;
};
console.log(birthday(s, d, m));
