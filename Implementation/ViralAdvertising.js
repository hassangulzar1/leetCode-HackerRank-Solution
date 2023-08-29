let n = 5;
let viralAdvertising = (n) => {
  let likes = 0;
  let shared = 5;
  for (let i = 0; i < n; i++) {
    let ad = Math.floor(shared / 2);
    let liked = ad;
    likes += liked;
    shared = ad * 3;
  }
  return likes;
};
console.log(viralAdvertising(n));
