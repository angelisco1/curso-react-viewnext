import React, { Component } from 'react'

class Contador extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cuenta: 4
        }
    }

    restar() {
        console.log('Resta 1 a la cuenta');
    }

    sumar() {
        console.log('Suma 1 a la cuenta');
    }

    render() {
        return (
            <div>
                <button type="button" onClick={this.restar}>-</button>
                <span>Cuenta: {this.state.cuenta}</span>
                <button type="button" onClick={this.sumar}>+</button>
            </div>
        )
    }
}

export default Contador
