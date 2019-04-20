import * as R from "ramda";

const getName = () => Promise.resolve("Andrew");
const getHobbies = () =>
  new Promise((res, rej) => {
    setTimeout(() => res(["kayaking", "woodworking", "screencasting"]), 500);
  });

const zipObj = R.compose(
  R.fromPairs,
  R.zip(["name", "hobbies"])
);

Promise.all([getName(), getHobbies()])
  .then(R.zipObj(["name", "hobbies"]))
  .then(console.log);
