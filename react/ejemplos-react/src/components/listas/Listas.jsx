import React, { Component } from 'react'
import Mascota from './Mascota';

export default class Listas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mascotas: [
                'Periquito',
                'Canario',
                'Tortuga'
            ]
        }
    }

    render() {
        const listaComponentesMascotas = this.state.mascotas.map((m, pos) => {
            return <Mascota key={pos} mascota={m} />
        })
        // console.log(listaComponentesMascotas)
        return (
            <div>
                <h1>Listas</h1>
                {listaComponentesMascotas}
            </div>
        )
    }
}
