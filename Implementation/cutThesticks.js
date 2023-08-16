let arr = [4, 5, 10, 8, 11];
let cutTheSticks = (arr) => {
  let cuttingSticks = [];
  let myArr = arr;

  for (let i = 0; i < arr.length; i++) {
    cuttingSticks.push(myArr.length);
    let min = Math.min(...myArr);
    myArr = myArr.map((e) => e - min);
    let j = myArr.length;
    while (j--) {
      if (myArr[j] === 0) {
        myArr.splice(j, 1);
      }
    }
  }

  return cuttingSticks.includes(0)
    ? cuttingSticks.slice(0, cuttingSticks.indexOf(0))
    : cuttingSticks;
};
console.log(cutTheSticks(arr));
