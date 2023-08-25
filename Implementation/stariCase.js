let n = 6;
let stairCase = (n) => {
  let stariCases = [];
  for (let i = 0; i < n; i++) {
    stariCases.push("#");
  }
  let joinCase = stariCases.join("");

  let spaces = n;
  let hashTag = 0;
  let slice = 0;
  for (let i = 1; i <= n; i++) {
    spaces--;
    hashTag++;
    slice++;
    let newjoin = joinCase.slice(slice);
    let replaces = newjoin.replaceAll("#", " ");
    let hashes = joinCase.substring(n - hashTag);
    console.log(replaces + hashes);
  }
};
stairCase(n);
