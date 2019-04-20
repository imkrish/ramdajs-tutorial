import * as R from "ramda";

const product = {
  name: "widget",
  price: 10,
  avgRating: 4.5,
  shippingWeight: "2 lbs",
  shippingCost: 2,
  shippingMethod: "UPS"
};

// const getProps = R.pickAll(["name", "price", "category"]);
// const isNumber = val => !isNaN(Number(val));
// const getProps = R.pickBy(isNumber);
// const getProps = R.pickBy((val, key) => R.contains("shipping", key as any));
// const getProps = R.omit(["name"]);
const getProps = R.pickBy((val, key) =>
  R.compose(
    R.not,
    R.contains("shipping")
  )(key as string)
);
const result = getProps(product);

console.log(result);
