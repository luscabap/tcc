import Cards from "../../components/Cards";
import styles from './CamisasNacionais.module.scss';
import camisasNacionais from '../../camisas.json'

export default function CamisasNacionais() {

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.container__titulo}>CAMISAS NACIONAIS</h1>
        <Cards 
          camisas={camisasNacionais}
        />
      </div>
    </>
  );
}
