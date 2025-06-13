import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Autenticação/Home';
import Criar_Conta from './pages/Autenticação/Criar_Conta';
import Erro404 from './pages/Autenticação/Erro404';
import Esqueceu_senha from './pages/Autenticação/Esqueceu_senha';
import Tela_inicial from './pages/Home/Tela';
import Quizzes_tela from './pages/Home/Quizzes';
import Meus_Certificados from './pages/Home/Certificados';
import Ranking_Page from './pages/Home/Ranking';
import Perfil_Page from './pages/Home/Perfil';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Criar_Conta" element={<Criar_Conta/>} />
        <Route path="/Esqueceu_senha" element={<Esqueceu_senha/>} />
        <Route path="/Home/Tela" element={<Tela_inicial/>} />
        <Route path="*" element={<Erro404/>} />
        <Route path="/Home/Quizzes" element={<Quizzes_tela/>} />
        <Route path="/Home/Ranking" element={<Ranking_Page/>} />
        <Route path="/Home/Certificados" element={<Meus_Certificados/>} />
        <Route path="/Home/Perfil" element={<Perfil_Page/>} />

      </Routes>
    </BrowserRouter>
  );
}
