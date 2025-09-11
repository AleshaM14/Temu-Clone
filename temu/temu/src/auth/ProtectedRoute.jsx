import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import { useAuth } from "./useAuth";

const ProtectedRoute = ({ children, redirectTo = "/login" }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  if (loading) {
    return <div>Loading...</div>; // or a spinner
  }
  if (!user) {
    return <Navigate to={redirectTo} state={{ from: location }} />;
  }
  return children ? children : <Outlet />;
};

export default ProtectedRoute;
