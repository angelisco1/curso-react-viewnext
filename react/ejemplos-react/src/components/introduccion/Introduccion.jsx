import React from 'react';
import CmpSaludo from './CmpSaludo';
import CmpSaludoFunc from './CmpSaludoFunc';
import Contador from './Contador';

class Introduccion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            credenciales: {
                email: 'email@gmail.com',
                pass: 1234
            }
        }
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
                <Contador />
            </div>
        )
    }
}

export default Introduccion;