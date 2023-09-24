import { ShirtFolded, X } from "@phosphor-icons/react";
import styles from "./ModalLogin.module.scss";
import { NavLink } from "react-router-dom";
import { Dispatch } from "react";

type ModalProps = {
  isOpen : boolean;
  setOpenModal: Dispatch<React.SetStateAction<boolean>>;
}


function ModalLogin({ isOpen, setOpenModal }:ModalProps) {

  function closeModal(){
    setOpenModal(false)
  }

  if (isOpen) {
    return (
      <>
        <div className={styles.background_page}>
          <div className={styles.modal_login}>
            <div className={styles.container_modal}>
            <ShirtFolded size={150} color="#008F8C"/>
            <p className={styles.texto_cliente}>Já sou cliente</p>
            <input type="text" placeholder="Digite o seu e-mail" className={styles.input_login}/>
            <input type="text" placeholder="Digite a sua senha" className={styles.input_login}/>
            <p className={styles.botao_usuario}>Esqueci a minha senha</p>
            <NavLink to="/cadastro" onClick={closeModal}>
              <p className={styles.botao_usuario} >Ainda não tem cadastro? Clique aqui</p>
            </NavLink>
            <button className={styles.botao_fechar_modal} onClick={closeModal} >
              <X size={32} color={"#AB450C"} />
            </button>
            </div>
          </div>
        </div>
      </>
    );
  }

  return null;
}

export default ModalLogin;
