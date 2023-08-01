let moves = "LL";
let judgeCircle = (moves) => {
  let robot = [0, 0];
  for (let i = 0; i < moves.length; i++) {
    if (moves[i] === "U") {
      robot[1] += 1;
    } else if (moves[i] === "D") {
      robot[1] -= 1;
    } else if (moves[i] === "L") {
      robot[0] += 1;
    } else if (moves[i] === "R") {
      robot[0] -= 1;
    }
  }
  if (robot[0] === 0 && robot[1] === 0) {
    return true;
  } else {
    return false;
  }
};
console.log(judgeCircle(moves));
