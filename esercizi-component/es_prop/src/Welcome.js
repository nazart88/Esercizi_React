import React from "react";
import Age from "./Age";




class Welcome extends React.Component {




    render() {
        return (
            <div>
                <p> Welcome  {this.props.name}</p>
                <p><Age age={this.props.age} /></p>
            </div>
        )
    }
}

Welcome.defaultProps = {
    name: "nome di default Gino",
    age: 34
}

export default Welcome;