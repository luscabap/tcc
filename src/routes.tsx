import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mainpage from "./pages/Mainpage";
import Navbar from "./components/Navbar";
import { Cadastro } from "./pages/Cadastro";
import Footer from "./components/Footer";

function AppRoutes(){
    return(
        <BrowserRouter>
        <Navbar/>
            <Routes>
                <Route path="/" element={<Mainpage />} />
                <Route path="/cadastro" element={<Cadastro />} />
            </Routes>
        <Footer />
        </BrowserRouter>
    )
}

export default AppRoutes;