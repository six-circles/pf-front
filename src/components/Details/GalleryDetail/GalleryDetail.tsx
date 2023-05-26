import { useEffect, useState } from "react";
import styles from "./GalleryDetail.module.scss";
import { AiFillCloseCircle } from "react-icons/ai";

const GalleryDetail = (props: any) => {
  const [slide, setSlide] = useState(0);
  const [isOpened, setIsOpened] = useState(false);

  const openImageSlide = () => {
    setIsOpened(true);
  };

  const closeImageSlide = () => {
    setIsOpened(false);
  };

  let cant: number = props.detail?.image?.length;
  // props.detail.image.length > 2 ? cant = 3 : cant = 1;

  const goToPrevSlide = () => {
    slide > 0 ? setSlide(slide - 1) : setSlide(cant - 1);
    setIsOpened(true);
  };

  const goToNextSlide = () => {
    slide < cant - 1 ? setSlide(slide + 1) : setSlide(0);
    setIsOpened(true);
  };

  return (
    <div className={styles.contGallery}>
      <div className={styles.carousel}>
        <div className={styles.thumbnails}>
          {props.detail.image &&
            props.detail.image.map((elem: any, index: number) => {
              return (
                <div
                  key={index}
                  onClick={() => setSlide(index)}
                  className={
                    index === slide ? styles.thumbnailAct : styles.thumbnail
                  }
                >
                  <img className={styles.imgThumb} src={elem.url} alt="" />
                </div>
              );
            })}
        </div>
      </div>
      <div className={styles.slideMax}>
        <div className={styles.slide}>
          {props.detail.image && (
            <img
              className={styles.image}
              src={props.detail?.image[slide].url}
              onClick={openImageSlide}
            />
          )}

          {isOpened && (
            <div className={styles.overlay}>
              <div className={styles.slide2}>
                <img
                  className={styles.enlarged}
                  src={props.detail?.image[slide]}
                />
                <button
                  className={styles.closeButton}
                  onClick={closeImageSlide}
                >
                  <AiFillCloseCircle size={35} />
                </button>

                <button
                  onClick={goToPrevSlide}
                  className={styles.prevButton}
                ></button>
                <button
                  onClick={goToNextSlide}
                  className={styles.nextButton}
                ></button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GalleryDetail;
