import React from 'react';
import Header from '../../components/Header';
import './historico.css';

const Historico: React.FC = () => {
    return (
        <>
        <div>
            <div>
            <Header/>
            </div>
            <div><h1 className="t2">Histórico de reservas</h1></div>
        </div>
        </>
    )
}
 
export default Historico;