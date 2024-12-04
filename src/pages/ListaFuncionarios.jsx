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
  const [mostrarInput, setMostrarInput] = useState(null);
  const [cpfInformado, setCpfInformado] = useState('');
  const [avisoRemover, setAvisoRemover] = useState(null);
  const [funcionario, setFuncionario] = useState(null);
  const [carregando, setCarregando] = useState(false);

  const navigate = useNavigate();

  const formatarFuncionarioComMascara = funcionarios.map(funcionario => ({
    ...funcionario,
    telefone: funcionario.telefone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3'),
    cpf: funcionario.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.*.*-**'),
    email: funcionario.email.replace(/(^.{2})(.)(@.)/, (match, p1, p2, p3) => `${ p1 } ${ '*'.repeat(p2.length) }${ p3 }`),
  }));

  const removerMascara = (cpf) => cpf.replace(/\D/g, '');

  const validarCpf = async (idFuncionario) => {
    setCarregando(true);
    try {
      const cpfSemMascara = removerMascara(cpfInformado);
      const response = await axios.post(`http://localhost:3000/validar-cpf/${idFuncionario}, { cpf: cpfSemMascara }`);
            if (response.status === 200) {
        navigate(`/editar-funcionario/${ idFuncionario }`);
        setCarregando(false);
      }
    } catch (error) {
      toast.error('CPF inválido!');
      console.log(error);
    }
  }

  const removerFuncionario = async (id) => {
    setCarregando(true);
    try {
      const url = `http://localhost:3000/deletar-funcionario/${id}`;
      const response = await axios.delete(url);
      carregarDados();
      toast.success('Funcionário removido com sucesso!');
      setAvisoRemover(null);
      setCarregando(false);
    } catch (error) {
      toast.error('Erro ao tentar remover o funcionário!');
      console.log('Erro ao tentar remover o funcionário!', error);
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
                    <Link to='#' onClick={(e) => { e.preventDefault(); setMostrarInput(funcionario.id) }}><BiSolidEdit /></Link>
                    {mostrarInput === funcionario.id && (
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
                              value={cpfInformado}
                              onChange={(cpf) => setCpfInformado(cpf.target.value)}
                              required
                            />
                            <button onClick={() => validarCpf(funcionario.id)}>Confirmar</button>
                            <button onClick={() => { setMostrarInput(null); setCpfInformado(''); }}>Cancelar</button>
                          </>
                        )}
                      </div>
                    )}
                    <Link to='#' onClick={() => {
                      setAvisoRemover(funcionario.id);
                      setFuncionario(funcionario.nome);
                    }}>
                      <MdDelete />
                    </Link>
                  </div>
                </li>
              )}
            </ul>
          </div>
        </div>

        {avisoRemover && (
          <div className='container-aviso'>
            <div className='container-campo-aviso'>
              {carregando ? (
                <h3>Removendo funcionário...</h3>
              ) : (
                <>
                  <h3>Tem certeza que deseja remover o usuário: {funcionario}?</h3>
                  <div className='container-validar-cpf'>
                    <InputMask
                      className='input-cpf'
                      mask='999.999.999-99'
                      placeholder='Informe o CPF'
                      value={cpfInformado}
                      onChange={(cpf) => setCpfInformado(cpf.target.value)}
                      required
                    />
                  </div>

                  <div className='container-botao'>
                    <button
                      className='btnConfirmar'
                      onClick={() => {
                        const funcionarioSelecionoado = funcionarios.find(funcionario => funcionario.id === avisoRemover);
                        const cpfSemMascara = removerMascara(cpfInformado);
                        if (funcionarioSelecionoado && funcionarioSelecionoado.cpf === cpfSemMascara) {
                          removerFuncionario(avisoRemover);
                        } else {
                          toast.error('CPF informado não corresponde ao do funcionário selecionado!');
                        }
                        setCpfInformado('');
                      }}
                    >
                      Confirmar
                    </button>
                    <button
                      className='btnCancelar'
                      onClick={() => {
                        setAvisoRemover(null);
                        setCpfInformado('');
                      }}
                    >
                      Cancelar
                    </button>
                  </div>

                </>
              )}

            </div>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}