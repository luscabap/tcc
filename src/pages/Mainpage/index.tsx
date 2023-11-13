import SliderAuto from "../../components/Slider/SliderAuto";
import styles from "./Mainpage.module.scss";
import banner1 from '../../../public/assets/banner_1.png';

export default function Mainpage() {

  return (
    <>
      <div className={styles.container}>
        <div className="banner">
          <img src={banner1} alt="Banner da loja"className={styles.container__banner}/>
        </div>
        {/* <div className={styles.container__slider}>
          <SliderAuto />
        </div> */}
        <h2>NOVIDADES</h2>
          
      </div>
    </>
  );
}
