import React from "react";
import { Route, Navigate } from "react-router-dom";

const PrivateRoute = ({ authenticated, children }) => {
  return authenticated ? children : <Navigate to="/" />;
};

export default PrivateRoute;
