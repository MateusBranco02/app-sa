import '../styles/Historico.css';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Historico() {
  const [historico, setHistorico] = useState([]);
  useEffect(() => {
    ExibirHistorico();
  }, []);

  const ExibirHistorico = async () => {
    const url = 'http://localhost:3000/historico';
    try {
      const response = await axios.get(url);
      console.log(response.data.resultado);
      setHistorico(response.data.resultado);
    } catch (error) {
      console.log('Erro ao buscar o Historico', error);
    }
  }

  return (
    <>
      <Header titulo={"Bonde da S.A."} />
      <div className="container">
        <div className="container-historico">
          <h2>Histórico de Pedidos</h2>
          <div className="historico-area">
            <ul className='lista-epis'>
              {historico.map((historico, key) =>
                <li className='epi-item' key={key}>
                  <div className='container-info'>
                    <p>Funcionário: {historico.Funcionario.nome}</p>
                    <p>Epi: {historico.Epi.nome}</p>
                    <p>Status: {historico.Status.status}</p>
                  </div>
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
