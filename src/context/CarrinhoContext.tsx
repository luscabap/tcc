import { Dispatch, SetStateAction, createContext, useState } from "react";
import { IProdutoProps } from "../dtos/camisaDTO";

type CarrinhoContext = {
  carrinho: IProdutoProps[];
  setCarrinho: SetStateAction<Dispatch<IProdutoProps[]>>;
  adicionarProduto: (novoProduto: IProdutoProps) => void;
};

export const CarrinhoContext = createContext({} as CarrinhoContext);
CarrinhoContext.displayName = "Carrinho";

interface ICarrinhoProps {
  children: JSX.Element;
}

export const CarrinhoProvider = ({ children }: ICarrinhoProps) => {
  const [carrinho, setCarrinho] = useState<IProdutoProps[]>([]);

  function adicionarProduto(novoProduto: IProdutoProps) {
    if (carrinho.some((produto) => produto.titulo === novoProduto.titulo)) {
      const produtoExistente = carrinho.find(
        (produto) => produto.titulo === novoProduto.titulo
      );
      produtoExistente.quantidade++;
      return setCarrinho([...carrinho]);
    }
    novoProduto.quantidade = 1;
    setCarrinho([...carrinho, novoProduto]);
  }

  return (
    <CarrinhoContext.Provider
      value={{
        carrinho,
        setCarrinho,
        adicionarProduto,
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
};
