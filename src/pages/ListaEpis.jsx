import { AppContext } from '../context/AppContext.jsx';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { BiSolidEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { toast } from 'react-toastify';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import '../styles/ListaEpis.css';
import axios from 'axios';

export default function ListaEpis() {
  const { epis, carregarEpis } = useContext(AppContext);
  const [inputRemocaoVisivel, setInputRemocaoVisivel] = useState(null);
  const [epiSelecionado, setEpiSelecionado] = useState(null);
  const [carregando, setCarregando] = useState(false);

  const removerEpi = async (id) => {
    setCarregando(true);
    try {
      const url = `http://localhost:3000/deletar-epi/${id}`;
      const response = await axios.delete(url);
      carregarEpis();
      toast.success('EPI removido com sucesso!');
      setInputRemocaoVisivel(null);
    } catch (error) {
      toast.error('Erro ao tentar remover o EPI!');
      console.log('Erro ao tentar remover o EPI!', error);
    } finally {
      setCarregando(false);
    }
  }

  return (
    <>
      <Header titulo={`EPI'S`} />

      <div className='container'>
        <div className='container-view-epis'>
          <div className='container-epis'>
            <ul className='lista-epis'>
              {epis.map((epi, key) =>
                <li className='epi-item' key={key}>
                  <div className='container-alinhar-info'>
                    <img className='foto-epi' src={epi.imagem} alt={epi.nome} />
                    <div className='container-info'>
                      <p>Item: {epi.nome}</p>
                      <p>Quantidade: {epi.quantidade}</p>
                      <Link className='btnRetirar' to={`/retirar-epi/${epi.id}`}>Retirar</Link>
                      <Link className='btnDevolver' to={`/devolver-epi/${epi.id}`}>Devolver</Link>
                    </div>
                  </div>
                  <div className='container-icons'>
                    <Link to={`/editar-epi/${epi.id}`}><BiSolidEdit /></Link>
                    <Link to='#' onClick={() => { setInputRemocaoVisivel(epi.id); setEpiSelecionado(epi.nome); }}><MdDelete /></Link>
                  </div>
                </li>
              )}
            </ul>
          </div>
        </div>

        {inputRemocaoVisivel && (
          <div className='validar-cpf'>
            {carregando ? (
              <h3>Removendo EPI...</h3>
            ) : (
              <>
                <h3>Tem certeza que deseja remover o item: {epiSelecionado}?</h3>
                <button className='btnConfirmar' onClick={() => removerEpi(inputRemocaoVisivel)}>Confirmar</button>
                <button className='btnCancelar' onClick={() => setInputRemocaoVisivel(null)}>Cancelar</button>
              </>
            )}
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}
