import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../selenium_logo.png";
import {
  getLocalStorageItem,
  localStorageKeys,
  setLocalStorageItem,
} from "../shared/constants";
const LoginPage = () => {
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
    isLoggedIn: false,
    errorMessage: "",
  });
  const navigate = useNavigate();
  const { userName, password, errorMessage } = formData;

  const handleChange = ({ target: { name, value } }) => {
    setFormData({
      ...formData,
      [name]: value,
      errorMessage: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userName === "admin" && password === "admin123") {
      setFormData({ ...formData, isLoggedIn: true, errorMessage: "" });
      setLocalStorageItem(localStorageKeys.IS_LOGGED_IN, true);
      navigate("/about");
    } else {
      setFormData({
        ...formData,
        errorMessage: "Invalid Credentials",
        isLoggedIn: false,
      });
    }
  };
  useEffect(() => {
    const loggedIn = getLocalStorageItem(localStorageKeys.IS_LOGGED_IN);
    if (loggedIn) {
      navigate("/about");
    }
  }, [navigate]);

  return (
    <section className="h-100 gradient-form section">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-xl-10">
            <div className="card rounded-3 text-black">
              <div className="row g-0">
                <div className="col-lg-6">
                  <div className="card-body p-md-5 mx-md-4">
                    <div className="text-center">
                      <img src={logo} className="selenium_logo" alt="logo" />
                      <h4 className="mt-1 mb-5 pb-1">
                        Please login to your account
                      </h4>
                    </div>

                    <form onSubmit={handleSubmit}>
                      <div className="form-outline mb-4 mx-auto">
                        <label
                          className="form-label"
                          htmlFor="username_textbox"
                        >
                          Username
                        </label>
                        <input
                          type="text"
                          id="username_textbox"
                          className="form-control"
                          placeholder="Username"
                          name="userName"
                          value={userName}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <label
                          className="form-label"
                          htmlFor="password_textbox"
                        >
                          Password
                        </label>
                        <input
                          type="password"
                          id="password_textbox"
                          className="form-control"
                          placeholder="Password"
                          name="password"
                          value={password}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="text-center pt-1 mb-5 pb-1">
                        <button
                          className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3 w-100"
                          type="submit"
                        >
                          Log in
                        </button>
                        <div className="text-center text-danger mb-2">
                          {errorMessage}
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                  <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                    <h4 className="mb-4">Let's see the magic of react!!</h4>
                    <p className="small mb-0">
                      React is an open-source JavaScript library created by
                      Facebook for building user interfaces (UIs) or UI
                      components. It is used to develop single-page applications
                      (SPAs), mobile applications, and complex web applications.
                      React also provides a Virtual DOM (Document Object Model)
                      that updates the actual DOM efficiently, making the UI
                      updates fast and seamless.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
