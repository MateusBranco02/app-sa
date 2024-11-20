import React from 'react';
import { MdOutlineAppRegistration } from "react-icons/md";
import { TbEditOff } from "react-icons/tb";
import { IoIosConstruct } from "react-icons/io";
import { FaHistory } from "react-icons/fa";
import { Link } from 'react-router-dom';
import '../styles/Epi.css';
import Header from '../components/Header.jsx';

export default function Epi() {
    return (
        <>
            <div className="app">
                <Header titulo={"Gerenciamento de EPI's"} />

                <main className="content">
                    <div className="buttons">
                        <Link to={'/cadastroEpi'} className="button">
                            <MdOutlineAppRegistration className="icon" />
                            <span>Cadastrar</span>
                        </Link>
                        <Link to={'/editar-remover'} className="button">
                            <TbEditOff className="icon" />
                            <span>Editar/Remover</span>
                        </Link>
                        <Link to={'/epi-cadastro'} className="button">
                            <IoIosConstruct className="icon" />
                            <span>Epi's</span>
                        </Link>
                        <Link to={'/historico'} className="button">
                            <FaHistory className="icon" />
                            <span>Historico</span>
                        </Link>
                    </div>
                </main>

                <footer className="footer">
                    © Todos os direitos reservados
                </footer>
            </div>
        </>
    )
}