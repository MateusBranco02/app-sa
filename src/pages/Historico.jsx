import axios from 'axios';
import { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/Historico.css';

export default function Historico() {
  const [historico, setHistorico] = useState([]);

  useEffect(() => {
    exibirHistorico();
  }, []);

  const exibirHistorico = async () => {
    const url = 'http://localhost:3000/historico';

    try {
      const response = await axios.get(url);
      setHistorico(response.data.resultado);
    } catch (error) {
      console.log('Erro ao buscar o histórico!', error);
    }
  }

  return (
    <>
      <Header titulo={'Histórico'} />

      <div className='container'>
        <div className='container-view-historico'>
          <div className='container-historico'>
            <ul className='lista-historico'>
              {historico.map((historico, key) =>
                <li className='historico' key={key}>
                  <p>Funcionário: {historico.Funcionario.nome}</p>
                  <p>Epi: {historico.Epi.nome}</p>
                  <p>
                    {historico.Status.status === 'Retirado'
                      ? `Qtd. Retirada: ${historico.quantidade} unidade(s)`
                      : `Qtd. Devolvida: ${historico.quantidade} unidade(s)`
                    }
                  </p>
                  <p>Estoque: {historico.Epi.quantidade}</p>
                  <p>Status: {historico.Status.status}</p>
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
