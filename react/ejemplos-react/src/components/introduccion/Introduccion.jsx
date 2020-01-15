import React from 'react';
import CmpSaludo from './CmpSaludo';
import CmpSaludoFunc from './CmpSaludoFunc';
import Contador from './Contador';
import Cuenta from './Cuenta';

class Introduccion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            credenciales: {
                email: 'email@gmail.com',
                pass: 1234
            },
            cuenta: 0
        }
        this.restar = this.restar.bind(this);
        this.sumar = this.sumar.bind(this);
    }

    sumar() {
        this.setState({
            cuenta: this.state.cuenta + 1
        })
    }

    restar() {
        this.setState({
            cuenta: this.state.cuenta - 1
        })
        // console.log('Se resta')
    }

    render() {
        // const credenciales = {
        //     email: 'email@gmail.com',
        //     pass: 1234
        // }
        return (
            <div>
                <CmpSaludo credenciales={this.state.credenciales} />
                <CmpSaludo nombre="Sara" />
                <CmpSaludoFunc nombre="Charly" />
                <Contador 
                    cuenta={this.state.cuenta} 
                    onRestar={this.restar} 
                    onSumar={this.sumar} />
                <Cuenta cuenta={this.state.cuenta} />
            </div>
        )
    }
}

export default Introduccion;