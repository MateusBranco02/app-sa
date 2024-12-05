import '../styles/Home.css';
import { FaHelmetSafety, FaUser } from 'react-icons/fa6';
import Botao from '../components/Botao.jsx';
import Footer from '../components/Footer.jsx';
import Header from '../components/Header.jsx';

export default function Home() {
  return (
    <>
      <Header titulo={`GERENCIAMENTO DE EPI'S`} />

      <div className='container'>
        <div className='container-view'>
          <Botao caminho={'/epi'} icone={FaHelmetSafety} titulo={'EPI'} />
          <Botao caminho={'/funcionario'} icone={FaUser} titulo={'FUNCIONÁRIO'} />
        </div>
      </div>

      <Footer />
    </>
  );
}
