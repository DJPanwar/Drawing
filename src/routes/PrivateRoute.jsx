import React from "react";
import { useAuth } from "../Hooks/useAuth";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/signup" replace={true} />;
  }
  return children;
};

export default PrivateRoute