import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Cadastro } from "./pages/Cadastro";
import Mainpage from "./pages/Mainpage";

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