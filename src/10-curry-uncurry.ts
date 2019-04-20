import * as R from "ramda";

// const add = (a, b) => a + b;
// const add = a => b => a + b;
// const inc = add(1);
const add = (a: number, b: number) => a + b;
const mult = (a: number) => (b: number) => a * b;
const multiply = R.uncurryN<number, number, number>(2, R.multiply);
const cAdd = R.curry(add);

const result = multiply(2, 4);
console.log(result);
