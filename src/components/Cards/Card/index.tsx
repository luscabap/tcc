import { FaRegHeart } from "react-icons/fa";
import { useCarrinhoContext } from "../../../context/CarrinhoContext";
import styles from "./Card.module.scss";

interface ICardProps {
  imagem: string;
  titulo: string;
  preco: string;
  sobre: string;
  id: string;
  quantidade?: number;
}

export default function Card({ imagem, titulo, preco, sobre, id, quantidade }: ICardProps) {

  const { carrinho, adicionarProduto } = useCarrinhoContext();

  const produtoNoCarrinho = carrinho.find(itemDoCarrinho => itemDoCarrinho.id === id)

  return (
    <>
        <div className={styles.container} key={id}>
          <img
            src={imagem}
            alt="camisa do Santos"
            className={styles.imagemCamisa}
            width={350}
          />
          <div className={styles.containerInfos}>
            <h2 className={styles.titulo}>{titulo}</h2>
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
            <button className={styles.botaoComprar}>
              ADICIONAR AO CARRINHO
            </button>
            <FaRegHeart 
              size={30} 
              className={styles.botaoFavoritar} 
              onClick={() => adicionarProduto({ imagem, titulo, preco, sobre, id, quantidade })}/>
          </div>
        </div>
    </>
  );
}
