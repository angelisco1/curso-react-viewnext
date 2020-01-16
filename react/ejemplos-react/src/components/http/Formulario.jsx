import React, { Component } from 'react'

export class Formulario extends Component {
    render() {
        const {nombre, apellido, numFrases, handleChangeInput, handleSubmit} = this.props;
        return (
            <form onSubmit={
                (event) => {
                    event.preventDefault();
                    handleSubmit();
                }
            }>
                <div>
                    <label htmlFor="nombre">Nombre:</label>
                    <input type="text" id="nombre" name="nombre" value={nombre} onChange={handleChangeInput} />
                </div>
                <div>
                    <label htmlFor="apellido">Apellido:</label>
                    <input type="text" id="apellido" name="apellido" value={apellido} onChange={handleChangeInput} />
                </div>
                <div>
                    <label htmlFor="numFrases">Num Frases:</label>
                    <input type="number" id="numFrases" name="numFrases" value={numFrases} onChange={handleChangeInput} />
                </div>
                <button type="submit">Get Jokes</button>
            </form>
        )
    }
}

export default Formulario
