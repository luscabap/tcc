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

export default function Navbar() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <nav className={styles.container}>
      <div className={styles.infos}>
        <div className={styles.info_logo}>
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
        <li className={styles.item}>CAMISAS NACIONAIS</li>
        <li className={styles.item}>CAMISAS INTERNACIONAIS</li>
        <li className={styles.item}>CAMISAS SELEÇÕES</li>
      </ul>
    </nav>
  );
}
