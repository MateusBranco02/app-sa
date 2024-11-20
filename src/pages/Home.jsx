import '../styles/Home.css';
import { FaHelmetSafety } from 'react-icons/fa6';
import { FaUser } from 'react-icons/fa';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import Botao from '../components/Botao.jsx';

export default function Home() {
  return (
    <>
      <Header titulo={"Gerenciamento de EPI's"} />
      <div className='container'>
        <div className='container-view'>
          <Botao caminho={'/epi'} icone={FaHelmetSafety} titulo={'EPI'} />
        </div>

      </div>
      <Footer />
    </>
  );
}
