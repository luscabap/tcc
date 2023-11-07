import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Cadastro } from "./pages/Cadastro";
import Mainpage from "./pages/Mainpage";
import { Carrinho } from "./pages/Carrinho";
import styles from './styles/GlobalStyles.module.scss';
import CamisasNacionais from "./pages/CamisasNacionais";

function AppRoutes() {
  return (
    <div className={styles.container}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/carrinho" element={<Carrinho />} />
          <Route path="/camisasnacionais" element={<CamisasNacionais />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default AppRoutes;
