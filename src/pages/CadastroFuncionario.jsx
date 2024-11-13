import React, { useState } from 'react';

export default function CadastroFuncionario() {
    const [nome, setNome] = useState('');
    const [funcao, setFuncao] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [CPF, setCPF] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Funcionário Cadastrado:', { nome, funcao, telefone, email, CPF });
    };

    return (
        <div className="app">
            <header className="header">
                <h1>Cadastro de Funcionário</h1>
            </header>

            <main className="content">
                <div className="form-container">
                    <h2>Cadastro de Funcionário</h2>
                    <form className="form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input
                                type="text"
                                placeholder="Nome Funcionário"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="text"
                                placeholder="Função"
                                value={funcao}
                                onChange={(e) => setFuncao(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="text"
                                placeholder="Telefone"
                                value={telefone}
                                onChange={(e) => setTelefone(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="text"
                                placeholder="CPF"
                                value={CPF}
                                onChange={(e) => setCPF(e.target.value)}
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