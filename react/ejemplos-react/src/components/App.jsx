import React from 'react';
import Introduccion from './introduccion/Introduccion';
import Listas from './listas/Listas';
import Formulario from './formulario/Formulario';
import CicloDeVida from './ciclo-de-vida/CicloDeVida';
import Http from './http/Http';

class App extends React.Component {
    render() {
        return (
            <div>
                {/* <Introduccion /> */}
                {/* <Listas /> */}
                {/* <Formulario /> */}
                {/* <CicloDeVida /> */}
                <Http />
            </div>
        )
    }
}

export default App;