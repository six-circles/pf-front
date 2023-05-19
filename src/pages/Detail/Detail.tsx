import { Fragment, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { MoreProduct, Details, Comments, QuestionList } from "../../components";
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
  const { id } = useParams<{ id: string }>();
  const dispatch: Function = useDispatch();
  const { detail } = useSelector((state: State) => state.products);

  

  useEffect(() => {
    clearProducts();
    dispatch(getProductDetail(id));
    dispatch(getProducts());
  }, [dispatch, id]);

  return (
    <Fragment>
      <div className={styles.product_cont}>
        <GalleryDetail detail={detail} data={heroSliderData} />
        <Details detail={detail} />
      </div>
      {detail?.user && <MoreProduct />}
      <div>Comentarios | Preguntas</div>

      {detail.questions && <QuestionList questions={detail?.questions} />}
      {detail.comments && <Comments comments={detail?.comments} />}
    </Fragment>
  );
}

export default Detail;
