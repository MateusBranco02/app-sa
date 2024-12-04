import axios from 'axios';
import { AppContext } from '../context/AppContext.jsx';
import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Loading from '../components/Loading.jsx';
import InputMask from 'react-input-mask';
import '../styles/EditarFuncionario.css';

export default function EditarEPi() {
    const { id } = useParams();
    const { carregarDados } = useContext(AppContext);
    const [funcionario, setFuncionario] = useState({
        nome: '',
        funcao: '',
        telefone: '',
        email: '',
        cpf: '',
    });
    const [loading, setLoading] = useState(true);
    const [carregando, setCarregando] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        carregarFuncionario();
    }, []);

    const carregarFuncionario = async () => {
        try {
            const url = `http://localhost:3000/funcionario/${id}`;
            const response = await axios.get(url);
            console.log(response.data.resultado);
            setFuncionario(response.data.resultado);
            setLoading(false);
        } catch (error) {
            console.log('Erro ao buscar o Funcionário!', error);
            toast.error('Erro ao buscar o Funcionário!');
        }
    }

    const editarFuncionario = async (event) => {
        event.preventDefault();
        setCarregando(true);
        const editarFuncionarioSemMascaras = {
            ...funcionario,
            telefone: funcionario.telefone.replace(/\D/g, ''),
            cpf: funcionario.cpf.replace(/\D/g, ''),
        }

        try {
            const url = `http://localhost:3000/editar-funcionario/${id}`;
            const response = await axios.put(url, editarFuncionarioSemMascaras);
            setFuncionario(response.data.resultado);
            carregarDados();
            toast.success('Dados alterados com sucesso!');
            navigate('/lista-funcionarios');
        } catch (error) {
            console.log('Erro ao editar dados do Funcionário!', error);
            toast.error('Erro ao editar dados do Funcionário!');
        } finally {
            setCarregando(false);
        }
    }

    if (loading) {
        return <Loading />;
    }

    return (
        <>
            <Header titulo={'Editar funcionário'} />

            <div className='container'>
                <div className='container-editar-funcionario'>
                    {carregando ? (
                        <><h3>Alterando as informações...</h3></>
                    ) : (
                        <>
                            <div className='container-titulo-funcionario'>
                                <h2>Altere os campos necessários</h2>
                            </div>

                            <div className='container-form-centro'>
                                <form className='form-editar'>
                                    <input
                                        className='input-nome'
                                        type='text'
                                        placeholder='Nome Funcionário'
                                        onChange={(nome) => setFuncionario({ ...funcionario, nome: nome.target.value })}
                                        value={funcionario?.nome}
                                        required
                                    />
                                    <input
                                        className='input-funcao'
                                        type='text'
                                        placeholder='Função'
                                        onChange={(funcao) => setFuncionario({ ...funcionario, funcao: funcao.target.value })}
                                        value={funcionario?.funcao}
                                        required
                                    />
                                    <InputMask
                                        className='input-telefone'
                                        mask='(99)99999-9999'
                                        placeholder='Telefone'
                                        onChange={(telefone) => setFuncionario({ ...funcionario, telefone: telefone.target.value })}
                                        value={funcionario?.telefone}
                                        required
                                    />
                                    <input
                                        className='input-email'
                                        type='email'
                                        placeholder='Email'
                                        onChange={(email) => setFuncionario({ ...funcionario, email: email.target.value })}
                                        value={funcionario?.email}
                                        required
                                    />
                                    <InputMask
                                        className='input-cpf'
                                        mask='999.999.999-99'
                                        placeholder='CPF'
                                        onChange={(cpf) => setFuncionario({ ...funcionario, cpf: cpf.target.value })}
                                        value={funcionario?.cpf}
                                        required
                                    />
                                </form>
                                <button className='btnEditar' onClick={editarFuncionario}>EDITAR</button>
                            </div>
                        </>
                    )}
                </div>
            </div>

            <Footer />
        </>
    );
}
