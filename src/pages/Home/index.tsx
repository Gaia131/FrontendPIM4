import React from 'react';
import Header from '../../components/Header';
import './home.css'


const Home: React.FC = () => {

    return (
        <>
        <div>
            <div>
            <Header/>
            <br/>
            <br/>
            <br/>
            <br/>
            </div>
            <div><h1 className="titulo">Melhores quartos da temporada</h1></div>
        </div>
        </>
    )
}
 
export default Home;