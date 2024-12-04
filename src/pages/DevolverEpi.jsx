import axios from 'axios';
import { AppContext } from '../context/AppContext';
import { useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Footer from '../components/Footer';
import Header from '../components/Header';
import InputMask from 'react-input-mask';
import '../styles/DevolverEpi.css';

export default function DevolverEpi() {
    const { id } = useParams();
    const { carregarDados } = useContext(AppContext);
    const [epi, setEpi] = useState({
        cpf: '',
        quantidade: ''
    });
    const [carregando, setCarregando] = useState(false);

    const navigate = useNavigate();

    const devolverEpi = async (event) => {
        event.preventDefault();

        const removerMascaraCpf = {
            ...epi,
            cpf: epi.cpf.replace(/\D/g, ''),
        }

        setCarregando(true);
        try {
            const url = `http://localhost:3000/devolver-epi/${id}`;
            const response = await axios.post(url, removerMascaraCpf);
            setEpi(response.data.resultado);
            carregarDados();
            toast.success('EPI devolvido com sucesso!');
            navigate('/lista-epi');
        } catch (error) {
            const mensagemDeErro = error.response?.data?.mensagem || 'Erro ao tentar devolver o EPI!';
            toast.error(mensagemDeErro);
            console.log(mensagemDeErro);
        } finally {
            setCarregando(false);
        }
    }

    return (
        <>
            <Header titulo={'Devolver Epi'} />

            <div className='container'>
                <div className='container-form'>
                    {carregando ? (
                        <h3>Registrando devolução do EPI...</h3>
                    ) : (
                        <>
                            <h2> Devolver EPI</h2>
                            <form className='form'>
                                <InputMask
                                    mask='999.999.999-99'
                                    placeholder='Informe seu CPF'
                                    onChange={(cpf) => setEpi({ ...epi, cpf: cpf.target.value })}
                                    value={epi.cpf}
                                    required
                                />
                                <input
                                    type='Number'
                                    placeholder='Quantidade'
                                    onChange={(quantidade) => setEpi({ ...epi, quantidade: quantidade.target.value })}
                                    value={epi.quantidade}
                                />

                                <button className='btnCadastrar' onClick={devolverEpi}>Devolver</button>
                            </form>
                        </>
                    )}
                </div>
            </div>

            <Footer />
        </>
    );
}
