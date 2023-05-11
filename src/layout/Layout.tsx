import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header } from "../components";
import styles from "./Layout.module.scss";

function Layout() {
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
