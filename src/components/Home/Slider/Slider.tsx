import { useEffect, useState } from "react";
import styles from "./Slider.module.scss";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Slider = () => {
  const { products } = useSelector((state: any) => state.products);
  // const { products } = productsList;
  const navigate = useNavigate();

  const [slide, setSlide] = useState(0);
  const cant = 3;

  const handleClick = () => {
    navigate(`/detail/${products[slide]._id}`);
    window.scrollTo(0, 0);
  };

  const goToPrevSlide = () => {
    slide > 0 ? setSlide(slide - 1) : setSlide(cant - 1);
  };

  const goToNextSlide = () => {
    slide < cant - 1 ? setSlide(slide + 1) : setSlide(0);
  };

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
        <div className={styles.contImage} onClick={handleClick}>
          {products[slide]?.image[0] && (
            <img className={styles.image} src={products[slide].image} alt="" />
          )}
        </div>
        <div className={styles.contDesc}>
          <div className={styles.desc}>
            <h2 onClick={handleClick}>{products[slide]?.title}</h2>
            <br />
            <p>
              {products[slide]?.description.length > 250
                ? products[slide]?.description.slice(0, 250) + "..."
                : products[slide]?.description}
            </p>
            <br />
            {/* <button>Añadir al carrito</button> */}
          </div>
        </div>
      </div>

      <button onClick={goToPrevSlide} className={styles.prevButton}></button>
      <button onClick={goToNextSlide} className={styles.nextButton}></button>
    </div>
  );
};

export default Slider;
