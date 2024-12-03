import axios from 'axios';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer.jsx';
import Header from '../components/Header.jsx';
import '../styles/DevolverEpi.css';


export default function DevolverEpi() {
    const { id } = useParams();
    const [epi, setEpis] = useState({
        nome: '',
        quantidade: '',
    });

    const devolverEpi = async (event) => {
        event.preventDefault();
        const url = `http://localhost:3000/devolver-epi/${id}`
        try {
            const response = await axios.post(url, epi);
            toast.success('EPI devolvido com sucesso!');
            setEpis(response.data.resultado);
        } catch (error) {
            toast.error('Erro ao tentar devolver o EPI!');
            console.log('Erro ao devolver o EPI', error);
        }
    }

    return (
        <>
            <Header titulo={'Devovler EPI'} />

            <div className='container'>
                <div className='container-form'>
                    <form className='form'>
                        <h2> Devolver EPI</h2>
                        <input
                            type='text'
                            placeholder='Nome Funcionário'
                            onChange={(nome) => setEpis({ ...epi, nome: nome.target.value })}
                            value={epi.nome}
                        />
                        <input
                            type='Number'
                            placeholder='Quantidade'
                            onChange={(quantidade) => setEpis({ ...epi, quantidade: quantidade.target.value })}
                            value={epi.quantidade}
                        />

                        <button className='btnCadastrar' onClick={devolverEpi}>Devolver</button>
                    </form>
                </div>
            </div>

            <Footer />
        </>
    );
}
