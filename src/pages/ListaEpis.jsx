import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BiSolidEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import Footer from '../components/Footer.jsx';
import Header from '../components/Header.jsx';
import '../styles/ListaEpis.css';

export default function ListaEpis() {
  const [epis, setEpis] = useState([]);

  useEffect(() => {
    listarEpis();
  }, []);

  const listarEpis = async () => {
    const url = `http://localhost:3000/epis`;
    try {
      const response = await axios.get(url);
      setEpis(response.data.resultado);
    } catch (error) {
      console.log('Erro ao buscar os EPIS!', error);
    }
  }

  return (
    <>
      <Header titulo={`Lista de EPI'S`} />

      <div className='container'>
        <div className='container-view-epis'>
          <div className='container-epis'>
            <ul className='lista-epis'>
              {epis.map((epi, key) =>
                <li className='epi-item' key={key}>
                  <div className='container-descricao'>
                    <img className='foto-epi' src={epi.imagem} alt={epi.nome} />
                    <div className='container-info'>
                      <p>Item: {epi.nome}</p>
                      <p>Quantidade: {epi.quantidade}</p>
                      <div className='container-botao'>
                        <Link className='btnRetirar' to={`/retirar-epi/${epi.id}`}>Retirar</Link>
                        <Link className='btnDevolver' to={`/devolver-epi/${epi.id}`}>Devolver</Link>
                      </div>
                    </div>
                  </div>

                  <div className='container-editar'>
                    <Link to={`/editar-epi/${epi.id}`}> <BiSolidEdit /> </Link>
                    <Link> <MdDelete /> </Link>
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
