import React from 'react';
import {Switch, Route} from 'react-router-dom'
 
import Home from './pages/Home';
import Perfil from './pages/Perfil';
import Pagamento from './pages/Pagamento';
import Cadastro from './pages/Cadastro';


 
const Routes: React.FC = () => {
    return(
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Perfil" exact component={Perfil} />
            <Route path="/Pagamento" exact component={Pagamento} />
            <Route path="/Cadastro" exact component={Cadastro} />
        </Switch>
    );
}
 
export default Routes;
