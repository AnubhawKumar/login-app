import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import ProtectedRoutes from "../components/ProtectedRoutes";
import LoginPage from "../pages/LoginPage";
import { routes } from "./routes";

const PageRoutes = () => {
  return (
    <Routes>
      <Route path={"/login"} element={<LoginPage />} />;
      {routes.map((route) => {
        const { key, path, Component } = route;
        return (
          <Route key={key} path={path} element={<ProtectedRoutes />}>
            <Route
              path={path}
              element={
                <PageLayout>
                  <Component />
                </PageLayout>
              }
            />
          </Route>
        );
      })}
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
};

export default PageRoutes;
