import React from 'react';
import './index.css';  


const Header: React.FC = () => {
    let imgnome = 'https://media.discordapp.net/attachments/704458768519528532/897997999530197052/of__4_-removebg-preview_5.png?width=512&height=205'
    let imglogo = "https://media.discordapp.net/attachments/704458768519528532/897998031067181056/image_49.png"
    

    return(
        <div>
        <img id="logo" src={imglogo} alt="Logo"/>
        <img id="nome" src={imgnome} alt="Nome Hotel" />
        </div>
        );

}
 
export default Header;