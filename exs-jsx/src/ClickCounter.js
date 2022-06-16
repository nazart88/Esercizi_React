import react from 'react';
class ClickCounter extends react.Component {

    state = {

        name: ''
    }

  buttonIncrement = (event) => {
        console.log(event)
        this.setState((state) => {
            return { name: event.target.innerText }
        })

    }

    render() {
        return (
            <div>
                <h1> Last Button: {this.state.name}</h1>
                <button name="click" onClick={this.buttonIncrement}>Click</button>
                <button name="oneMoreTime" onClick={this.buttonIncrement}>OneMoreTime</button>
                <button name="pleaseDonTStop" onClick={this.buttonIncrement}>please don't stop</button>

            </div>
        )
    }
}
export default ClickCounter