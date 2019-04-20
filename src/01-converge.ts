import * as R from "ramda";

interface Person {
  id: number;
  name: string;
}

const person: Person = {
  id: 1,
  name: "Joe"
};

const generateUrl = (id: string) => `https://${id}.png`;
const getUrlFromPerson = R.compose(
  generateUrl,
  R.propOr("default", "id")
);
// const getUpdatedPerson = person =>
//   R.assoc("avatar", getUrlFromPerson(person), person);

const getUpdatedPerson = R.converge(R.assoc("avatar"), [
  getUrlFromPerson,
  R.identity
]);

const result = getUpdatedPerson(person);
console.log(result);
