import * as R from "ramda";

const person = {
  firstName: "fred",
  lastName: "Flintstone"
};

// const fLens = R.lens(R.prop("firstName"), R.assoc("firstName"));
const fLens = R.lensProp("firstName");

// const firstName = R.view(fLens, person);
// const upperName = R.toUpper(firstName)
// const result = R.set(fLens, upperName, person)

const result = R.over(fLens, R.toUpper, person);

console.log(result);
console.log(person);
