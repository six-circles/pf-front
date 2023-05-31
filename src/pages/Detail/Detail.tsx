import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  MoreProduct,
  Details,
  Comments,
  QuestionList,
  Loading,
} from "../../components";
import GalleryDetail from "../../components/Details/GalleryDetail/GalleryDetail";

import { DetailProd, heroSliderData } from "../../utils";
import styles from "./Detail.module.scss";

import {
  clearProducts,
  getProductDetail,
  getProducts,
} from "../../redux/actions/productActions.";

interface Products {
  detail: DetailProd;
}

interface State {
  products: Products;
}

function Detail() {
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams<{ id: string }>();
  const dispatch: Function = useDispatch();
  const { detail } = useSelector((state: State) => state.products);

  useEffect(() => {
    setIsLoading(true);
    clearProducts();
    dispatch(getProducts());
    dispatch(getProductDetail(id)).then(() => setIsLoading(false));
  }, [dispatch, id]);

  const [tipo, setTipo] = useState("comentarios");
  const handleClick = (tipo: any) => {
    setTipo(tipo);
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Fragment>
          <div className={styles.product_cont}>
            <GalleryDetail detail={detail} data={heroSliderData} />
            <Details detail={detail} />
          </div>
          {detail?.user && <MoreProduct />}
          <div>
            <a
              className={styles.optiondetail}
              onClick={() => handleClick("comentarios")}
            >
              Puntuacion |{" "}
            </a>
            <a
              className={styles.optiondetail}
              onClick={() => handleClick("question")}
            >
              Pregunta
            </a>
          </div>
          <br />

          <br />
          {tipo === "question"
            ? detail.questions && <QuestionList questions={detail?.questions} />
            : detail.comments && <Comments comments={detail?.comments} />}
        </Fragment>
      )}
    </>
  );
} 

export default Detail;
