import {
  Heart,
  MagnifyingGlass,
  RocketLaunch,
  ShoppingCartSimple,
  User,
} from "@phosphor-icons/react";
import styles from "./Navbar.module.scss";
import ModalLogin from "../ModalLogin";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();
  function mudarRota(rota:string){
    navigate(`/${rota}`);
  }


  return (
    <nav className={styles.container}>
      <div className={styles.infos}>
        <div className={styles.info_logo} onClick={() => navigate("/")}>
          <RocketLaunch size={60} className={styles.logo} />
          <p className={styles.logo_txt}>DEV'S</p>
        </div>
        <div className={styles.container_pesquisa}> 
          <MagnifyingGlass size={32} className={styles.lupa} />
          <input
            type="text"
            placeholder="O que você está procurando?"
            className={styles.barra_pesquisa}
          />
        </div>
        <div className={styles.container_botoes}>
          <ShoppingCartSimple
            size={40}
            color={"#AB450C"}
            className={styles.botao}
            onClick={ () => mudarRota("carrinho")}
          />
          <Heart size={40} color={"#AB450C"} className={styles.botao} />
          <User
            size={45}
            color={"#AB450C"}
            className={styles.botao}
            onClick={() => setOpenModal(!openModal)}
          />
          <ModalLogin isOpen={openModal} setOpenModal={setOpenModal} />
        </div>
      </div>
      <ul className={styles.lista}>
        <li className={styles.item} onClick={() => mudarRota("camisasnacionais")}>CAMISAS NACIONAIS</li>
        <li className={styles.item} onClick={() => mudarRota("camisas_internacionais")}>CAMISAS INTERNACIONAIS</li>
        <li className={styles.item} onClick={() => mudarRota("camisas_selecoes")}>CAMISAS SELEÇÕES</li>
      </ul>
    </nav>
  );
}
