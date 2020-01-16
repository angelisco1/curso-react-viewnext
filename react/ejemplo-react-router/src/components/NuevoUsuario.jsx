import React, { Component } from 'react'
import { withRouter } from 'react-router';

const CmpSinProps = (props) => {
    console.log(props);
    return (
        <p>Componente que no hace nada</p>
    )
}

const CmpConProps = withRouter(CmpSinProps);

export class NuevoUsuario extends Component {
    constructor(props) {
        super(props);
        this.crearUsuario = this.crearUsuario.bind(this);
    }

    crearUsuario() {
        console.log('Guardando usuario...');
        setTimeout(() => {
            console.log('Usuario guardado...');
            this.props.history.push('/');
        }, 1000);
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <h1>Nuevo usuario</h1>
                <p>Aquí habría un formulario</p>
                <button type="button" onClick={this.crearUsuario}>Crear usuario</button>
                <CmpSinProps />
                <CmpConProps />
            </div>
        )
    }
}

export default NuevoUsuario
