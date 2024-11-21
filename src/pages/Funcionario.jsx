import React from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineAppRegistration } from "react-icons/md";
import { TbEditOff } from "react-icons/tb";
import Header from '../components/Header.jsx';


export default function Funcionario() {
    return (
        <div className="app">
            <Header titulo={"Bonde da S.A."} />

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
