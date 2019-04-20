import * as R from "ramda";

const teams = [
  { name: "Lions", score: 5 },
  { name: "Tigers", score: 4 },
  { name: "Bears", score: 6 },
  { name: "Monkeys", score: 2 }
];

const sortByScoreDesc = R.sortWith([R.descend(R.prop("score"))]);
const getName = R.prop("name");
const getTopName = R.pipe(
  sortByScoreDesc,
  R.head,
  getName
);

const result = getTopName(teams);
console.log(result);
