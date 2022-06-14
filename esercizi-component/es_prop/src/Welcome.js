import React from "react";
import Age from "./Age";




class Welcome extends React.Component {




    render() {
        return (
            <div>
                <p> Welcome  {this.props.name}</p>
                {((this.props.age > 18 && this.props.age < 65) && (this.props.name === "John")) && <Age age={this.props.age} />}
            </div>
        )
    }
}

Welcome.defaultProps = {
    name: "nome di default Gino",
    age: 34
}

export default Welcome;