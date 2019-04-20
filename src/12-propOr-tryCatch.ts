import * as R from "ramda";

const person = {
  name: "Sally Jones"
};

// const getName = R.prop("name");
const getName = R.propOr("Default", "name");
const getUpperName = R.pipe(
  getName,
  R.tryCatch(R.toUpper, R.always("DEFAULT"))
);
const result = getUpperName(undefined as any);
console.log(result);
