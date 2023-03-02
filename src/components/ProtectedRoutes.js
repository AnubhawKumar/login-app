import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { getLocalStorageItem, localStorageKeys } from "../shared/constants";

const ProtectedRoutes = () => {
  const location = useLocation();
  const loggedIn = getLocalStorageItem(localStorageKeys.IS_LOGGED_IN);

  return loggedIn ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default ProtectedRoutes;
