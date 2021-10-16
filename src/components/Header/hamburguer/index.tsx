import React, {useState} from 'react';
import './index.css';  


const Hamburguer: React.FC = () => {
    const [active, setMode] = useState(false);
    const ToggleMode = () => {
        setMode(!active);
    }
    return(
        <div>
            <div className='App'> 
                <div className={active ? 'icon iconActive': 'icon'} onClick={ToggleMode} >
                <div className= 'hamburguer hamburguerIcon'></div>
            </div>
                <div className={active ? 'menu menuOpen': 'menuClose'}>
                    <div className='list'>
                        <ul className='listItems'>
                            <li>Home</li>
                            <li>Histórico de reservas</li>
                            <li>Quartos visitados</li>
                            <li>Perfil</li>
                        </ul>
                    </div>    
                </div>
                </div>
        </div>
        );

}
 
export default Hamburguer;