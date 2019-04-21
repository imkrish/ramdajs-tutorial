import * as R from "ramda";

const product = {
  name: "cog",
  price: 100,
  details: {
    shippingInfo: {
      weight: 7,
      method: "ups"
    }
  }
};

// const adjustProduct = p => {
//   return R.merge(p, { name: R.toUpper(p.name) });
// };
const adjustProduct = R.evolve({
  name: R.toUpper,
  price: R.multiply(2),
  details: {
    shippingInfo: {
      weight: R.inc
    }
  }
});
const result = adjustProduct(product);

console.log(result);
console.log(product);
