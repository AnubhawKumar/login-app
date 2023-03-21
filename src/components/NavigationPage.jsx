import React from "react";
import { NavLink } from "react-router-dom";
import { RiLogoutCircleLine } from "react-icons/ri";
import {
  getLocalStorageItem,
  localStorageKeys,
  removeLocalStorageItem,
} from "../shared/constants";
const NavigationPage = () => {
  const loggedInUser = getLocalStorageItem(localStorageKeys.IS_LOGGED_IN);
  const handleLogOut = () => {
    removeLocalStorageItem(localStorageKeys.IS_LOGGED_IN);
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/dashboard">
          Selenium App
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse navbar-div"
          id="navbarSupportedContent"
        >
          <div className="navbar-nav">
            <NavLink className="nav-link" to="/dashboard">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
            {loggedInUser?.role.includes("admin") && (
              <NavLink className="nav-link" to="/contact">
              Contact
              </NavLink>
              )}
              <NavLink className="nav-link" to="/test-cases">
                Test-Cases
              </NavLink>
              <NavLink className="nav-link" to="/task">
                Tasks
              </NavLink>
            <NavLink
              to="/login"
              className="nav-link logout-btn"
              onClick={() => handleLogOut()}
            >
              <RiLogoutCircleLine className="mx-1 logout-icon" />
              Logout
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationPage;
