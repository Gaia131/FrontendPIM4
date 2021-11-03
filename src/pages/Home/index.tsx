import React from 'react';
import Header from '../../components/Header';
import './home.css'
import ImageSlider from '../../components/Galeria/ImageSlider';
import { SliderData } from '../../components/Galeria/SliderData';
import Check from '../../components/check'


const Home: React.FC = () => {

    return (
        <>
        <div>
            <div>
            <Header/>
            </div>
            <div className="t1"><h1>Melhores quartos da temporada</h1></div>
            <br/>
            <div><ImageSlider slides={SliderData} /></div>
            <br/>
            <div><Check/></div>
            <br/>
            <br/>
        </div>
        </>
    )
}
 
export default Home;