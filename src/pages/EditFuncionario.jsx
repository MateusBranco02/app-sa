import '../styles/EditFuncionario.css';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function EditFuncionario() {
  const [funcionarios, setFuncionarios] = useState([]);

  useEffect(() => {
    listarFuncionarios();
  }, [])

  const listarFuncionarios = async () => {
    const url = 'http://localhost:3000/funcionarios';
    const response = await axios.get(url);
    console.log(response.data.resultado);
    setFuncionarios(response.data.resultado);
  }

  return (
    <>
      <Header titulo={"Bonde da S.A."} />
      <div className="container">
        <div className="container-historico">
          <h2>Editar/Remover</h2>
          <div className="historico-area">
            <p>Esta área será usada para exibir os funcionarios.</p>
            <ul className='lista-epis'>
              {funcionarios.map((funcionario, key) =>
                <li className='epi-item' key={key}>
                  <p>Nome: {funcionario.nome}</p>
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
