import React from "react";

class CounterDisplay extends React.Component {

    render() {
        return <h1>Clock: {this.props.clock}</h1>
    }
}

export default CounterDisplay 