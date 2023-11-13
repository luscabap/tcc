import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Cadastro } from "./pages/Cadastro";
import Mainpage from "./pages/Mainpage";
import { Carrinho } from "./pages/Carrinho";
import styles from './styles/GlobalStyles.module.scss';
import CamisasNacionais from "./pages/CamisasNacionais";
import { CarrinhoProvider } from "./context/CarrinhoContext";
import CamisasInternacionais from "./pages/CamisasInternacionais";
import CamisasSelecoes from "./pages/CamisasSelecoes";


function AppRoutes() {

  return (
    <div className={styles.container}>
      <BrowserRouter>
        <Navbar />
        <CarrinhoProvider>
          <Routes>
            <Route path="/" element={<Mainpage />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/carrinho" element={<Carrinho />} />
            <Route path="/camisasnacionais" element={<CamisasNacionais />} />
            <Route path="/camisas_internacionais" element={<CamisasInternacionais />} />
            <Route path="/camisas_selecoes" element={<CamisasSelecoes />} />
          </Routes>
        </CarrinhoProvider>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default AppRoutes;
