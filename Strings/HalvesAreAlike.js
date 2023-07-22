let s = "book";
let halvesAreAlike = (s) => {
  let slice1 = s.slice(0, s.length / 2);
  let slice2 = s.slice(slice1.length, s.length);
  let vovels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let countA = 0;
  let countB = 0;
  for (let i = 0; i < vovels.length; i++) {
    for (let ia = 0; ia < slice1.length; ia++) {
      if (slice1[ia] == vovels[i]) countA++;
    }
    for (let ib = 0; ib < slice2.length; ib++) {
      if (slice2[ib] == vovels[i]) countB++;
    }
  }
  return countA == countB;
};
console.log(halvesAreAlike(s));
