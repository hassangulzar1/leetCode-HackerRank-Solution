// let grade = [4, 43, 66, 39, 33]; // outPut 75 67 40 33
// let gradingStudents = (grades) => {
//   let array = [];
//   for (let i = 0; i < grades[0] + 1; i++) {
//     if (grades[i] < 38) {
//       array.push(grades[i]);
//     }
//     if (grades[i] >= 38) {
//       let grade = grades[i] + 2;
//       let string = grade.toString().at(1);
//       if (string == "0" || string == "5" || string == "1" || string == "6") {
//         array.push(grade);
//       } else {
//         array.push(grades[i]);
//       }
//     }
//   }
//   for (let i = 0; i < array.length; i++) {
//     let toString = array[i].toString();
//     if (toString.at(1) == "1") {
//       let number = Number(toString);
//       let index = array.indexOf(number);
//       array[index] = number - 1;
//     }
//     if (toString.at(1) == "6") {
//       let number = Number(toString);
//       let index = array.indexOf(number);
//       array[index] = number - 1;
//     }
//   }
//   return array;
// };
//
// console.log(gradingStudents(grade));

let grade = [4, 43, 65, 39, 33];
let gradingStudents = (grades) => {
  let arr = [];
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] < 38) {
      arr.push(grades[i]);
    }
    if (grades[i] >= 38) {
      let toString = grades[i].toString();
      if (toString.at(1) == "3" || toString.at(1) == "8") {
        let number = Number(toString);
        arr.push(number + 2);
      } else if (toString.at(1) == "4" || toString.at(1) == "9") {
        let number = Number(toString);
        arr.push(number + 1);
      } else {
        let number = Number(toString);
        arr.push(number);
      }
    }
  }
  return arr;
};
console.log(gradingStudents(grade));
