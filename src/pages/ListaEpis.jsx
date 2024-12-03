import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BiSolidEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import Footer from '../components/Footer.jsx';
import Header from '../components/Header.jsx';
import '../styles/ListaEpis.css';
import { AppContext } from '../context/AppContext.jsx';
import { useContext } from 'react';

export default function ListaEpis() {

  const { epis } = useContext(AppContext);
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
                    <Link to={`/remover-epi/${epi.id}`}> <MdDelete /> </Link>
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
