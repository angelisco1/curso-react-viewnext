import React, { Component } from 'react'
import ListaFrases from './ListaFrases'

export class Http extends Component {
    constructor(props) {
        super(props);
        this.state = {
            frases: [],
            nombre: '',
            apellido: '',
            numFrases: 3
        }
    }

    componentDidMount() {
        fetch('http://api.icndb.com/jokes/random/' + this.state.numFrases)
            .then(resp => {
                // console.log(resp);
                return resp.json();
            })
            .then(datos => {
                // console.log(datos)
                this.setState({
                    frases: datos.value
                })
            })
    }

    render() {
        // const frases = [{id: 1, joke: 'Joke 1'}]
        return (
            <div>
                <ListaFrases frases={this.state.frases} />
            </div>
        )
    }
}

export default Http
