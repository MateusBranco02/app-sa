import { MdOutlineAppRegistration } from 'react-icons/md';
import { TbEditOff } from 'react-icons/tb';
import Botao from '../components/Botao.jsx';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import '../styles/Funcionario.css';

export default function Funcionario() {
    return (
        <>
            <Header titulo={'ESCOLHA UMA DAS OPÇÕES'} />

            <div className='container'>
                <div className='container-view'>
                    <Botao caminho={'/cadastro-funcionario'} icone={MdOutlineAppRegistration} titulo={'CADASTRAR'} />
                    <Botao caminho={'/lista-funcionarios'} icone={TbEditOff} titulo={'FUNCIONÁRIOS'} />
                </div>
            </div>

            <Footer />
        </>
    );
}
