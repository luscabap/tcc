import Card from '../../components/Cards/Card';
import { useCarrinhoContext } from '../../context/CarrinhoContext';
import styles from './Carrinho.module.scss';

export function Carrinho(){
    const { carrinho } = useCarrinhoContext();
    console.log(carrinho);

    return(
        <>
        <h1>CARRINHO</h1>
            <div className={styles.container}>
                {carrinho.map(camisa => {
                    <Card 
                        imagem={camisa.imagem}
                        titulo={camisa.titulo}
                        preco={camisa.preco}
                        sobre={camisa.sobre}
                        id={camisa.id}
                        key={camisa.id}
                    />
                })}
            </div>
        </>
    )
}