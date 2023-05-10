import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header } from "../components";

function Layout() {
  return (
    <Fragment>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </Fragment>
  );
}

export default Layout;
