import react from "react";
import ReactDom from "react-dom";

function Name(props) {
  return <h1> "Hello", {props.nome} </h1>;
}

const instername = <Name nome="Nazareno" />;

ReactDom.render(instername, document.getElementById("root"));
