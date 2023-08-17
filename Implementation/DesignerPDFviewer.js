let h = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26,
];
let word = "abc";

let designerPdfViewer = (h, word) => {
  let letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let indexs = [];
  for (let i = 0; i < word.length; i++) {
    indexs.push(letters.findIndex((e) => e == word[i]));
  }
  let elements = [];
  for (let i = 0; i < indexs.length; i++) {
    elements.push(h[indexs[i]]);
  }
  return Math.max(...elements) * word.length;
};
console.log(designerPdfViewer(h, word));
