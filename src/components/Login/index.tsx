import React from 'react';
import { useHistory } from 'react-router-dom';
import './login.css'


const Login: React.FC = () => {

    const history = useHistory()
    function ChamaCadastro () {
        history.push('/Cadastro')
    }

    return(
        <>
            <div className="sidenav">
                    <div className="login-main-text">
                        <h2>Bem vindo!</h2>
                        <p>
                        
                        Somos o Hotel Mar&Sol, trabalhamos desde 1998
                        para fornecer aos nossos cliente qualidade, conforto,
                        segurança e respeito.
                        <br/>
                        <br/>
                        Agradecemos a preferência!
                        </p>
                    </div>
                </div>
                <div className="main">
                    <div className="col-md-6 col-sm-12">
                        <div className="login-form">
                        <form>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="text" className="form-control" placeholder="User Name"/>
                            </div>
                            <div className="form-group">
                                <label>Senha</label>
                                <input type="password" className="form-control" placeholder="Password"/>
                            </div>
                            <button type="button" className ="btn btn-primary">Entrar</button>
                            <button type="button" className ="btn btn-warning" onClick={ChamaCadastro}>Cadastrar</button>
                        </form>
                        </div>
                    </div>
                </div>  
        </>
    )
}

export default Login;

    
 
