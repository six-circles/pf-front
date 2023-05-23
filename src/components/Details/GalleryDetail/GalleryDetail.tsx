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

  useEffect(() => {
    setSlide(0);
  }, []);

  return (
    <div className={styles.contGallery}>
      <div className={styles.carousel}>
        <div className={styles.thumbnails}>
          {props.detail.image &&
            props.detail.image.map((elem: string, index: number) => {
              return (
                <div
                  key={index}
                  onClick={() => setSlide(index)}
                  className={
                    index === slide ? styles.thumbnailAct : styles.thumbnail
                  }
                >
                  <img src={elem} alt="" />
                </div>
              );
            })}
        </div>
      </div>
      <div className={styles.slideMax}>
        <div className={styles.slide}>
          {props.detail.image && <img
            className={styles.image}
            src={props.detail?.image[slide]}
            onClick={openImageSlide}
          />}

          {isOpened && (
            <div className={styles.overlay} onClick={closeImageSlide}>
              <div className={styles.slide2}>
                <img className={styles.enlarged} src={props.detail?.image[slide]} />
                <button className={styles.closeButton} onClick={closeImageSlide}>
                  <AiFillCloseCircle clasName={styles.icon} />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

    </div>
  );
};

export default GalleryDetail;
