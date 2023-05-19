import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import User from "../pages/User/User";
import styles from "./LayoutUser.module.scss";
import { checkAuth } from "../utils";

function LayoutUser() {
  const navigate: Function = useNavigate();

  useEffect(() => {
    console.log("hola");
    checkAuth("product", navigate);
  }, []);

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
