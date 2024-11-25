import '../styles/Header.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

export default function Header({ titulo }) {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <>
            <div className='container-cabecalho'>
                <header className='cabacalho'>
                    {location.pathname !== '/' && (
                        <div className='btnVoltar' onClick={() => navigate(-1)}>
                            <FaArrowLeft size={18} />
                            <p>Voltar</p>
                        </div>
                    )}
                    <Link to={'/'} className='titulo'>{titulo}</Link>
                </header>
            </div>
        </>
    );
}
