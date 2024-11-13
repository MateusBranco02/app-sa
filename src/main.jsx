import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import Home from './pages/Home.jsx';
import Epi from './pages/Epi.jsx';
import Funcionario from './pages/Funcionario.jsx';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/epi', element: < Epi />},
  { path: '/funcionario', element: < Funcionario />}
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
