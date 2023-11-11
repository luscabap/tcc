import { ShirtFolded, X } from "@phosphor-icons/react";
import { Dispatch } from "react";
import { NavLink } from "react-router-dom";
import AlterarModalEfetuarLogin from "./Components/Components";
import styles from "./ModalLogin.module.scss";

type ModalProps = {
  isOpen: boolean;
  setOpenModal: Dispatch<React.SetStateAction<boolean>>;
};

function ModalLogin({ isOpen, setOpenModal }: ModalProps) {
  function closeModal() {
    setOpenModal(false);
  }

  if (isOpen) {
    return (
      <>
        <div className={styles.background_page}>
          <div className={styles.modal_login}>
            <div className={styles.container_modal}>
              <ShirtFolded size={150} color="#008F8C" />
              <p className={styles.texto_cliente}>Já sou cliente</p>
              <AlterarModalEfetuarLogin />
              <NavLink to="/cadastro" onClick={closeModal}>
                <p className={styles.botao_usuario}>
                  Ainda não tem cadastro? Clique aqui
                </p>
              </NavLink>
              <button
                className={styles.botao_fechar_modal}
                onClick={closeModal}
              >
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
