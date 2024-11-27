import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import Home from './pages/Home.jsx';
import Epi from './pages/Epi.jsx';
import Funcionario from './pages/Funcionario.jsx';
import CadastroEpi from './pages/CadastroEpi.jsx';
import CadastroFuncionario from './pages/CadastroFuncionario.jsx';
import Historico from './pages/Historico.jsx';
import EditFuncionario from './pages/EditFuncionario.jsx';
import EditEpi from './pages/EditEpi.jsx'
import RetirarEpi from './pages/RetirarEpi..jsx';
import DevolverEpi from './pages/DevolverEpi.jsx';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/epi', element: < Epi />},
  { path: '/funcionario', element: < Funcionario />},
  { path: '/cadastroEpi', element: < CadastroEpi />},
  { path: '/cadastroFuncionario', element: < CadastroFuncionario />},
  {path: '/historico', element: <Historico/>},
  {path: '/editar-remover', element: <EditFuncionario/>},
  {path: '/epi-cadastro', element: <EditEpi/>},
  {path: '/retirar-epi/:id', element:<RetirarEpi/>},
  {path: '/devolver-epi/:id', element:<DevolverEpi/>}
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
