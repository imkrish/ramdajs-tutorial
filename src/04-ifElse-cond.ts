import * as R from "ramda";

interface Product {
  name: string;
  price: number;
  category: string;
}

const products: Product[] = [
  { name: "Jeans", price: 80, category: "clothes" },
  { name: "Cards", price: 5, category: "games" },
  { name: "iPhone", price: 649, category: "electronics" },
  { name: "Freakonomics", price: 30, category: "books" }
];

const priceLens = R.lensProp<Product, number>("price");
const applyDiscount = R.curry(
  (percent: number, amount: number) => amount - amount * (percent / 100)
);
// const adjustPrice = R.over(priceLens, applyDiscount(50));

// const adjustPrice = R.ifElse(
//   R.propEq("category", "clothes"),
//   R.over(priceLens, applyDiscount(50)),
//   R.identity
// );

// const adjustPrice = R.when(  // R.unless
//   R.propEq("category", "clothes"),
//   R.over(priceLens, applyDiscount(50))
// );

const adjustPrice = R.cond<number, number>([
  [R.propEq("category", "clothes"), R.over(priceLens, applyDiscount(50))],
  [R.propEq("category", "electronics"), R.over(priceLens, applyDiscount(10))],
  [R.propEq("category", "books"), R.over(priceLens, applyDiscount(100))],
  [R.T, R.identity]
]);

const result = R.map(adjustPrice, products);

console.log(result);
