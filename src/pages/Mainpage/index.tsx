import styles from "./Mainpage.module.scss";
import banner1 from '../../../public/assets/banner_1.png';
import atendimento from '../../../public/assets/ATENDIMENTO.png';

export default function Mainpage() {

  return (
    <>
      <div className={styles.container}>
        <div className="banner">
          <img src={banner1} alt="Banner da loja" className={styles.container__banner} />
        </div>
        <img src={atendimento} alt="Atendimento" className={styles.container__atendimento} />
        {/* <div className={styles.container__slider}>
          <SliderAuto />
        </div> */}    
      </div>
    </>
  );
}
