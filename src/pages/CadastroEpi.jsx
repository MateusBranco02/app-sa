import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/CadastroEpi.css';

export default function CadastroEpi() {
    const [novoEpi, setNovoEpi] = useState({
        nome: '',
        imagem: '',
        quantidade: ''
    });

    const navigate = useNavigate();

    const cadastrarEpi = async (event) => {
        event.preventDefault();
        const url = 'http://localhost:3000/cadastrar-epi';
        const response = await axios.post(url, novoEpi);
        navigate('/');
    }

    return (
        <>
            <Header titulo={'CADASTRAR EPI'} />

            <div className='container'>
                <div className='container-form'>
                    <h2>Cadastro de EPI</h2>
                    <form className='form' onSubmit={cadastrarEpi}>
                        <input
                            type='text'
                            placeholder='Nome do EPI'
                            onChange={(nome) => setNovoEpi({ ...novoEpi, nome: nome.target.value })}
                            value={novoEpi.nome}
                            required
                        />
                        <input
                            type='text'
                            placeholder='Url da Imagem'
                            onChange={(imagem) => setNovoEpi({ ...novoEpi, imagem: imagem.target.value })}
                            value={novoEpi.imagem}
                            required
                        />
                        <input
                            type='number'
                            placeholder='Quantidade'
                            onChange={(quantidade) => setNovoEpi({ ...novoEpi, quantidade: Number(quantidade.target.value) })}
                            value={novoEpi.quantidade}
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
