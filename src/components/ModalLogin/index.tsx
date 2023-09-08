import { X } from "@phosphor-icons/react";
import styles from "./ModalLogin.module.scss";

function ModalLogin({ isOpen, setOpenModal }) {
  if (isOpen) {
    return (
      <>
        <div className={styles.background_page}>
          <div className={styles.modal_login}>
            <div className={styles.container_modal}>
            <p className={styles.texto_cliente}>Já sou cliente</p>
            <input type="text" placeholder="Digite o seu e-mail" className={styles.input_login}/>
            <input type="text" placeholder="Digite a sua senha" className={styles.input_login}/>
            <p className={styles.botao_usuario}>Esqueci a minha senha</p>
            <p className={styles.botao_usuario}>Ainda não tem cadastro? Clique aqui</p>
            <button className={styles.botao_fechar_modal} onClick={() => setOpenModal(false)} >
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
