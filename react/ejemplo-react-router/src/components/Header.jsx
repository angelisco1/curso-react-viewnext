import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class Header extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/nuevo-usuario">Nuevo usuario</Link></li>
                    <li><Link to="/usuarios">Usuarios</Link></li>
                    {/* <li><Link to="/usuarios/8">Usuario 8</Link></li>
                    <li><Link to="/usuarios/10">Usuario 10</Link></li> */}
                </ul>
            </div>
        )
    }
}

export default Header
