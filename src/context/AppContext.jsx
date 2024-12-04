import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AppContext = createContext();

export default function AppProvider({ children: components }) {
    const [epis, setEpis] = useState([]);
    const [funcionarios, setFuncionarios] = useState([]);
    const [historico, setHistorico] = useState([]);
    const [sincronizarDados, setSincronizarDados] = useState(false);

    useEffect(() => {
        carregarDados();
    }, []);

    const carregarDados = async () => {
        try {
            const [resultadoEpis, resultadoFuncionarios, resultadoHistorico] = await Promise.all([
                axios.get('http://localhost:3000/epis'),
                axios.get('http://localhost:3000/funcionarios'),
                axios.get('http://localhost:3000/historico'),
            ]);

            setEpis(resultadoEpis.data.resultado);
            setFuncionarios(resultadoFuncionarios.data.resultado);
            setHistorico(resultadoHistorico.data.resultado);
            setSincronizarDados(true);
        } catch (error) {
            console.log('Erro ao carregar os dados do banco!', error);
        }
    }

    const carregarEpis = async () => {
        try {
            const resultadoEpis = await axios.get('http://localhost:3000/epis');
            setEpis(resultadoEpis.data.resultado);
        } catch (error) {
            console.log('Erro ao carregar os funcionários!');
        }
    }

    const carregarFuncionarios = async () => {
        try {
            const resultadoFuncionarios = await axios.get('http://localhost:3000/funcionarios');
            setFuncionarios(resultadoFuncionarios.data.resultado);
        } catch (error) {
            console.log('Erro ao carregar os funcionários!');
        }
    }

    return (
        <>
            <AppContext.Provider value={{ epis, funcionarios, historico, setEpis, setFuncionarios, setHistorico, carregarDados, carregarFuncionarios, carregarEpis }}>
                {components}
            </AppContext.Provider>
        </>
    );
}