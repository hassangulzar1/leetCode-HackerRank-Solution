let address = "1.1.1.1";
let defangIPaddr = (address) => {
  return address.replaceAll(".", "[.]");
};
console.log(defangIPaddr(address));
