import { BrowserRouter, Routes, Route } from "react-router-dom";
//npm install react-router-dom  =  biblioteca de roteamento, Criar rotas e navegar entre elas
//npm install --save-dev @types/react-router-dom  =  pacote de declaração de tipo
import { Home } from "./Pages/home";
import { Produto } from "./Pages/produto";
import { Contato } from "./Pages/contato";
import { Empresa } from "./Pages/empresa";
import { Cart } from "./Pages/cart";

// 💡 Defina o nome do seu repositório aqui
const REPO_NAME = "classhero"; 

// O basename é "/" localmente (DEV) e "/nome-do-repositorio/" no deploy (PROD)
const BASE_NAME = 
  import.meta.env.DEV 
  //É uma variável booleana que o Vite injeta. Quando você roda dev e for true será "/" do contrario será o nome do repositório
    ? "/" 
    : `/${REPO_NAME}/`; // Agora aponta para /classhero/

const App = () => {
  return (
    // Adicione a propriedade 'basename' ao BrowserRouter
    <BrowserRouter basename={BASE_NAME}>
      <Routes>
        {/* As rotas internas permanecem com a barra ('/') */}
        <Route path="/" element={<Home />} />
        <Route path="/empresa" element={<Empresa />} />
        <Route path="/produto" element={<Produto />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;

/*https://grainient.supply/

voce consegue ver que nesse site tem o scroll do mouse com um efeito sutil?
eu uso components no meu app.tsx usando react e vitejs. tem como fazer isso para todas as paginas?


talvez usando?
npm install react-scroll
npm install --save-dev @types/react-scroll 

esse é o meu app.tsx:
import { BrowserRouter, Routes, Route } from 'react-router-dom';
  //npm install react-router-dom  =  biblioteca de roteamento, Criar rotas e navegar entre elas
  //npm install --save-dev @types/react-router-dom  =  pacote de declaração de tipo
import { Home } from './Pages/home';
import { Produto} from './Pages/produto';
import { Contato } from './Pages/contato';
import { Empresa } from './Pages/empresa';
import { Cart } from './Pages/cart';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/empresa" element={<Empresa />} />
        <Route path="/produto" element={<Produto />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;*/
