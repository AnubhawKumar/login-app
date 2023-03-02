import React from "react";
import NavigationPage from "./NavigationPage";

const PageLayout = ({ children }) => {
  return (
    <>
      <NavigationPage />
      <div>{children}</div>
    </>
  );
};

export default PageLayout;
