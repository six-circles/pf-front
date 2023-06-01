import { Fragment } from "react";
import { Outlet } from "react-router-dom";

function LoginLayout() {
  return (
    <Fragment>
      <Outlet />
    </Fragment>
  );
}

export default LoginLayout;
