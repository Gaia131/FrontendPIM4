import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header';
import './perfil.css';

const Perfil: React.FC = () => {

    const history = useHistory()
    function ChamaCadastro () {
        history.push('/Cadastro')
    }

    return (
        <>
        <div>
            <div>
            <Header/>
            </div>
            <div><h1 className="t3">Meu perfil</h1></div>
            <button type="button" className ="btn btn-primary" onClick={ChamaCadastro}>Cadastrar</button>
        </div>
        </>
    )
}
 
export default Perfil;