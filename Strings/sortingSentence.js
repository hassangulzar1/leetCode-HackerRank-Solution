let string = "is2 sentence4 This1 a3";
let sortSentence = (s) => {
  let split = s.split(" ");
  let arr = [];
  for (let i = 1; i <= split.length; i++) {
    split.map((e) => {
      if (e.includes(i)) {
        arr.push(e.slice(0, e.length - 1));
      }
    });
  }
  return arr.join(" ");
};
console.log(sortSentence(string));
