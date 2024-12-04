import axios from 'axios';
import { AppContext } from '../context/AppContext.jsx';
import { useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Footer from '../components/Footer.jsx';
import Header from '../components/Header.jsx';
import InputMask from 'react-input-mask';
import '../styles/RetirarEpi.css';

export default function RetirarEpi() {
    const { id } = useParams();
    const { carregarDados } = useContext(AppContext);
    const [epi, setEpi] = useState({
        cpf: '',
        quantidade: ''
    });
    const [carregando, setCarregando] = useState(false);

    const navigate = useNavigate();

    const retirarEpi = async (event) => {
        event.preventDefault();

        const removerMascaraCpf = {
            ...epi,
            cpf: epi.cpf.replace(/\D/g, ''),
        }

        setCarregando(true);

        try {
            const url = `http://localhost:3000/retirar-epi/${id}`;
            const response = await axios.post(url, removerMascaraCpf);
            setEpi(response.data.resultado);
            carregarDados();
            toast.success('Epi retirado com sucesso!');
            navigate('/lista-epi');
        } catch (error) {
            const mensagemDeErro = error.response?.data?.mensagem || 'Erro ao retirar o EPI!';
            toast.error(mensagemDeErro);
            console.log(mensagemDeErro);
        } finally {
            setCarregando(false);
        }
    }

    return (
        <>
            <Header titulo={'Retirar Epi'} />

            <div className='container'>
                <div className='container-form'>
                    {carregando ? (
                        <h3>Registrando retirada do EPI...</h3>
                    ) : (
                        <>
                            <h2>Retirar EPI</h2>
                            <form className='form'>
                                <InputMask className='input-cpf'
                                    mask='999.999.999-99'
                                    placeholder='Informe seu CPF'
                                    onChange={(cpf) => setEpi({ ...epi, cpf: cpf.target.value })}
                                    value={epi.cpf}
                                    required
                                />
                                <input className='input-quantidade'
                                    type='Number'
                                    placeholder='Quantidade'
                                    onChange={(quantidade) => setEpi({ ...epi, quantidade: quantidade.target.value })}
                                    value={epi.quantidade}
                                    required
                                />

                                <button className='btnCadastrar' onClick={retirarEpi}>Retirar</button>
                            </form>
                        </>
                    )}
                </div>
            </div>

            <Footer />
        </>
    );
}
