
import React from "react";
import Welcome from "./Welcome";
const Name = "Giovanni"
class App extends React.Component {

    render() {

        return (
            <div>
                <Welcome name={Name} age="22"/>
            </div>
        )
    }
}



export default App