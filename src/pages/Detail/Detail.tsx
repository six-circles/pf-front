import { Fragment, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { MoreProduct, Details } from "../../components";
import GalleryDetail from "../../components/Details/GalleryDetail/GalleryDetail";

import { heroSliderData } from "../../utils";
import styles from "./Detail.module.scss";
import { getProductDetail } from "../../redux/actions/productActions.";

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

interface Products {
  detail: Detail;
}

interface State {
  products: Products;
}

function Detail() {
  const { id } = useParams<{ id: string }>();
  const dispatch: Function = useDispatch();
  const { detail } = useSelector((state: State) => state.products);

  useEffect(() => {
    console.log("adios");
    dispatch(getProductDetail(id));
  }, [dispatch, id]);

  return (
    <Fragment>
      <div className={styles.product_cont}>
        <GalleryDetail data={heroSliderData} />
        <Details detail={detail} />
      </div>
      <MoreProduct />
      <div>Comentarios | Preguntas</div>
    </Fragment>
  );
}

export default Detail;
