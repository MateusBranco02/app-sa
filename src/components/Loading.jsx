import Footer from './Footer.jsx';
import Header from './Header.jsx';
import '../styles/Loading.css';

export default function Loading() {

    return (
        <>
            <Header />
            <div className='contairner'>
                <div className='container-loading'>
                    <p> Carregando as informações...</p>
                </div>
            </div>
            <Footer />
        </>


    );

}