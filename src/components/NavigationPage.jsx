import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { RiLogoutCircleLine } from "react-icons/ri";
import { localStorageKeys, removeLocalStorageItem } from "../shared/constants";
const NavigationPage = () => {
  const navigate = useNavigate();
  const handleLogOut = () => {
    removeLocalStorageItem(localStorageKeys.IS_LOGGED_IN);
    navigate("/login");
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg  navbar-dark bg-dark ">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/dashboard">
            Selenium App
          </NavLink>
          <button className="navbar-toggler" type="button">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarNavAltMarkup"
            style={{ position: "relative" }}
          >
            <div className="navbar-nav">
              <NavLink className="nav-link" to="/dashboard">
                Home
              </NavLink>
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </div>
            <div
              onClick={() => handleLogOut()}
              style={{
                textDecoration: "none",
                right: 0,
                position: "absolute",
                cursor: "pointer",
                color: "rgba(255, 255, 255, 0.55)",
              }}
            >
              <RiLogoutCircleLine
                className="mx-1"
                style={{ marginBottom: "2" }}
              />
              <span>Logout</span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavigationPage;
