import Card from "../../components/Cards/Card";
import { useContext } from "react";
import styles from "./Carrinho.module.scss";
import { CarrinhoContext } from "../../context/CarrinhoContext";

export function Carrinho() {
  const { carrinho } = useContext(CarrinhoContext);

  return (
    <>
      <h1>CARRINHO</h1>
      <div className={styles.container}>
        {carrinho.map((p) => {
          return (
            <Card
              key={p.titulo}
              id={p.id}
              imagem={p.imagem}
              preco={p.preco}
              sobre={p.sobre}
              titulo={p.titulo}
              quantidade={p.quantidade}
              isCarrinho={true}
            />
          );
        })}
      </div>
    </>
  );
}
