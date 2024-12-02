import { MdOutlineAppRegistration } from 'react-icons/md';
import { TbEditOff } from 'react-icons/tb';
import { IoIosConstruct } from 'react-icons/io';
import { FaHistory } from 'react-icons/fa';
import Botao from '../components/Botao.jsx';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import '../styles/Epi.css';

export default function Epi() {
    return (
        <>
            <Header titulo={'ESCOLHA UMA DAS OPÇÕES'} />

            <div className='container'>
                <div className='container-view'>
                    <Botao caminho={'/cadastro-epi'} icone={MdOutlineAppRegistration} titulo={'CADASTRAR'} />
                    {/* <Botao caminho={'/epi'} icone={TbEditOff} titulo={'EDITAR/REMOVER'} /> */}
                    <Botao caminho={'/lista-epi'} icone={IoIosConstruct} titulo={'EPIS'} />
                    <Botao caminho={'/historico'} icone={FaHistory} titulo={'HISTÓRICO'} />
                </div>
            </div>

            <Footer />
        </>
    );
}
