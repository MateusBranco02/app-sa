import { MdOutlineAppRegistration } from "react-icons/md";
import { TbEditOff } from "react-icons/tb";
import { IoIosConstruct } from "react-icons/io";
import { FaHistory } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import '../styles/Epi.css';

export default function Epi() {
    return (
        <>
            <div className="app">
                <Header titulo={"Bonde da S.A."} />

                <main className="content">
                    <div className="buttons">
                        <Link to={'/cadastroEpi'} className="button">
                            <MdOutlineAppRegistration className="icon" />
                            <span>Cadastrar</span>
                        </Link>
                        <Link to={'/epi-cadastro'} className="button">
                            <IoIosConstruct className="icon" />
                            <span>Epi's</span>
                        </Link>
                        <Link to={'/historico'} className="button">
                            <FaHistory className="icon" />
                            <span>Historico</span>
                        </Link>
                    </div>
                </main>

                <Footer />
            </div>
        </>
    )
}