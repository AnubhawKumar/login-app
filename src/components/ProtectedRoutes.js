import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { getLocalStorageItem, localStorageKeys } from "../shared/constants";

const ProtectedRoutes = ({ allowedRoles }) => {
  const location = useLocation();
  const loogedinUser = getLocalStorageItem(
    localStorageKeys.IS_LOGGED_IN
  );
  if(loogedinUser?.isLoggedIn){
    if(loogedinUser?.role.find((ro) => allowedRoles?.includes(ro))){
      return <Outlet />;
    } else{
      return <Navigate to="/not-found" state={{ from: location }} replace />;
    }
  } else{
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
};

export default ProtectedRoutes;
