import React from "react";
import ReactDom from "react-dom";
import { Hello } from "./Message.js";




const Day = (
  <div>
    <p> What a beautiful day </p>
    <Hello/>
    
  </div>
);

class App extends React.Component {
  render() {
    return Day;
  }
}



ReactDom.render(<App />, document.getElementById("root"));
