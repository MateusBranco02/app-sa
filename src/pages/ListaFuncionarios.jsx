import axios from 'axios';
import { useEffect, useState } from 'react';
import Footer from '../components/Footer.jsx';
import Header from '../components/Header.jsx';
import '../styles/ListaFuncionarios.css';

export default function ListaFuncionarios() {
  const [funcionarios, setFuncionarios] = useState([]);

  useEffect(() => {
    listarFuncionarios();
  }, []);

  const listarFuncionarios = async () => {
    const url = 'http://localhost:3000/funcionarios';
    const response = await axios.get(url);
    setFuncionarios(response.data.resultado);
  }

  return (
    <>
      <Header titulo={'Lista de Funcionários'} />

      <div className='container'>
        <div className='container-view-funcionarios'>
          <div className='container-funcionarios'>
            <ul className='lista-funcionarios'>
              {funcionarios.map((funcionario, key) =>
                <li className='funcionario' key={key}>
                  <p>Nome: {funcionario.nome}</p>
                  <p>Função: {funcionario.funcao}</p>
                  <p>Telefone: {funcionario.telefone}</p>
                  <p>E-mail: {funcionario.email}</p>
                  <p>CPF: {funcionario.cpf}</p>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
