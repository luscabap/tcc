import Card from "./Card";
import camisas from '../../camisas.json';
import styles from './Cards.module.scss'

export default function Cards(){
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
                            key={camisa.id}
                        />)
                }
            </ul>
        </>
    )
}