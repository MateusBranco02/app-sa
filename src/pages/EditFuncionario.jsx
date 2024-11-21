import '../styles/EditFuncionario.css';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

export default function EditFuncionario() {
  return (
    <>
      <Header titulo={"Bonde da S.A."} />
      <div className="container">
        <div className="container-historico">
          <h2>Editar/Remover</h2>
          <div className="historico-area">
            <p>Esta área será usada para exibir os funcionarios.</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
