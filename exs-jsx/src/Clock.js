import React from "react"
import CounterDisplay from "./CounterDisplay";

class Clock extends React.Component {

    state = {
        clock: this.props.clock
    }
    constructor(props) {
        super(props)

        setInterval(() => {
            this.setState((state) => {
                return { clock: state.clock + this.props.count }
            })
        }, this.props.interval)
    }

    render() {
        return <CounterDisplay clock={this.state.clock} />
    }
	

}

Clock.defaultProps = {
    interval: 1000,
    count: 1,
    clock: 1,
}

export default Clock;