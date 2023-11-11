import Slider from "../../components/Slider";
import styles from "./Mainpage.module.scss";

export default function Mainpage() {

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.container__titulo}>PRODUTOS</h1>
        <div className={styles.container__slider}>
        <Slider />
        </div>
      </div>
    </>
  );
}
