import React from 'react';
import '../styles/Home.css';
import { FaHelmetSafety } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="app">
      <header className="header">
        <h1>Gerenciamento de EPI's</h1>
      </header>

      <main className="content">
        <div className="buttons">
          <Link to={'/epi'} className="button">
            <FaHelmetSafety className="icon" />
            <span>EPI</span>
          </Link>
          <Link to={'/funcionario'} className="button">
            <FaUser className="icon" />
            <span>Funcionário</span>
          </Link>
        </div>
      </main>

      <footer className="footer">
        © Todos os direitos reservados
      </footer>
    </div>
  );
}
