import axios from 'axios';
import { useEffect, useState } from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
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
      console.log(response.data.resultado);
      setHistorico(response.data.resultado);
    } catch (error) {
      console.log('Erro ao buscar o Historico', error);
    }
  }

  return (
    <>
      <Header titulo={"HISTÓRICO"} />

      <div className="container">
        <div className="container-view-historico">
          <div className="container-historico">
            <ul className='lista-historico'>
              {historico.map((historico, key) =>
                <li className='historico' key={key}>
                  <div className='container-info'>
                    <p>Funcionário: {historico.Funcionario.nome}</p>
                    <p>Epi: {historico.Epi.nome}</p>
                    <p>
                      {historico.Status.status === 'Retirado'
                        ? `Qtd. Retirado: ${historico.quantidade} unidade(s)`
                        : `Qtd. Devolvida: ${historico.quantidade} unidade(s)`
                      }
                    </p>
                    <p>Estoque: {historico.Epi.quantidade}</p>
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
