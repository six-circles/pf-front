import { useEffect, useState } from "react";
import styles from "./Slider.module.scss";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Slider = () => {
  const { products } = useSelector((state: any) => state.products);
  // const { products } = productsList;
  const navigate = useNavigate();

  const getRandomProducts = (products: any, count: number) => {
    if (count >= products.length) {
      return products;
    }
    const shuffled = products.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const randomProducts = getRandomProducts(products, 3);

  const [slide, setSlide] = useState(0);
  let cant: number;
  // products.length > 2 ? cant = 3 : cant = 1;
  cant = randomProducts.length;

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
          {randomProducts[slide]?.image[slide] && (
            <img className={styles.image} src={products[slide].image[0].url} alt="" />
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
            <button onClick={() => navigate(`/detail/${products[slide]._id}`)}>Ver detalles</button>
          </div>
        </div>
      </div>

      <button onClick={goToPrevSlide} className={styles.prevButton}></button>
      <button onClick={goToNextSlide} className={styles.nextButton}></button>
    </div>
  );
};

export default Slider;
