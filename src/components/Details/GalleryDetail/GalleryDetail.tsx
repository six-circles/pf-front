import { useEffect, useState } from "react";
import styles from "./GalleryDetail.module.scss";

const GalleryDetail = (props: any) => {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    setSlide(0);
  }, []);

  return (
    <div className={styles.contGallery}>
      <div className={styles.slideMax}>
        <div className={styles.slide}>
          {props.detail.image && (
            <img src={props.detail.image[slide]} alt="Imagen Principal" />
          )}
        </div>
      </div>
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
    </div>
  );
};

export default GalleryDetail;
