let command = "G()(al)";
let interpret = (command) => {
  let reaple = command.replaceAll("(al)", "al");
  return reaple.replaceAll("()", "o");
};
console.log(interpret(command));
