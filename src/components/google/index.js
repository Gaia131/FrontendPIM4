/*import React, { useState } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';

export default function Login(){

    const clientId = "";
    const [showLoginButton, setShowLoginButton] = useState(true);
    const [showLogoutButton, setShowLogoutButton] = useState(false);


const onLoginSucces = (res) => {
    console.log('Login efetuado com sucesso:', res.profileObj);
    setShowLoginButton(false);
    setShowLogoutButton(true);
}

const onFailureSuccess = (res) => {
    console.log('Login falhou:', res);
}

const onSignoutSuccess = () => {
    alert("Você se deslogou com sucesso");
    setShowLoginButton(true);
    setShowLogoutButton(false);
}

return(
    <div>
        {showLoginButton ?
            <GoogleLogin
                clientId={clientID}
                buttonText="Login"
                onSuccess={onLoginSucces}
                onFailure={onFailureSuccess}
                cookiePolicy={'single_host_origin'}
            /> : null
        }

        {showLogoutButton ?
        <GoogleLogout
            clientId={clientID}
            buttonText="Logout"
            onLogoutSuccess={onSignoutSuccess}
        /> : null
        }
    </div>
    )
}*/