import { useState } from "react";
import styles from "./GalleryDetail.module.scss";

const GalleryDetail = (props: any) => {
  const [slide, setSlide] = useState(0);

  return (
    <div className={styles.contGallery}>
      <div className={styles.slideMax}>
        <div className={styles.slide}>
          <img src={props.data[slide].img} alt="" />
        </div>
      </div>
      <div className={styles.carousel}>
        <div className={styles.thumbnails}>
          {props.data.map((elem: any, index: any) => {
            return (
              <div onClick={() => setSlide(index)} className={styles.thumbnail}>
                <img src={elem.img} alt="" />
              </div>
            );
          })}

          {/* <div className={styles.thumbnail}>
            <img src={props.data[slide].img} alt="" />
          </div>
          <div className={styles.thumbnail}>
            <img src={props.data[slide].img} alt="" />
          </div>
          <div className={styles.thumbnail}>
            <img src={props.data[slide].img} alt="" />
          </div>
          <div className={styles.thumbnail}>
            <img src={props.data[slide].img} alt="" />
          </div>
          <div className={styles.thumbnail}>
            <img src={props.data[slide].img} alt="" />
          </div>
          <div className={styles.thumbnail}>
            <img src={props.data[slide].img} alt="" />
          </div>
          <div className={styles.thumbnail}>
            <img src={props.data[slide].img} alt="" />
          </div>
          <div className={styles.thumbnail}>
            <img src={props.data[slide].img} alt="" />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default GalleryDetail;
