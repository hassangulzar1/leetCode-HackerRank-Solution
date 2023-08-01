let string = "codeleet";
let indices = [4, 5, 6, 7, 0, 2, 1, 3];
let restoreString = (s, indices) => {
  let newString = "";
  for (let i = 0; i < indices.length; i++) {
    newString += s.at(indices.indexOf(i));
  }
  return newString;
};
console.log(restoreString(string, indices));
