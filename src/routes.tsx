import React from 'react';
import {Switch, Route} from 'react-router-dom'
 
import Home from './pages/Home';
import Reserva from './pages/Reserva';
import Historico from './pages/Historico';
import Perfil from './pages/Perfil';
import Pagamento from './pages/Pagamento';
import Finalizar from './pages/Finalizar';
import Cadastro from './pages/Cadastro';


 
const Routes: React.FC = () => {
    return(
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Reserva" exact component={Reserva} />
            <Route path="/Historico" exact component={Historico}/>
            <Route path="/Perfil" exact component={Perfil} />
            <Route path="/Pagamento" exact component={Pagamento} />
            <Route path="/Finalizar" exact component={Finalizar} />
            <Route path="/Cadastro" exact component={Cadastro} />
        </Switch>
    );
}
 
export default Routes;
