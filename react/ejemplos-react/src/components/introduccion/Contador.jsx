import React, { Component } from 'react'

class Contador extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     cuenta: 4
        // }
        // this.restar = this.restar.bind(this);
        // this.restar2 = this.restar2.bind(this);
        // this.sumar = this.sumar.bind(this);
    }

    // restar(event) {
    //     console.log(event.target.dataset)
    //     console.log('Resta 1 a la cuenta');
    //     // this.state.cuenta = this.state.cuenta - 1
    //     this.setState({
    //         cuenta: this.state.cuenta - 1
    //     });
    // }

    // sumar() {
    //     console.log('Suma 1 a la cuenta');
    //     this.setState({
    //         cuenta: this.state.cuenta + 1
    //     })
    // }

    // calcularCuenta(num) {
    //     this.setState({
    //         cuenta: this.state.cuenta + num
    //     })
    // }
    
    // restar2(num) {
    //     return () => {
    //         this.setState({
    //             cuenta: this.state.cuenta - num
    //         });
    //     }
    // }

    render() {
        console.log(this)
        return (
            <div>
                {/* <button type="button" data-num="-1" onClick={this.restar}>-</button>
                <button type="button" onClick={this.restar2(2)}>-</button>
                <button type="button" onClick={() => { this.calcularCuenta(-1) }}>-</button> */}
                <button type="button" onClick={this.props.onRestar}>-</button>
                <span>Cuenta: {this.props.cuenta}</span>
                <button type="button" onClick={this.props.onSumar}>+</button>
                {/* <button type="button" onClick={() => { this.sumar() }}>+</button>
                <button type="button" onClick={() => { this.calcularCuenta(1) }}>+</button> */}
            </div>
        )
    }
}

export default Contador
