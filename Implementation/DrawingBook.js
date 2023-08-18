let n = 5;
let p = 3;
let pageCount = (n, p) => {
  let EndToStart = Math.floor(n / 2);
  let StartToEnd = Math.floor(p / 2);
  let end = EndToStart - StartToEnd;
  return Math.min(StartToEnd, end);
};

console.log(pageCount(n, p));
