let year = 1918;
let dayOfProgrammer = (year) => {
  let month = 1;
  let sum = 0;
  for (let i = 1; i <= 8; i++) {
    let date = new Date(year, month, 0);
    sum += date.getDate();
    month++;
  }
  let date = new Date(year, 9, 256 - sum);
  let add = 0;
  let sub = 0;
  if (year === 1918) {
    add = 13;
  }
  if (year <= 1900 && year >= 1700 && year % 100 === 0) {
    sub = 1;
  }
  return `${(date.getDate() + add - sub).toString().padStart(2, "0")}.${date
    .getMonth()
    .toString()
    .padStart(2, "0")}.${date.getFullYear()}`;
};
console.log(dayOfProgrammer(year));
