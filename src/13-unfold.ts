import * as R from "ramda";

const throughNByOne = R.curry(
  (limit: number, n: number): false | [number, number] =>
    n > limit ? false : [n, n + 1]
);

const result = R.unfold(throughNByOne(100), 3);
console.log(result);
