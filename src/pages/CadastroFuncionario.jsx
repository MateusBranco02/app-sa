import { useState } from 'react';
import Header from '../components/Header.jsx';
import axios from 'axios';

export default function CadastroFuncionario() {
    const [novoFuncionario, setNovoFuncionario] = useState({
        nome: '',
        funcao: '',
        telefona: '',
        email: '',
        cpf: '',
    });

    const cadastrarFuncionario = async () => {
        const url = 'http://localhost:3000/cadastrar-funcionario';
        const response = await axios.post(url, novoFuncionario);
    };

    return (
        <div className="app">
            <Header titulo={"Bonde da S.A."} />

            <main className="content">
                <div className="form-container">
                    <h2>Cadastro de Funcionário</h2>
                    <form className="form" onSubmit={cadastrarFuncionario}>
                        <div className="form-group">
                            <input
                                className='input-nome'
                                type="text"
                                placeholder="Nome Funcionário"
                                onChange={(nome) => setNovoFuncionario({ ...novoFuncionario, nome: nome.target.value })}
                                value={novoFuncionario.nome}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <input
                                className='input-funcao'
                                type="text"
                                placeholder="Função"
                                value={novoFuncionario.funcao}
                                onChange={(funcao) => setNovoFuncionario({ ...novoFuncionario, funcao: funcao.target.value })}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <input
                                className='input-telefone'
                                type="text"
                                placeholder="Telefone"
                                value={novoFuncionario.telefone}
                                onChange={(telefone) => setNovoFuncionario({ ...novoFuncionario, telefone: telefone.target.value })}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <input
                                className='input-email'
                                type="email"
                                placeholder="Email"
                                value={novoFuncionario.email}
                                onChange={(email) => setNovoFuncionario({ ...novoFuncionario, email: email.target.value })}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <input
                                className='input-cpf'
                                type="text"
                                placeholder="CPF"
                                value={novoFuncionario.CPF}
                                onChange={(cpf) => setNovoFuncionario({ ...novoFuncionario, cpf: cpf.target.value })}
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