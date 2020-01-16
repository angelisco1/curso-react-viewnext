import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom';
import InfoUsuario from './InfoUsuario';

export class Usuarios extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usuarios: [
                { id: 10, nombre: 'Tony' },
                { id: 21, nombre: 'Robb' },
                { id: 102, nombre: 'Arya' }
            ]
        }
    }

    render() {
        const listaUsuarios = this.state.usuarios.map(usuario => {
            return (<div key={usuario.id}>
                    Usuario {usuario.nombre} 
                    <Link 
                        to={`${this.props.match.path}/${usuario.id}`}
                        >Info</Link>
                </div>)
        })
        return (
            <div>
                <h1>Usuarios</h1>
                {listaUsuarios}
                <hr/>
                <Route path={this.props.match.path + "/:id"} component={InfoUsuario} />
            </div>
        )
    }
}

export default Usuarios
