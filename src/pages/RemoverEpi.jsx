import axios from 'axios';
import { AppContext } from '../context/AppContext';
import { useNavigate, useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Loading from '../components/Loading';
import '../styles/RemoverEpi.css';

export default function RemoverEpi() {
    const { id } = useParams();
    const [epi, setEpi] = useState(null);
    const { carregarDados } = useContext(AppContext);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
        carregarEpi();
    }, []);

    const carregarEpi = async () => {
        try {
            const url = `http://localhost:3000/epi/${id}`;
            const response = await axios.get(url);
            setEpi(response.data.resultado);
            setLoading(false);
        } catch (error) {
            console.log('Erro ao buscar o EPI!', error);
        }
    }

    const removerEpi = async () => {
        try {
            const url = `http://localhost:3000/deletar-epi/${id}`;
            const response = await axios.delete(url);
            carregarDados();
            toast.success('EPI removido com sucesso!');
            navigate('/lista-epi');
        } catch (error) {
            toast.error('Erro ao tentar remover o EPI!');
            console.log('Erro ao tentar remover o EPI!', error);
        }
    }

    if (loading) {
        return <Loading />;
    }

    return (
        <>
            <Header titulo={'Remover EPI'} />

            <div className='container'>
                <div className='container-view-detalhes'>
                    <div className='container-detalhes'>
                        <p>{epi?.nome}</p>
                        <img className='foto-epi' src={epi?.imagem} alt={epi?.nome} />
                    </div>
                    <button className='btnRemover' onClick={removerEpi}>REMOVER</button>
                </div>
            </div>

            <Footer />
        </>
    );
}