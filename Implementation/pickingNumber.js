let a = [4, 6, 5, 3, 3, 1];
let pickingNumbers = (a) => {
  a.sort((a, b) => a - b);
  let groups = [];
  for (let i = 0; i < a.length; i++) {
    let inner = [];
    let num = a[i];
    for (let j = i; j < a.length; j++) {
      let num2 = a[j];
      if (num2 - num <= 1) {
        inner.push(num2);
      }
    }
    groups.push(inner);
  }

  groups = groups.map((e) => e.length);

  groups = groups.sort((a, b) => a - b);
  return groups[groups.length - 1];
};

console.log(pickingNumbers(a));
