import './index.css';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Epi from './pages/Epi.jsx';
import Funcionario from './pages/Funcionario.jsx';
import CadastroEpi from './pages/CadastroEpi.jsx';
import CadastroFuncionario from './pages/CadastroFuncionario.jsx';
import Historico from './pages/Historico.jsx';
import ListaFuncionarios from './pages/ListaFuncionarios.jsx';
import ListaEpis from './pages/ListaEpis.jsx';
import RetirarEpi from './pages/RetirarEpi.jsx';
import DevolverEpi from './pages/DevolverEpi.jsx';
import EditarEpi from './pages/EditarEpi.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AppProvider from './context/AppContext.jsx';
import RemoverEpi from './pages/RemoverEpi.jsx';



const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/epi', element: < Epi /> },
  { path: '/funcionario', element: < Funcionario /> },
  { path: '/cadastro-epi', element: < CadastroEpi /> },
  { path: '/cadastro-funcionario', element: < CadastroFuncionario /> },
  { path: '/historico', element: <Historico /> },
  { path: '/lista-funcionarios', element: <ListaFuncionarios /> },
  { path: '/lista-epi', element: <ListaEpis /> },
  { path: '/retirar-epi/:id', element: <RetirarEpi /> },
  { path: '/devolver-epi/:id', element: <DevolverEpi /> },
  { path: '/editar-epi/:id', element: <EditarEpi /> },
  { path: '/remover-epi/:id', element: <RemoverEpi /> },

]);

createRoot(document.getElementById('root')).render(
  <>
    <AppProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </AppProvider>
  </>
);
