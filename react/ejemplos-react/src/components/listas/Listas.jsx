import React, { Component } from 'react'
import Mascota from './Mascota';

export default class Listas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mascotas: [
                {id: 0, nombre: 'Periquito'},
                {id: 1, nombre: 'Canario'},
                {id: 2, nombre: 'Tortuga'}
            ]
        }
    }

    render() {
        const listaComponentesMascotas = this.state.mascotas.map((m, pos) => {
            return <Mascota key={m.id} mascota={m.nombre} />
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
