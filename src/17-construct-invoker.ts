import * as R from "ramda";

const animate = R.invoker(1, "animate");
const slideUp = R.invoker(1, "slideUp");
const jq = R.constructN(1, $);

const animateDiv = R.compose(
  slideUp,
  animate({ left: "10px" }),
  animate({ left: "250px" }),
  jq
);

const div = $("#sample");
animateDiv(div);
