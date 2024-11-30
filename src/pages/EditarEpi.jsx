import axios from 'axios';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import { useState } from 'react';

export default function EditarEpi() {
    const [epi, setEpi] = useState({
        nome: '',
        imagem: '',
        quantidade: ''
    });

    return (
        <>
            <Header titulo={'Editar EPI'} />

            <div className='container'>
                <div className='container-view'>

                </div>
            </div>

            <Footer />
        </>
    );
}
