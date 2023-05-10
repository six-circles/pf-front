import { Outlet } from "react-router-dom";
import { Footer, Header } from "../components";

function Layout() {
  return (
    <main>
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
}

export default Layout;
