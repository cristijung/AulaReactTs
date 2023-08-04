
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Galeria from './pages/galeria';
import NotFound from './pages/notFound';
import Texto from './pages/texto';
import MenuFilho from './component/menuFilho';
//import Menu from './component/menu';

function App() {
  return (
    <>
    <h1>Aula II - Router + Props + States</h1>
    <hr/>
      <BrowserRouter>
      <MenuFilho />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/galeria' element={<Galeria />} />
          <Route path='/texto' element={<Texto />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    
    </>
  );
}

export default App;
