import react from "react";
import ReactDom from "react-dom";

const hello = (
  <div>
    <h1> Hello World </h1>{" "}
  </div>
);

class App extends react.Component {
  render() {
    return hello;
  }
}

ReactDom.render(<App />, document.getElementById("root"));
