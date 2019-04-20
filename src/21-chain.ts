import * as R from "ramda";

const product = {
  name: "Sample Data",
  sizes: [
    {
      name: "L",
      colors: [
        {
          name: "Red"
        },
        {
          name: "Blue"
        }
      ]
    },
    {
      name: "M",
      colors: [
        {
          name: "Green"
        },
        {
          name: "Yellow"
        }
      ]
    },
    {
      name: "S",
      colors: [
        {
          name: "Orange"
        },
        {
          name: "Purple"
        },
        {
          name: "Blue"
        }
      ]
    }
  ]
};

const getSizes = R.prop("sizes");
const getColors = R.chain(R.prop("colors"));
const getColorsNames = R.pluck("name");

const result = R.compose(
  R.uniq,
  getColorsNames as any,
  getColors as any,
  getSizes as any
) as any;
console.log(result(product));
