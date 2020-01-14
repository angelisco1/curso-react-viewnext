import React from 'react';
import Introduccion from './introduccion/Introduccion';
import Listas from './listas/Listas';

class App extends React.Component {
    render() {
        return (
            <div>
                {/* <Introduccion /> */}
                <Listas />
            </div>
        )
    }
}

export default App;