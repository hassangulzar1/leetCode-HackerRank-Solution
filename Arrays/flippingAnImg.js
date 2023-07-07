let image = [
  [1, 1, 0],
  [1, 0, 1],
  [0, 0, 0],
];

let flipAndInvertImage = (image) => {
  let reverse = [];
  for (let i = 0; i < image.length; i++) {
    reverse.push(image[i].reverse());
  }
  for (let i = 0; i < reverse.length; i++) {
    reverse.forEach((element) => {
      if (element[i] === 0) {
        element[i] = 1;
      } else {
        element[i] = 0;
      }
    });
  }
  return reverse;
};
console.log(flipAndInvertImage(image));
