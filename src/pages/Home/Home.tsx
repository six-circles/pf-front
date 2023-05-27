import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Products, Slider, Filter, Paginator, Loading } from "../../components";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import {
  clearProducts,
  getProducts,
} from "../../redux/actions/productActions.";
import styles from "./Home.module.scss";

interface Product {
  products: object[];
  totalPages: number;
  currentPage: number;
}

interface State {
  products: Product;
}

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const dispatch: any = useDispatch();
  const { products, totalPages, currentPage } = useSelector(
    (state: State) => state.products
  );

  const queryParams = new URLSearchParams(window.location.search);
  let queryParamsString = queryParams.toString();

  let paramSearch = queryParams.get("search");

  useEffect(() => {
    setIsLoading(true);
    dispatch(clearProducts());
    queryParams.set("index", `${index}`);
    const tok = queryParams.get("token");
    const us = queryParams.get("user");

    if (tok && us) {
      let vari = { token: tok, user: us };
      localStorage.setItem("user", JSON.stringify(vari));
      queryParams.delete("token");
      queryParams.delete("user");
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Bienvenido a Six Circles",
        showConfirmButton: false,
        timer: 2000,
      });
    }
    queryParamsString = queryParams.toString();
    dispatch(getProducts(queryParamsString)).then(() => setIsLoading(false));
    navigate({
      pathname: "/",
      search: queryParamsString,
    });
  }, [queryParamsString, index, navigate, dispatch]);

  return (
    <Fragment>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className={styles.home}>
            <Filter />
            <div>
              {paramSearch ? "" : <Slider />}
              <Products products={products} />
            </div>
          </div>
          <Paginator
            setIndex={setIndex}
            pages={totalPages}
            page={currentPage}
          />{" "}
        </>
      )}
    </Fragment>
  );
}

export default Home;
