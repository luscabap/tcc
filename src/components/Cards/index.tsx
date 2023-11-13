import Card from "./Card";
import styles from './Cards.module.scss';

type TypeCamisa = {
    titulo: string;
    preco: string;
    sobre: string;
    imagem: string;
    id: string;
}

interface ICardProsp{
    camisas: TypeCamisa[];
}

export default function Cards({ camisas }: ICardProsp){
    return (
        <>
            <ul className={styles.container}>
                {
                    camisas.map(camisa => 
                        <Card
                            imagem={camisa.imagem}
                            titulo={camisa.titulo}
                            preco={camisa.preco}
                            sobre={camisa.sobre}
                            id={camisa.id}
                        />)
                }
            </ul>
        </>
    )
}