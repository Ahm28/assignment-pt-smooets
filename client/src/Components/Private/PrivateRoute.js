// import necessary utility from rrd
import { Outlet, useNavigate } from "react-router-dom";

// create component here
import React, { useContext } from "react";
import { UserContext } from "../../context/userContext";

const PrivateRoute = ({ element: component, ...rest }) => {
  let navigate = useNavigate();

  return localStorage.token ? <Outlet /> : navigate("/");
};

export default PrivateRoute;
