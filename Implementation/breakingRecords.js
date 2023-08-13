let scores = [10, 5, 20, 20, 4, 5, 2, 25, 1];
let breakingRecords = (scores) => {
  let bestRecord = 0;
  let worstRecord = 0;

  let higestScore = scores[0];
  let lowestScore = scores[0];
  for (let i = 0; i < scores.length; i++) {
    let value = Number(scores[i]);
    if (value > higestScore) {
      bestRecord++;
      higestScore = value;
    } else if (value < lowestScore) {
      worstRecord++;
      lowestScore = value;
    }
  }
  return [bestRecord, worstRecord];
};
console.log(breakingRecords(scores));
