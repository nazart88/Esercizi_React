import React from "react"

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
        return <h1>Clock: {this.state.clock}</h1>
    }
	

}

Clock.defaultProps = {
    interval: 1000,
    count: 1,
    clock: 1,
}

export default Clock;