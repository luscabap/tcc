import styles from "./Card.module.scss";
import { FaRegHeart } from "react-icons/fa";

interface ICardProps {
  imagem: string,
  titulo: string,
  preco: string,
  sobre: string
}

export default function Card({ imagem, titulo, preco, sobre }: ICardProps) {
  return (
    <>
      <div className={styles.container}>
          <img src={imagem} alt="camisa do Santos" className={styles.imagemCamisa} width={350}
          />
        <div className={styles.containerInfos}>
          <h2 className={styles.titulo}>
            {titulo}
          </h2>
          <p className={styles.preco}>
            <strong>PREÇO</strong>: R$ {preco}
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
          <p className={styles.descricaoTime}>{sobre}</p>
        </div>
        <div className={styles.containerBotao}>
          <button className={styles.botaoComprar}>ADICIONAR AO CARRINHO</button>
          <FaRegHeart size={30} className={styles.botaoFavoritar} />
        </div>
      </div>
    </>
  );
}
