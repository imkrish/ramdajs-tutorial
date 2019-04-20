import * as R from "ramda";

const countries = [
  { cc: "GB", flag: "🇬🇧GBBB" },
  { cc: "US", flag: "🇺🇸USSS" },
  { cc: "CA", flag: "🇨🇦CAAA" },
  { cc: "FR", flag: "🇫🇷FRRR" }
];

// const getCountry = (cc, list) => R.find(R.propEq("cc", cc), list);
const getCountry = R.useWith(R.find, [R.propEq("cc"), R.identity]);
const result = getCountry("US", countries);
console.log(result);
