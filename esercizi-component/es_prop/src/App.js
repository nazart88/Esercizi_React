
import React from "react";
import Welcome from "./Welcome";
class App extends React.Component {

    render() {

        return (
            <div>
                <Welcome name="John" age={17}/>
            </div>
        )
    }
}



export default App