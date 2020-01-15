import React, { Component } from 'react'
import Color from './Color';

export class CicloDeVida extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cuenta: 1,
            mostrarColor: true
        }
        this.incrementar = this.incrementar.bind(this)
        this.decrementar = this.decrementar.bind(this)
    }

    incrementar() {
        this.setState({
            cuenta: this.state.cuenta + 1
        })
    }

    decrementar() {
        this.setState({
            cuenta: this.state.cuenta - 1
        })
    }

    render() {
        return (
            <div>
                <button type="button" onClick={this.decrementar}>-</button>
                <span>Cuenta: {this.state.cuenta}</span>
                <button type="button" onClick={this.incrementar}>+</button>
                <button
                    type="button"
                    onClick={
                        () => {
                            this.setState({
                                mostrarColor: !this.state.mostrarColor
                            })
                        }
                    }>Mostrar color</button>
                { this.state.mostrarColor ? <Color cuenta={this.state.cuenta} /> : null }
            </div>
        )
    }
}

export default CicloDeVida
