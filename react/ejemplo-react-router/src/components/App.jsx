import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Inicio from './Inicio';
import NuevoUsuario from './NuevoUsuario';
import Header from './Header';
import InfoUsuario from './InfoUsuario';
import Usuarios from './Usuarios';
import CmpHook from './CmpHook';

const Error = () => <h1>Error 404: Page not found!</h1>

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <CmpHook />
                <hr/>
                <Switch>
                    <Route path="/" exact component={Inicio} />
                    <Route path="/nuevo-usuario" component={NuevoUsuario} />
                    <Route path="/usuarios" component={Usuarios} />
                    <Route path="*" component={Error} />
                </Switch>
            </div>
        )
    }
}

export default App;