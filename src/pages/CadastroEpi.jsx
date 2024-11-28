import React, { useState } from 'react';
import '../styles/Cadastro-epi.css';
import Header from '../components/Header.jsx';
import axios from 'axios';


export default function CadastroEpi() {
    const [novoEpi, setNovoEpi] = useState({
        nome: '',
        imagem: '',
        quantidade: ''
    });

    const cadastrarEpi = async () => {
        const URL = 'http://localhost:3000/cadastrar-epi';
        const response = await axios.post(URL, novoEpi);
        console.log('EPI Cadastrado:', response)
    };

    return (
        <div className="app">
            <Header titulo={"Bonde da S.A."} />

            <main className="content">
                <div className="form-container">
                    <h2>Cadastro de EPI</h2>
                    <form className="form" onSubmit={cadastrarEpi}>
                        <div className="form-group">
                            <input className='input-nome'
                                type="text"
                                placeholder="Nome do EPI"
                                onChange={(nome) => setNovoEpi({ ...novoEpi, nome: nome.target.value })}
                                value={novoEpi.nome}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <input className='input-imagem'
                                type="text"
                                placeholder="Url da Imagem"
                                onChange={(imagem) => setNovoEpi({ ...novoEpi, imagem: imagem.target.value })}
                                value={novoEpi.imagem}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <input className='input-quantidade'
                                type="number"
                                placeholder="Quantidade*"
                                onChange={(quantidade) => setNovoEpi({ ...novoEpi, quantidade: Number(quantidade.target.value) })}
                                value={novoEpi.quantidade}
                                required
                            />
                        </div>

                        <button type="submit" className="submit-button">CADASTRAR</button>


                    </form>
                </div>
            </main>

            <footer className="footer">
                © Todos os direitos reservados
            </footer>
        </div>
    );
}
