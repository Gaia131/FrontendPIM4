import React from 'react';
import Header from '../../components/Header';
import './home.css'
import ImageSlider from '../../components/Galeria/ImageSlider';
import { SliderData } from '../../components/Galeria/SliderData';





const Home: React.FC = () => {

    return (
        <>
        <div>
            <div>
            <Header/>
            </div>
            <div><h1 className="titulo">Melhores quartos da temporada</h1></div>
            <br/>
            <div><ImageSlider slides={SliderData} /></div>
            <br/>
            <br/>
        </div>
        </>
    )
}
 
export default Home;