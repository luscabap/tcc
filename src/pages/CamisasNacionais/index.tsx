import Cards from "../../components/Cards";
import styles from './CamisasNacionais.module.scss'

export default function CamisasNacionais() {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.container__titulo}>PRODUTOS</h1>
        <Cards />
      </div>
    </>
  );
}
