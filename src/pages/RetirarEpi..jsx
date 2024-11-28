import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";

export default function RetirarEpi() {
    const { id } = useParams();
    const [epi, setEpis] = useState({
        nome: '',
        quantidade: '',
    })

    const retirarEpi = async (event) => {
        event.preventDefault();
        const url = `http://localhost:3000/retirar-epi/${id}`
        const response = await axios.post(url, epi);
        setEpis(response.data.resultado);
    }

    return (
        <>
            <Header titulo={'Retirar-Epi'} />

            <div className="container">
                <div className="container-view">
                    <form>
                        <input
                            type='text'
                            placeholder="Nome Funcionário"
                            onChange={(nome) => setEpis({ ...epi, nome: nome.target.value })}
                            value={epi.nome}
                        />
                        <input
                            type='Number'
                            placeholder="Quantidade"
                            onChange={(quantidade) => setEpis({ ...epi, quantidade: quantidade.target.value })}
                            value={epi.quantidade}
                        />

                        <button onClick={retirarEpi}>Retirar</button>
                    </form>

                </div>

            </div>
            <Footer />

        </>
    )
}