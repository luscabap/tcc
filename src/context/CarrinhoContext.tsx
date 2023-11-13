import { createContext, useContext, useState, useEffect } from "react";

export const CarrinhoContext = createContext();
CarrinhoContext.displayName = "Carrinho";

interface ICarrinhoProps {
    children: JSX.Element
}

interface IProdutoProps{
    imagem: string;
    titulo: string;
    preco: string;
    sobre: string;
    id: string;
    quantidade?: number;
  }

export const CarrinhoProvider = ({ children }: ICarrinhoProps) => {
    const [carrinho, setCarrinho] = useState<never[]>([]);
    const [quantidadeProdutos, setQuantidadeProdutos] = useState(0)

    return(
        <CarrinhoContext.Provider 
            value={{ 
                carrinho, 
                setCarrinho,
                quantidadeProdutos,
                setQuantidadeProdutos
            }}>
            {children}
        </CarrinhoContext.Provider>
    )
}

export const useCarrinhoContext = () => {
    const { 
        carrinho,
        setCarrinho,
    } = useContext(CarrinhoContext);

    function adicionarProduto(novoProduto: IProdutoProps){
        const temOProduto = carrinho.some(itemDoCarrinho => itemDoCarrinho.id === novoProduto.id)
    
        if(!temOProduto){
          novoProduto.quantidade = 1;
          return setCarrinho(prevCarrinho => 
            [...prevCarrinho, novoProduto]
          )
        }
        setCarrinho(prevCarrinho => prevCarrinho.map(itemDoCarrinho => {
          if(itemDoCarrinho.id === novoProduto.id) itemDoCarrinho.quantidade += 1;
          return itemDoCarrinho
        }))
      }

    return {
        carrinho,
        setCarrinho,
        adicionarProduto,
    }
}