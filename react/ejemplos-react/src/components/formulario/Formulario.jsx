import React, { Component } from 'react'

export class Formulario extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre: 'angel',
            apellido: '',
            trabajando: false
        }
        // this.handleChangeNombre = this.handleChangeNombre.bind(this);
        // this.handleChangeApellido = this.handleChangeApellido.bind(this);
        this.handleChangeField = this.handleChangeField.bind(this);
        this.crearUsuario = this.crearUsuario.bind(this);
    }

    crearUsuario(event) {
        event.preventDefault();
        console.log(JSON.stringify(this.state, null, 4))
    }

    // handleChangeNombre(event) {
    //     // console.log(event.target.value)
    //     this.setState({
    //         nombre: event.target.value
    //     })
    // }
    
    // handleChangeApellido(event) {
    //     this.setState({
    //         apellido: event.target.value
    //     })
    // }

    handleChangeField(event) {
        const iChanged = event.target;
        const value = iChanged.type === 'checkbox' ? iChanged.checked : iChanged.value;

        this.setState({
            [iChanged.id]: value
        })
    }

    render() {
        return (
            <form onSubmit={this.crearUsuario}>
                {/* <a onClick={this.crearUsuario} href="http://www.google.es">Ir a google</a> */}
                <div>
                    <label htmlFor="nombre">Nombre:</label>
                    <input 
                        type="text"
                        id="nombre"
                        value={this.state.nombre}
                        onChange={this.handleChangeField} />
                        {/* onChange={this.handleChangeNombre} /> */}
                </div>
                <div>
                    <label htmlFor="apellido">Apellido:</label>
                    <input
                        type="text"
                        id="apellido"
                        value={this.state.apellido}
                        onChange={this.handleChangeField} />
                        {/* onChange={this.handleChangeApellido} /> */}
                </div>
                <div>
                    <label htmlFor="trabajando">Estás trabajando?</label>
                    <input
                        type="checkbox"
                        id="trabajando"
                        checked={this.state.trabajando}
                        onChange={this.handleChangeField} />
                </div>
                <button type="submit">Crear</button>
            </form>
        )
    }
}

export default Formulario
