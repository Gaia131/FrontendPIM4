import React, { useState, ChangeEvent } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';
import Header from '../../components/Header';
import './cadastro.css'

interface ITask{
    nome: string;
    cpf: string;
    telefone: string;
    email: string;
    senha: string;
}


const Cadastro: React.FC = () => {
 
    const [model, setModel] = useState<ITask>({
        nome: '',
        cpf: '',
        telefone: '',
        email: '',
        senha: '',})
 
    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setModel({
            ...model,
            [e.target.name]: e.target.value
        })
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>){
        e.preventDefault()
        
        const response = await api.post('/Cliente', model)
 
        console.log(response)
    }


    const history = useHistory()
    function Cancelar () {
        history.push('/Perfil')
    }
    function SalvareVoltar () {
        history.push('/Perfil')
        alert("Usuario cadastrado com sucesso!!")
    }

    return (
        <>
        <div>
        <Header/>
        </div>
            <div className="container">
                <br />
                <div className="titulo">
                    <h1>Cadastro de usuário</h1>
                </div>
                <br />
                <table>
                <div className="container">
                    <Form onSubmit={onSubmit}>
                        <tr>
                            <div className = "nome" >
                                <label className="lnome">Nome</label>
                                <Form.Control
                                    type="text"
                                    name="nome"
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}/>
                            </div>
                        </tr>
                        <tr>
                                <td>
                                    <div className = "cpf" >
                                    <label className="lcpf">CPF</label>
                                    <Form.Control
                                        type="text"
                                        name="cpf"
                                        onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}/>
                                    </div>
                                </td>
                                <td>
                                    <div className = "telefone" >
                                    <label className="ltelefone">Telefone</label>
                                    <Form.Control
                                        className = "tel"
                                        type="text"
                                        name="telefone"
                                        onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}/>
                                    </div>
                                </td>
                        </tr>
                        <tr>
                            <td>
                                <div className = "email" >
                                <label className="lemail">E-mail</label>
                                <Form.Control
                                    className = "email"
                                    type="text"
                                    name="email"
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}/>
                                </div>
                            </td>
                            <td>
                                <div className = "senha" >
                                <label className="lsenha">Senha</label>
                                <Form.Control
                                    className = "senha"
                                    type="password"
                                    name="senha"
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}/>
                                </div>
                            </td>
                        </tr>
                        <br/>
                        <br/>
                    </Form>
                    <div className = 'botoes'>
                        <Button type="submit" className ="btn btn-primary" onClick={SalvareVoltar} >Salvar</Button>
                        <Button type="submit" className ="btn btn-warning" onClick={Cancelar} >Cancelar</Button>
                    </div>
                </div>
                </table>
            </div>
        <br/>
        <br/>
    </>
    );
}
 
export default Cadastro;