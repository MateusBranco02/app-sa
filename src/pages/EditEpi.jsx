import '../styles/EditEpi.css';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function EditEpi() {
  const [epis, setEpis] = useState([]);

  useEffect(() => {
    listarEpis();
  }, []);

  const listarEpis = async () => {
    const url = 'http://localhost:3000/epis';
    try {
      const response = await axios.get(url);
      console.log(response.data.resultado);
      setEpis(response.data.resultado);
    } catch (error) {
      console.log('Erro ao buscar os EPIS!', error);
    }
  }

  return (
    <>
      <Header titulo={"Bonde da S.A."} />

      <div className="container">
        <div className="container-historico">
          <h2>Editar/Remover</h2>
          <div className="historico-area">
            <ul className='lista-epis'>
              {epis.map((epi, key) =>
                <li className='epi-item' key={key}>
                  <img className='foto-epi' src={epi.imagem} alt={epi.nome} />
                  <div className='container-info'>
                    <p>Item: {epi.nome}</p>
                    <p>Quantidade: {epi.quantidade}</p>
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
