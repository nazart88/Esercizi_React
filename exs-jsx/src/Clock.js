import React from "react";

class Clock extends React.Component {

    state = {
        clock: 0
    }
    constructor(props) {
        super(props)

        setInterval(() => {
            this.setState((state) => {
                return { clock: state.clock + 1 }
            })
        }, 1000)
    }


    render() {
        return <h1>Clock: {this.state.clock}</h1>
    }

}

export default Clock;