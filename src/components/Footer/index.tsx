import styles from './Footer.module.scss';
import { AiOutlineInstagram, AiOutlineFacebook, AiFillTwitterSquare, AiOutlineUser, AiOutlineMail, AiFillCreditCard, AiFillCheckSquare } 
from 'react-icons/ai';
import { FaCcVisa, FaCcMastercard, FaCcPaypal, FaGooglePay } from 'react-icons/fa'
import { MdPix, MdOutlineSecurity, MdOutlineSystemSecurityUpdateGood } from 'react-icons/md'

export default function Footer(){
    return (
        <>
            <footer className={styles.container}>
                <div className={styles.container__infos}>
                    <ul className={styles.container__infos__lista}>
                        <li className={styles.container__infos__lista__titulo}>FUNCIONAMENTO</li>
                        <li className={styles.container__infos__lista__item}>TELEFONE: (13) 3469-1234</li>
                        <li className={styles.container__infos__lista__item}>WHATSAPP: (13) 99123-4567</li>
                        <li className={styles.container__infos__lista__item}>EMAIL: CONTATO@NOMELOJA.COM.BR</li>
                        <li className={styles.container__infos__lista__item}>ATENDIMENTO</li>
                        <li className={styles.container__infos__lista__item}>SEGUNDA À SEXTA-FEIRA, DAS 09:00H ÀS 18:00H</li>
                        <li className={styles.container__infos__lista__item}>SÁBADO DAS 10:00 ÀS 16:00</li>
                    </ul>
                    <ul className={styles.container__infos__lista}>
                        <li className={styles.container__infos__lista__titulo}>REDES SOCIAIS</li>
                        <li className={styles.container__infos__lista__item}><AiOutlineInstagram size={30}/>Instagram</li>
                        <li className={styles.container__infos__lista__item}><AiOutlineFacebook size={30}/>Facebook</li>
                        <li className={styles.container__infos__lista__item}>< AiFillTwitterSquare size={30}/>Twitter</li>
                        <li className={styles.container__infos__lista__item}><AiOutlineUser size={30}/>Reclame Aqui</li>
                    </ul>
                    <ul className={styles.container__infos__lista}>
                        <li className={styles.container__infos__lista__titulo}>CONTEÚDO</li>
                        <li className={styles.container__infos__lista__item}>FALE CONOSCO</li>
                        <li className={styles.container__infos__lista__item}>FAQ</li>
                        <li className={styles.container__infos__lista__item}>SOBRE NÓS</li>
                        <li className={styles.container__infos__lista__item}>TROCAS E DEVOLUÇÕES</li>
                    </ul>
                    <div className={styles.container__infos__ofertas}>
                        <h3 className={styles.container__infos__ofertas__titulo}><AiOutlineMail size={40}/>RECEBA NOSSAS OFERTAS POR E-MAIL</h3>
                        <form className={styles.container__infos__ofertas__formulario}>
                            <input type='email' placeholder='Digite o seu e-mail'/>
                            <input type='submit' className={styles.container__infos__ofertas__formulario__enviar} value={"RECEBER OFERTAS"}/>
                        </form>
                    </div>
                </div>
                <div className={styles.container__pagamento}>
                    <div className={styles.container__pagamento__metodos}>
                        <p className={styles.container__pagamento__metodos__titulo}>PAGUE COM</p>
                        <div className={styles.container__pagamento__metodos__icones}>
                        <FaCcVisa size={45} color={"gray"} className={styles.container__pagamento__metodos__icones__item}/>
                        <AiFillCreditCard size={45} color={"gray"} className={styles.container__pagamento__metodos__icones__item}/>
                        <MdPix size={45} color={"gray"} className={styles.container__pagamento__metodos__icones__item}/>
                        <FaCcMastercard size={45} color={"gray"} className={styles.container__pagamento__metodos__icones__item}/>
                        <FaCcPaypal size={45} color={"gray"} className={styles.container__pagamento__metodos__icones__item}/>
                        <FaGooglePay size={45} color={"gray"} className={styles.container__pagamento__metodos__icones__item}/>
                        </div>
                    </div>
                    <div className={styles.container__pagamento__selo}>
                        <p className={styles.container__pagamento__metodos__titulo}>SELOS</p>
                        <div className={styles.container__pagamento__selo__selos}>
                            <abbr title="SITE CRIPTOGRAFADO"><MdOutlineSecurity size={55} color={"cyan"}/></abbr>
                            <abbr title="SEGUROS EM DISPOSITIVOS MÓVEIS"><MdOutlineSystemSecurityUpdateGood size={55} color={"gray"}/></abbr>
                            <abbr title="SITE COM MÉTODOS DE PAGAMENTOS VERIFICADOS"><AiFillCheckSquare size={55} color={"green"}/></abbr>
                        </div>
                    </div>
                </div>
                <p className={styles.container__sobre}>Site desenvolvido por Lucas Baptista - E-mail: lucasbaptistasilva.dev@gmail.com<strong>&copy; Todos os direitos reservados. 2023</strong></p>
            </footer>
        </>
    )
}