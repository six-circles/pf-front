// import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import User from "../pages/User/User";
import styles from "./LayoutUser.module.scss";

function LayoutUser() {
  return (
    <div className={styles.perfil}>
      <User />
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default LayoutUser;
