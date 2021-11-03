import React from 'react';
import Header from '../../components/Header';
import './reserva.css';

const Reserva: React.FC = () => {

    return (
        <>
        <div>
            <div>
            <Header/>
            </div>
            <div><h1 className="t4">Minhas reservas</h1></div>
        </div>
        </>
    )
}
 
export default Reserva;