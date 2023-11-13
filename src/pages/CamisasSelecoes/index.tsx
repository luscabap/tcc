import Cards from "../../components/Cards";
import styles from './CamisasSelecoes.module.scss';
import camisaSelecoes from '../../camisas_selecoes.json';

export default function CamisasSelecoes(){

    return (
        <>
            <div className={styles.container}>
                <h1 className={styles.container__titulo}>CAMISAS SELEÇÕES</h1>
                <Cards 
                    camisas={camisaSelecoes}
                />
            </div>
        </>
    )
}