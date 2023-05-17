import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import User from "../pages/User/User"
import styles from "./LayoutUser.module.scss";

function LayoutUser() {
  return (
    <Fragment>
      <User/>
      <div >
        <Outlet />
      </div>
      
    </Fragment>
  );
}

export default LayoutUser;