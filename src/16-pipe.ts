import * as R from "ramda";

const qsObj = {
  page: "2",
  pageSize: "10",
  total: "203"
};

const fn = R.pipe(
  R.toPairs,
  R.map(R.join("=")),
  R.join("&"),
  R.concat("?")
);
const result = fn(qsObj);

console.log(result);
