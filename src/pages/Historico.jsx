import Footer from '../components/Footer.jsx';
import Header from '../components/Header.jsx';
import '../styles/Historico.css';
import { AppContext } from '../context/AppContext.jsx';
import { useContext } from 'react';

export default function Historico() {
  const { historico } = useContext(AppContext);

  const formatarData = (data) => {
    const date = new Date(data);
    return date.toLocaleDateString('pt-br', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    }).replace(', ', ' - ');
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
                  <p>Estoque: {historico.Epi.quantidade}</p>
                  <p>
                    {historico.Status.status === 'Retirado'
                      ? `Qtd.Retirada : ${historico.quantidade} unidade${historico.quantidade > 1 ? 's' : ''}`
                      : `Qtd. Devolvida: ${historico.quantidade} unidade${historico.quantidade > 1 ? 's' : ''}`
                    }
                  </p>
                  <p>Status: {historico.Status.status}</p>
                  <p>
                    {historico.Status.status === 'Devolvido'
                      ? ` Devolvido em: ${formatarData(historico.updatedAt)}`
                      : `Retirado em: ${formatarData(historico.createdAt)}`}
                  </p>
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
