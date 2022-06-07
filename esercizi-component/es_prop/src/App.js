
import React from "react";
import Welcome from "./Welcome";
const Name = "Giovanni"
class App extends React.Component {

    render() {

        return (
            <div>
                <Welcome name={Name}/>
            </div>
        )
    }
}



export default App