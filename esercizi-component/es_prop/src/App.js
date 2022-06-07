
import React from "react";
import Welcome from "./Welcome";
const Name = <strong>Giovanni</strong>
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