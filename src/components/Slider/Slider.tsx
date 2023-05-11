import { useEffect, useState } from "react";
import styles from "./Slider.module.scss"

const Slider = (props: any) => {

  const [slide, setSlide] = useState(0);
  const cant = props.data.length;

  const goToPrevSlide = () => {
    (slide > 0) ? setSlide(slide - 1) : setSlide(cant - 1);
  }

  const goToNextSlide = () => {
    (slide < cant - 1) ? setSlide(slide + 1) : setSlide(0);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      goToNextSlide();
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [slide]);

  return (
    <div className={styles.carousel}>
      <div className={styles.slider}>
        <div className={styles.contImage}>
          <img className={styles.image} src={props.data[slide].img} alt="" />
        </div>
        <div className={styles.contDesc}>
          <div className={styles.desc}>
            <h2>{props.data[slide].title_1}</h2><br />
            <p>{props.data[slide].description}</p><br />
            <button>Añadir al carrito</button>
          </div>
        </div>
      </div>

      <button onClick={goToPrevSlide} className={styles.prevButton}></button>
      <button onClick={goToNextSlide} className={styles.nextButton}></button>
    </div>

  )
}

export default Slider;