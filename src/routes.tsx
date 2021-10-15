import React from 'react';
import {Switch, Route} from 'react-router-dom'
 
import Home from './pages/Home';
import Cadastro from './pages/Cadastro';
import Login from './pages/Login';
 
const Routes: React.FC = () => {
    return(
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Cadastro" exact component={Cadastro} />
            <Route path="/Login" exact component={Login}/>
        </Switch>
    );
}
 
export default Routes;
