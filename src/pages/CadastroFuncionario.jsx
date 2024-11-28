import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/CadastroFuncionario.css';

export default function CadastroFuncionario() {
    const [novoFuncionario, setNovoFuncionario] = useState({
        nome: '',
        funcao: '',
        telefona: '',
        email: '',
        cpf: '',
    });

    const navigate = useNavigate();

    const cadastrarFuncionario = async (event) => {
        event.preventDefault();
        const url = 'http://localhost:3000/cadastrar-funcionario';
        const response = await axios.post(url, novoFuncionario);
        navigate('/');
    }

    return (
        <>
            <Header titulo={'CADASTRAR FUNCIONÁRIO'} />

            <div className='container'>
                <div className='container-form-funcionario'>
                    <h2>Preencha os campos abaixo</h2>
                    <form className='form' onSubmit={cadastrarFuncionario}>
                        <input
                            className='input-nome'
                            type='text'
                            placeholder='Nome Funcionário'
                            onChange={(nome) => setNovoFuncionario({ ...novoFuncionario, nome: nome.target.value })}
                            value={novoFuncionario.nome}
                            required
                        />
                        <input
                            className='input-funcao'
                            type='text'
                            placeholder='Função'
                            onChange={(funcao) => setNovoFuncionario({ ...novoFuncionario, funcao: funcao.target.value })}
                            value={novoFuncionario.funcao}
                            required
                        />
                        <input
                            className='input-telefone'
                            type='text'
                            placeholder='Telefone'
                            onChange={(telefone) => setNovoFuncionario({ ...novoFuncionario, telefone: telefone.target.value })}
                            value={novoFuncionario.telefone}
                            required
                        />
                        <input
                            className='input-email'
                            type='email'
                            placeholder='Email'
                            onChange={(email) => setNovoFuncionario({ ...novoFuncionario, email: email.target.value })}
                            value={novoFuncionario.email}
                            required
                        />
                        <input
                            className='input-cpf'
                            type='text'
                            placeholder='CPF'
                            onChange={(cpf) => setNovoFuncionario({ ...novoFuncionario, cpf: cpf.target.value })}
                            value={novoFuncionario.CPF}
                            required
                        />

                        <button className='btnCadastrar' type='submit'>CADASTRAR</button>
                    </form>
                </div>
            </div>

            <Footer />
        </>
    );
}
