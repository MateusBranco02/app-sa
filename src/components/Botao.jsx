import '../styles/Botao.css';
import { Link } from 'react-router-dom';

export default function Botao({ caminho, icone: Icon, titulo }) {
    return (
        <>
            <Link to={caminho} className='botao'>
                <Icon size={60} />
                <p>{titulo}</p>
            </Link>
        </>
    );
}
