import { useState } from "react";
import styles from "./GalleryDetail.module.scss";

interface Detail {
  questions: object[];
  _id: string;
  title: string;
  price: 1;
  image: string;
  description: string;
  stock: number;
  comments: object[];
  user: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  punctuations: number;
}

interface DetailsProps {
  detail: Detail;
}

const GalleryDetail = (props: any) => {
  const [slide, setSlide] = useState(0);

  return (
    <div className={styles.contGallery}>
      <div className={styles.slideMax}>
        <div className={styles.slide}>
          {props.detail.image && (
            <img src={props.detail.image[0]} alt="Imagen Principal" />
          )}
        </div>
      </div>
      <div className={styles.carousel}>
        <div className={styles.thumbnails}>
          {props.detail.image &&
            props.detail.image.map((elem: any, index: any) => {
              return (
                <div
                  key={index}
                  onClick={() => setSlide(index)}
                  className={styles.thumbnail}
                >
                  <img src={elem} alt="" />
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
