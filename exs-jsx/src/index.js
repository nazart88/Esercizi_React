import react from "react";
import ReactDom from "react-dom";

const hello = <h1> Hello World </h1>;

class Hello extends react.Component{render(){return hello}};

ReactDom.render(<Hello/>, document.getElementById("root"))

