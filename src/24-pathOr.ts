import * as R from "ramda";

const acctDept = {
  name: "Accounts Payable",
  location: "14th floor",
  personnel: {
    manager: {
      fName: "Bill",
      lName: "Lumberg",
      title: "director of stuff and things",
      salary: 75000
    }
  }
};

const itDept = {
  name: "IT",
  location: "remote",
  personnel: {}
};

const getManagerLastName = R.pathOr("EI A O", [
  "personnel",
  "manager",
  "lName"
]);
const result = getManagerLastName(itDept);

console.log(result);
