import '../styles/Historico.css';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

export default function Historico() {
  return (
    <>
      <Header titulo={"Bonde da S.A."} />
      <div className="container">
        <div className="container-historico">
          <h2>Histórico de Pedidos</h2>
          <div className="historico-area">
            <p>Esta área será usada para exibir o histórico de pedidos.</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
