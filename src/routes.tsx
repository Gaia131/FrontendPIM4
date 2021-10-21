import React from 'react';
import {Switch, Route} from 'react-router-dom'
 
import Home from './pages/Home';
import Reserva from './pages/Reserva';
import Historico from './pages/Historico';
import Perfil from './pages/Perfil';
 
const Routes: React.FC = () => {
    return(
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Reserva" exact component={Reserva} />
            <Route path="/Historico" exact component={Historico}/>
            <Route path="/Perfil" exact component={Perfil} />
        </Switch>
    );
}
 
export default Routes;
