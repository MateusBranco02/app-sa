import React from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineAppRegistration } from "react-icons/md";
import { TbEditOff } from "react-icons/tb";


export default function Funcionario() {
    return (
        <div className="app">
            <header className="header">
                <h1 className="title">Gerenciamento de Funcionarios</h1>
            </header>

            <main className="content">
                <div className="buttons">
                    <Link to={'/cadastroFuncionario'} className="button">
                        <MdOutlineAppRegistration className="icon" />
                        <span>Cadastrar</span>
                    </Link>
                    <Link to={'/editar-remover'} className="button">
                        <TbEditOff className="icon" />
                        <span>Editar/Remover</span>
                    </Link>
                </div>
            </main>
            <footer className="footer">
                © Todos os direitos reservados
            </footer>
        </div>
    );
}
