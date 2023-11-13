import styles from "./Cadastro.module.scss";
import { AiOutlineMail, AiFillPhone, AiOutlineClear } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { BsFillCalendarDateFill } from 'react-icons/bs';
import { FaUserSecret, FaPaperPlane } from 'react-icons/fa'

export function Cadastro() {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.container__titulo}>CADASTRE-SE AQUI!</h1>
        <form className={styles.container__form}>
          <div className={styles.container__form__infos}>
            <label className={styles.container__form__infos__label}><AiOutlineMail className={styles.container__form__infos__label__icone} size={25}/>E-MAIL</label>
            <input className={styles.container__form__infos__input} placeholder="Digite o seu e-mail" type="email" />
          </div>
          <div className={styles.container__form__infos}>
            <label className={styles.container__form__infos__label}><CgProfile className={styles.container__form__infos__label__icone} size={25}/>NOME</label>
            <input className={styles.container__form__infos__input} placeholder="Digite o seu nome" type="text" />
          </div>
          <div className={styles.container__form__infos}>
            <label className={styles.container__form__infos__label}><AiFillPhone className={styles.container__form__infos__label__icone} size={25}/>NÚMERO DE CELULAR</label>
            <input className={styles.container__form__infos__input} placeholder="Digite o seu número de celular" type="tel" />
          </div>
          <div className={styles.container__form__infos}>
            <label className={styles.container__form__infos__label}><BsFillCalendarDateFill className={styles.container__form__infos__label__icone} size={25}/>DATA DE NASCIMENTO</label>
            <input className={styles.container__form__infos__input} placeholder="Digite a sua data de nascimento" type="date" />
          </div>
          <div className={styles.container__form__infos}>
            <label className={styles.container__form__infos__label}><FaUserSecret className={styles.container__form__infos__label__icone} size={25}/>SENHA</label>
            <input className={styles.container__form__infos__input} placeholder="Digite a sua senha" type="password" />
          </div>
          <div className={styles.container__form__infos}>
            <label className={styles.container__form__infos__label}><FaUserSecret className={styles.container__form__infos__label__icone} size={25}/>CONFIRME A SENHA</label>
            <input className={styles.container__form__infos__input} placeholder="Confirme a sua senha" type="password" />
          </div>
          <div className={styles.container__form__containerBotao}>
            <button type="submit" className={styles.container__form__containerBotao__botao}><FaPaperPlane size={35}/>ENVIAR</button>
            <button type="reset"className={styles.container__form__containerBotao__botao}><AiOutlineClear size={35}/>LIMPAR</button>
          </div>
        </form>
      </div>
    </>
  );
}
