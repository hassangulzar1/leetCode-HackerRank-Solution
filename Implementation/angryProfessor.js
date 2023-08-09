let k = 2;
let a = [0, -1, 2, 1];
let angryProfessor = (k, a) => {
  let presentStudents = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] <= 0) {
      presentStudents.push(a[i]);
    }
  }
  console.log(presentStudents);
  return presentStudents.length >= k ? "NO" : "YES";
};
console.log(angryProfessor(k, a));
