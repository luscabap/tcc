import { Check } from "@phosphor-icons/react";
import { useState } from "react";
import styles from "../ModalLogin.module.scss";

export default function AlterarModalEfetuarLogin() {
  const [changeInput, setChangeInput] = useState(true);

  return (
    <>
      {changeInput ? (
        <>
          <input
            type="email"
            placeholder="Digite o seu e-mail"
            className={styles.input_login}
          />
          <input
            type="password"
            placeholder="Digite a sua senha"
            className={styles.input_login}
          />
          <Check size={32} className={styles.botaoEnviar} />
          <p
            className={styles.botao_usuario}
            onClick={() => setChangeInput(!changeInput)}
          >
            Esqueci a minha senha
          </p>
        </>
      ) : (
        <>
          <input
            type="email"
            placeholder="Digite o seu e-mail para enviarmos o link de recuperação"
            className={styles.input_login}
          />
          <Check size={32} className={styles.botaoEnviar}/>
          <p
            className={styles.botao_usuario}
            onClick={() => setChangeInput(!changeInput)}
          >
            Efetuar Login
          </p>
        </>
      )}
    </>
  );
}
