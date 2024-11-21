import '../styles/EditEpi.css';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

export default function EditEpi() {
  return (
    <>
      <Header titulo={"Bonde da S.A."} />
      <div className="container">
        <div className="container-historico">
          <h2>Editar/Remover</h2>
          <div className="historico-area">
            <p>Esta área será usada para exibir os EPis.</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
