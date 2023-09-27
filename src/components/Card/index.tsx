import camisaSantos from "../../../public/assets/camisa_santos.png";
import styles from "./Card.module.scss";

export default function Card() {
  return (
    <>
      <div className={styles.container}>
        <div>
          <h1 className={styles.titutlo}>Santos FC</h1>
          <img src={camisaSantos} alt="camisa do Santos" />
        </div>
        <div className={styles.containerInformacoes}>
          <p className={styles.preco}>
            <strong>PREÇO</strong>: R$ 149,90
          </p>
          <div className={styles.container_tamanhoCamisa}>
            <p>Selecione o tamanho da camisa</p>
            <select className={styles.containerOpcoes}>
              <option>P</option>
              <option>M</option>
              <option>G</option>
              <option>GG</option>
            </select>
          </div>
          <p className={styles.descricaoTime}>O MAIOR TIME DA TERRA</p>
        </div>
        <button className={styles.botaoComprar}>ADICIONAR AO CARRINHO</button>
      </div>
    </>
  );
}
