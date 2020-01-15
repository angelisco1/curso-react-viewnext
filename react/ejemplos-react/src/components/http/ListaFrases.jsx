import React, { Component } from 'react'
import Frase from './Frase'

export class ListaFrases extends Component {
    render() {
        const componentesFrases = this.props.frases.map(frase => {
            return <Frase key={frase.id} joke={frase.joke} />
        })

        return (
            <div>
                <h2>Frases</h2>
                {componentesFrases}
            </div>
        )
    }
}

export default ListaFrases
