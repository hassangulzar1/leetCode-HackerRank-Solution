let a = [1, 2, 3];
let b = [4, 5, 6];
function compareTriplets(a, b) {
  let alice = 0;
  let bob = 0;
  if (a[0] > b[0]) {
    alice++;
  } else if (a[0] == b[0]) {
    alice += 0;
    bob += 0;
  } else {
    bob++;
  }
  if (a[1] > b[1]) {
    alice++;
  } else if (a[1] == b[1]) {
    alice += 0;
    bob += 0;
  } else {
    bob++;
  }
  if (a[2] > b[2]) {
    alice++;
  } else if (a[2] == b[2]) {
    alice += 0;
    bob += 0;
  } else {
    bob++;
  }
  return [alice, bob];
}
console.log(compareTriplets(a, b));
