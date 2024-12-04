import axios from 'axios';
import { AppContext } from '../context/AppContext.jsx';
import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BiSolidEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { toast } from 'react-toastify';
import InputMask from 'react-input-mask';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/ListaFuncionarios.css';

export default function ListaFuncionarios() {
  const { funcionarios, carregarDados } = useContext(AppContext);
  const [inputEdicaoVisivel, setInputEdicaoVisivel] = useState(null);
  const [inputRemocaoVisivel, setInputRemocaoVisivel] = useState(null);
  const [funcionarioSelecionado, setFuncionarioSelecionado] = useState(null);
  const [cpfDigitado, setCpfDigitado] = useState('');
  const [carregando, setCarregando] = useState(false);

  const navigate = useNavigate();
  const removerMascara = (cpf) => cpf.replace(/\D/g, '');

  const formatarFuncionarioComMascara = funcionarios.map(funcionario => ({
    ...funcionario,
    telefone: funcionario.telefone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3'),
    cpf: funcionario.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.***.***-**'),
    email: funcionario.email.replace(/(^.{2})(.*)(@.*)/, (match, p1, p2, p3) => `${p1} ${'*'.repeat(p2.length)}${p3}`),
  }));

  const validarCpfParaEdicao = (id) => {
    const funcionarioSelecionoado = funcionarios.find(funcionario => funcionario.id === inputEdicaoVisivel);
    const cpfSemMascara = removerMascara(cpfDigitado);

    if (funcionarioSelecionoado && funcionarioSelecionoado.cpf === cpfSemMascara) {
      navigate(`/editar-funcionario/${id}`);
    } else {
      toast.error('CPF informado não corresponde ao do funcionário selecionado!');
    }
    setCpfDigitado('');
  }

  const validarCpfParaRemocao = () => {
    const funcionarioSelecionoado = funcionarios.find(funcionario => funcionario.id === inputRemocaoVisivel);
    const cpfSemMascara = removerMascara(cpfDigitado);
    if (funcionarioSelecionoado && funcionarioSelecionoado.cpf === cpfSemMascara) {
      removerFuncionario(inputRemocaoVisivel);
    } else {
      toast.error('CPF informado não corresponde ao do funcionário selecionado!');
    }
    setCpfDigitado('');
  }

  const removerFuncionario = async (id) => {
    setCarregando(true);
    try {
      const url = `http://localhost:3000/deletar-funcionario/${id}`;
      const response = await axios.delete(url);
      carregarDados();
      toast.success('Funcionário removido com sucesso!');
      setInputRemocaoVisivel(null);
    } catch (error) {
      toast.error('Erro ao tentar remover o funcionário!');
      console.log('Erro ao tentar remover o funcionário!', error);
    } finally {
      setCarregando(false);
    }
  }

  return (
    <>
      <Header titulo={'Lista de Funcionários'} />

      <div className='container'>
        <div className='container-view-funcionarios'>
          <div className='container-funcionarios'>
            <ul className='lista-funcionarios'>
              {formatarFuncionarioComMascara.map((funcionario, key) =>
                <li className='funcionario' key={key}>
                  <div className='container-info-funcionario'>
                    <p>Nome: {funcionario.nome}</p>
                    <p>Função: {funcionario.funcao}</p>
                    <p>Telefone: {funcionario.telefone}</p>
                    <p>E-mail: {funcionario.email}</p>
                    <p>CPF: {funcionario.cpf}</p>
                  </div>
                  <div className='container-icons'>
                    <Link to='#' onClick={(e) => { e.preventDefault(); setInputEdicaoVisivel(funcionario.id) }}><BiSolidEdit /></Link>
                    {inputEdicaoVisivel === funcionario.id && (
                      <div className='validar-cpf'>
                        {carregando ? (
                          <h3>Validando CPF...</h3>
                        ) : (
                          <>
                            <h3>Digite seu CPF:</h3>
                            <InputMask
                              className='input-cpf'
                              mask='999.999.999-99'
                              placeholder='Informe o CPF'
                              onChange={(cpf) => setCpfDigitado(cpf.target.value)}
                              value={cpfDigitado}
                              required
                            />
                            <button onClick={() => validarCpfParaEdicao(funcionario.id)}>Confirmar</button>
                            <button onClick={() => { setInputEdicaoVisivel(null); setCpfDigitado(''); }}>Cancelar</button>
                          </>
                        )}
                      </div>
                    )}
                    <Link to='#' onClick={() => { setInputRemocaoVisivel(funcionario.id); setFuncionarioSelecionado(funcionario.nome); }}><MdDelete /></Link>
                  </div>
                </li>
              )}
            </ul>
          </div>
        </div>

        {inputRemocaoVisivel && (
          <div className='validar-cpf'>
            {carregando ? (
              <h3>Removendo funcionário...</h3>
            ) : (
              <>
                <h3>Tem certeza que deseja remover o usuário: {funcionarioSelecionado}?</h3>
                <InputMask
                  className='input-cpf'
                  mask='999.999.999-99'
                  placeholder='Informe o CPF'
                  onChange={(cpf) => setCpfDigitado(cpf.target.value)}
                  value={cpfDigitado}
                  required
                />
                <button className='btnConfirmar' onClick={() => validarCpfParaRemocao()}>Confirmar</button>
                <button className='btnCancelar' onClick={() => { setInputRemocaoVisivel(null); setCpfDigitado(''); }}>Cancelar</button>
              </>
            )}
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}
