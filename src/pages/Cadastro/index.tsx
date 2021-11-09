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
                    <h1>Cadastro de usuario</h1>
                </div>
                <br />
                <div className="container">
                    <Form onSubmit={onSubmit}>
                        <div className = "nome" >
                            <Form.Label>Nome</Form.Label>
                            <Form.Control
                                type="text"
                                name="nome"
                                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}/>
                        </div>
    
                        <div className = "cpf"> 
                            <Form.Label>CPF</Form.Label>
                            <Form.Control
                                type="text"
                                name="cpf"
                                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}/>
                        </div>
                        
                        <Form.Group>
                            <Form.Label>Telefone</Form.Label>
                            <Form.Control
                                className = "tel"
                                type="text"
                                name="telefone"
                                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}/>
                        </Form.Group>
                        
                        <Form.Group>
                            <Form.Label>E-mail</Form.Label>
                            <Form.Control
                                className = "email"
                                type="text"
                                name="email"
                                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}/>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Senha</Form.Label>
                            <Form.Control
                                className = "senha"
                                type="password"
                                name="senha"
                                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}/>
                        </Form.Group>
                        <div className = 'botoes'>
                        <Button type="submit" className ="btn btn-primary" onClick={SalvareVoltar} >Salvar</Button>
                        <button type="button" className ="btn btn-warning" onClick={Cancelar} >Cancelar</button>
                        </div>
                    </Form>
                </div>
            </div>
        <br/>
        <br/>
    </>
    );
}
 
export default Cadastro;