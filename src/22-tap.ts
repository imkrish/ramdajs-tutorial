import * as R from "ramda";
const log = R.tap(console.log);

const queryString = "?page=2&pageSize=10&total=203";
const parseQs: any = R.compose(
  R.fromPairs,
  log,
  R.map(R.split("=")),
  R.split("&"),
  log,
  R.tail
);
const result = parseQs(queryString);
console.log(result);
