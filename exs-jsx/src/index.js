import react from "react";
import ReactDom from "react-dom";

function Sum(number, number2) {
  return <h1> "il risultato è" {number + number2} </h1>;
}

const number = 5
const number2 = 6


ReactDom.render(Sum(number, number2), document.getElementById("root"));