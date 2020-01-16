import React, { Component } from 'react'

export class InfoUsuario extends Component {
    render() {
        return (
            <div>
                <h3>Usuario {this.props.match.params.id}</h3>
            </div>
        )
    }
}

export default InfoUsuario
