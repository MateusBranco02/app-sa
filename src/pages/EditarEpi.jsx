import axios from 'axios';
import { AppContext } from '../context/AppContext.jsx'
import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import Loading from '../components/Loading.jsx';
import '../styles/EditarEpi.css';

export default function EditarEpi() {
    const { id } = useParams();
    const { carregarDados } = useContext(AppContext);
    const [epi, setEpi] = useState({
        nome: '',
        imagem: '',
        quantidade: ''
    });
    const [loading, setLoading] = useState(true);
    const [carregando, setCarregando] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        carregarEpi();
    }, []);

    const carregarEpi = async () => {
        try {
            const url = `http://localhost:3000/epi/${id}`;
            const response = await axios.get(url);
            setEpi(response.data.resultado);
        } catch (error) {
            console.log('Erro ao buscar o EPI', error);
            toast.error('Erro ao buscar o EPI!');
        } finally {
            setLoading(false);
        }
    }

    const editarEpi = async (event) => {
        event.preventDefault();
        setCarregando(true);
        try {
            const url = `http://localhost:3000/editar-epi/${id}`;
            const response = await axios.put(url, epi);
            setEpi(response.data.resultado);
            carregarDados();
            toast.success('Epi editado com sucesso!');
            navigate('/lista-epi');
        } catch (error) {
            console.log('Erro ao editar o EPI', error);
            toast.error('Erro ao editar o EPI!');
        } finally {
            setCarregando(false);
        }
    }

    if (loading) {
        return <Loading />;
    }

    return (
        <>
            <Header titulo={'EDITAR EPI'} />

            <div className='container'>
                <div className='container-form-editar'>
                    {carregando ? (
                        <h3>Alterando as informações...</h3>
                    ) : (
                        <>
                            <div className='container-titulo'>
                                <h2>Altere os campos necessários</h2>
                            </div>

                            <div className='container-form-centro'>
                                <form className='form-editar'>
                                    <input
                                        className='input-nome'
                                        type='text'
                                        placeholder='Nome do EPI'
                                        onChange={(nome) => setEpi({ ...epi, nome: nome.target.value })}
                                        value={epi?.nome}
                                    />
                                    <input
                                        className='input-imagem'
                                        type='text'
                                        placeholder='Url da Imagem'
                                        onChange={(imagem) => setEpi({ ...epi, imagem: imagem.target.value })}
                                        value={epi?.imagem}
                                    />
                                    <input
                                        className='input-quantidade'
                                        type='number'
                                        placeholder='Quantidade'
                                        onChange={(quantidade) => setEpi({ ...epi, quantidade: Number(quantidade.target.value) })}
                                        value={epi?.quantidade}
                                    />
                                </form>
                                <button className='btnEditar' onClick={editarEpi}>EDITAR</button>
                            </div>
                        </>
                    )}
                </div>
            </div>

            <Footer />
        </>
    );
}
