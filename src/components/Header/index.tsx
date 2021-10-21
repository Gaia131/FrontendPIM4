import React  from 'react';
import './index.css';
import { useHistory } from 'react-router-dom';


const Header: React.FC = () => {

    let imgnome = 'https://media.discordapp.net/attachments/704458768519528532/897997999530197052/of__4_-removebg-preview_5.png?width=512&height=205'
    let imglogo = "https://media.discordapp.net/attachments/704458768519528532/897998031067181056/image_49.png"

    const history = useHistory()
    function ChamaReserva () {
        history.push('/Reserva')
    }
    function ChamaHistorico () {
        history.push('/Historico')
    }
    function ChamaPerfil () {
        history.push('/Perfil')
    }
    function ChamaInicio () {
        history.push('/')
    }
    return (
        <div className="head">

            <img id="logo" src={imglogo} alt="Logo" />
            <img id="nome" src={imgnome} alt="Nome Hotel" />

            <nav id="menu-s">
        <ul>
            <li>
                <a onClick={ChamaInicio}>Inicio</a>
            </li>
            <li>
                <a onClick={ChamaHistorico}>Historico</a>
            </li>
            <li>
                <a onClick={ChamaReserva}>Reserva</a>
            </li>
            <li>
                <a onClick={ChamaPerfil}>Perfil</a>
            </li>
        </ul>
    </nav>
        </div>

    );
}
export default Header;