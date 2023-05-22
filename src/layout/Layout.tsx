import { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { Footer, Header } from "../components";
import styles from "./Layout.module.scss";
import { getCartProducts } from "../redux/actions/carritoActions";
import { getFavorites } from "../redux/actions/favoritosActions";

function Layout() {
  const dispatch: Function = useDispatch();
  useEffect(() => {
    dispatch(getCartProducts());
    dispatch(getFavorites())
  }, [dispatch]);

  return (
    <Fragment>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </Fragment>
  );
}

export default Layout;
