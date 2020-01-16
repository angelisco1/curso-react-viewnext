import React, { Component } from 'react'
import ListaFrases from './ListaFrases'
import Formulario from './Formulario';

export class Http extends Component {
    constructor(props) {
        super(props);
        this.state = {
            frases: [],
            nombre: '',
            apellido: '',
            numFrases: 3
        }
        this.changeFormState = this.changeFormState.bind(this);
        this.getJokes = this.getJokes.bind(this);
    }

    componentDidMount() {
        this.getJokes();
    }

    changeFormState(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    getJokes() {
        const {nombre, apellido, numFrases} = this.state;
        let url = 'http://api.icndb.com/jokes/random/' + numFrases;
        if (nombre && apellido) {
            url += `?firstName=${nombre}&lastName=${apellido}`;
        }
        fetch(url)
            .then(resp => {
                return resp.json();
            })
            .then(datos => {
                this.setState({
                    frases: datos.value
                })
            })
    }

    render() {
        // const frases = [{id: 1, joke: 'Joke 1'}]
        const {nombre, apellido, frases, numFrases} = this.state;
        return (
            <div>
                <Formulario
                    nombre={nombre}
                    apellido={apellido}
                    numFrases={numFrases}
                    handleChangeInput={this.changeFormState}
                    handleSubmit={this.getJokes} />
                <ListaFrases frases={frases} />
            </div>
        )
    }
}

export default Http
