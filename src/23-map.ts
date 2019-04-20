import * as R from "ramda";

// const map = fn => arr => arr.map(fn);
const double = num => num * 2;

const mapDouble = R.map(double);
console.log(mapDouble([1, 2, 3]));
