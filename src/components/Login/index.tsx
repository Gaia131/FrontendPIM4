import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom'
import api from '../../services/api';
import moment from 'moment';
import './login.css'

interface ITask{
    email: string;
    senha: string;
}



const Login: React.FC = () => {



    let imglogo = "https://media.discordapp.net/attachments/892218754354786354/908083743456125008/logo2.png"

    const history = useHistory()
    function ChamaCadastro () {
        history.push('/Cadastro')
    }
    const { email, senha } = useParams<{ email: string, senha: string }>()
    const [cliente, setTask] = useState<ITask>()
 
    async function findClient(){
        const response = await api.get(`/cliente/${email}${senha}`)
        console.log(response)
    }
 
    useEffect(() => {
        findClient()
    }, [email, senha])


    return(
        <>
            <div className="sidenav">
                    <div className="login-main-text">
                        <h2>Bem vindo!</h2>
                        <br/>
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
                <img className="logo" src={imglogo} alt="Logo" />
                <div className="main">
                    <div className="col-md-6 col-sm-12">
                        <div className="login-form">
                        <form>
                            <div className="form-group">
                                <label className="t1">Email</label>
                                <input type="text" className="form-control" placeholder="exemplo@email.com"/>
                                <label className="t1">Senha</label>
                                <input type="password" className="form-control" placeholder="Digite sua senha"/>
                            </div>
                            <br/>
                            <button id="entrar" type="button" className ="btn btn-primary" onClick={findClient}>Entrar</button>
                            <br/>
                            <a className="a" onClick={ChamaCadastro}>Criar conta</a>
                        </form>
                        </div>
                    </div>
                </div>  
        </>
    )
}

export default Login;

    
 
