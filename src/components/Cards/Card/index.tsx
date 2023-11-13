import { FaRegHeart } from "react-icons/fa";
import styles from "./Card.module.scss";
import { IProdutoProps } from "../../../dtos/camisaDTO";
import { CarrinhoContext } from "../../../context/CarrinhoContext";
import { useContext } from "react";

type extraProps = {
  isCarrinho?: boolean;
};

export default function Card({
  imagem,
  titulo,
  preco,
  sobre,
  id,
  quantidade,
  isCarrinho,
}: IProdutoProps & extraProps) {
  const { adicionarProduto } = useContext(CarrinhoContext);

  return (
    <div className={styles.container} key={id}>
      <img
        src={imagem}
        alt="camisaImage"
        className={styles.imagemCamisa}
        width={350}
      />
      <div className={styles.containerInfos}>
        <h2 className={styles.titulo}>{titulo}</h2>
        {quantidade && (
          <p className={styles.preco}>
            <strong>QUANTIDADE</strong>: {quantidade}
          </p>
        )}
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
      {!isCarrinho && (
        <div className={styles.containerBotao}>
          <button
            className={styles.botaoComprar}
            onClick={() =>
              adicionarProduto({ imagem, titulo, preco, sobre, id })
            }
          >
            ADICIONAR AO CARRINHO
          </button>
          <FaRegHeart size={30} className={styles.botaoFavoritar} />
        </div>
      )}
    </div>
  );
}
