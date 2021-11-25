import React, {useEffect} from 'react';
import Header from '../../components/Header';
import './home.css'
import ImageSlider from '../../components/Galeria/ImageSlider';
import { SliderData } from '../../components/Galeria/SliderData';
import Check from '../../components/check'
import { Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom';
import api from '../../services/api'


const Home: React.FC = () => {

    const history = useHistory()
    function ChamaPagamento () {
        history.push('/Pagamento')
    }
    function ChamaFinalizar () {
        history.push('/Finalizar')
    }

    useEffect(() => {
        loadclientes()
    }, [])
 
    async function loadclientes() {
        const response = await api.get('/clientes')
        console.log(response);
    }

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
            <button type="button" className ="btn btn-warning" onClick={ChamaPagamento}>Selecionar</button>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
        </>
    )
}
 
export default Home;