import React, { useState } from 'react';
import '../styles/Cadastro-epi.css';
import Header from '../components/Header.jsx';

export default function CadastroEpi() {
    const [nome, setNome] = useState('');
    const [imagem, setImagem] = useState('');
    const [quantidade, setQuantidade] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('EPI Cadastrado:', { nome, tipo, quantidade });
    };

    return (
        <div className="app">
            <Header titulo={"Bonde da S.A."} />

            <main className="content">
                <div className="form-container">
                    <h2>Cadastro de EPI</h2>
                    <form className="form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input
                                type="text"
                                placeholder="Nome do EPI"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="text"
                                placeholder="Url da Imagem"
                                value={imagem}
                                onChange={(e) => setImagem(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="number"
                                placeholder="Quantidade*"
                                value={quantidade}
                                onChange={(e) => setQuantidade(e.target.value)}
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
