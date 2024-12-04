import '../styles/Header.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

export default function Header({ titulo }) {
    const navigate = useNavigate();
    const location = useLocation();

    const btnVoltar = () => {
        if (location.pathname === '/epi') {
            navigate('/');
        } else if (location.pathname === '/lista-epi') {
            navigate('/epi');
        } else if (location.pathname === '/funcionario') {
            navigate('/');
        } else if (location.pathname === '/lista-funcionarios') {
            navigate('/funcionario');
        } else {
            navigate(-1);
        }
    }

    return (
        <>
            <div className='container-cabecalho'>
                <header className='cabecalho'>
                    {location.pathname !== '/' && (
                        <div className='btnVoltar' onClick={btnVoltar}>
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
