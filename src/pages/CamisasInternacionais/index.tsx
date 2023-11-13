import Cards from "../../components/Cards";
import styles from './CamisasInternacionais.module.scss';
import camisasInternacionais from '../../camisas_internacionais.json'

export default function CamisasInternacionais(){
    return (
        <>
            <div className={styles.container}>
                <h1 className={styles.container__titulo}>CAMISAS INTERNACIONAIS</h1>
                <Cards 
                    camisas={camisasInternacionais}
                />
            </div>
        </>
    )
}