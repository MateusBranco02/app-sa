import axios from 'axios';
import { AppContext } from '../context/AppContext';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Footer from '../components/Footer';
import Header from '../components/Header';
import InputMask from 'react-input-mask';
import '../styles/CadastroFuncionario.css';

export default function CadastroFuncionario() {
    const { carregarFuncionarios } = useContext(AppContext);
    const [novoFuncionario, setNovoFuncionario] = useState({
        nome: '',
        funcao: '',
        telefone: '',
        email: '',
        cpf: '',
    });
    const [carregando, setCarregando] = useState(false);

    const navigate = useNavigate();

    const cadastrarFuncionario = async (event) => {
        event.preventDefault();

        if (!novoFuncionario.nome || !novoFuncionario.funcao || !novoFuncionario.telefone || !novoFuncionario.email || !novoFuncionario.cpf) {
            toast.error('Por favor, preencha todos os campos!');
            return;
        }

        const cadastrarFuncionarioSemMascaras = {
            ...novoFuncionario,
            telefone: novoFuncionario.telefone.replace(/\D/g, ''),
            cpf: novoFuncionario.cpf.replace(/\D/g, ''),
        }

        setCarregando(true);

        try {
            const url = 'http://localhost:3000/cadastrar-funcionario';
            const response = await axios.post(url, cadastrarFuncionarioSemMascaras);
            await carregarFuncionarios();
            toast.success('Funcionário cadastrado com sucesso!');
            navigate('/');
            setCarregando(false);
        } catch (error) {
            toast.error('Erro ao tentar cadastrar o funcionário!');
            console.log('Erro ao tentar cadastrar o funcionário!', error);
        }
    }

    return (
        <>
            <Header titulo={'CADASTRAR FUNCIONÁRIO'} />

            <div className='container'>
                <div className='container-form-funcionario'>
                    {carregando ? (
                        <h3>Cadastrando Funcionário...</h3>
                    ) : (
                        <>
                            <h2>Preencha os campos abaixo</h2>
                            <form className='form' onSubmit={cadastrarFuncionario} noValidate>
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
                                    placeholder="Função"
                                    onChange={(funcao) => setNovoFuncionario({ ...novoFuncionario, funcao: funcao.target.value })}
                                    value={novoFuncionario.funcao}
                                    required
                                />
                                <InputMask
                                    className='input-telefone'
                                    mask='(99)99999-9999'
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
                                <InputMask
                                    className='input-cpf'
                                    mask='999.999.999-99'
                                    placeholder='CPF'
                                    onChange={(cpf) => setNovoFuncionario({ ...novoFuncionario, cpf: cpf.target.value })}
                                    value={novoFuncionario.cpf}
                                    required
                                />

                                <button className='btnCadastrar' type='submit'>CADASTRAR</button>
                            </form>
                        </>
                    )}

                </div>
            </div>

            <Footer />
        </>
    );
}
