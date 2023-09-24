import Card from "../../components/Card";
import styles from "./Mainpage.module.scss";

export default function Mainpage() {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.titulo}>PRODUTOS</h1>
        <div className={styles.container_card}>
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
}
