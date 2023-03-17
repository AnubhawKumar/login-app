import React from "react";
import CommonStepsInTest from "../components/CommonStepsInTest";

const TestCases = () => {
  return (
    <div className="accordion accordion-flush mx-5 my-2" id="accordionFlushExample">
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingOne">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseOne"
            aria-expanded="false"
            aria-controls="flush-collapseOne"
          >
            <div className="d-flex flex-md-column">
              <span>
                Test 1 : A user with valid credentials should able to Login
                successfully
              </span>
              <span>
                URL :{" "}
                <a href="https://login-app-iota.vercel.app/login">
                  https://login-app-iota.vercel.app/login
                </a>
              </span>
            </div>
          </button>
        </h2>
        <div
          id="flush-collapseOne"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingOne"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body px-5">
            <CommonStepsInTest />
            <p>7. Enter Valid username</p>
            <p>8. Enter valid password</p>
            <p>9. Click on login button</p>
            <p>10. Validate logged in URL</p>
            <p>11. Validate login message</p>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingTwo">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseTwo"
            aria-expanded="false"
            aria-controls="flush-collapseTwo"
          >
            <div className="d-flex flex-md-column">
              <span>
                Test 2 : A user with valid credentials should able to Login
                successfully and logout successfully
              </span>
              <span>
                URL :{" "}
                <a href="https://login-app-iota.vercel.app/login">
                  https://login-app-iota.vercel.app/login
                </a>
              </span>
            </div>
          </button>
        </h2>
        <div
          id="flush-collapseTwo"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingTwo"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body px-5">
            <CommonStepsInTest />
            <p>7. Enter Valid username</p>
            <p>8. Enter valid password</p>
            <p>9. Click on login button</p>
            <p>10. Validate logged in URL</p>
            <p>11. Validate login message</p>
            <p>12. Locate logout menu/button</p>
            <p>13. Click on logout button</p>
            <p>14. Validate that login page URL is displayed</p>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingThree">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseThree"
            aria-expanded="false"
            aria-controls="flush-collapseThree"
          >
            <div className="d-flex flex-md-column">
              <span>
                Test 3 : A user with invalid username should not be able to
                Login
              </span>
              <span>
                URL :{" "}
                <a href="https://login-app-iota.vercel.app/login">
                  https://login-app-iota.vercel.app/login
                </a>
              </span>
            </div>
          </button>
        </h2>
        <div
          id="flush-collapseThree"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingThree"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body px-5">
            <CommonStepsInTest />
            <p>7. Enter Invalid username</p>
            <p>8. Enter valid password</p>
            <p>9. Click on login button</p>
            <p>10. Validate logged in URL</p>
            <p>11. Validate login error message</p>
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingFour">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseFour"
            aria-expanded="false"
            aria-controls="flush-collapseFour"
          >
            <div className="d-flex flex-md-column">
              <span>
                Test 4 : A user with invalid password should not be able to
                Login
              </span>
              <span>
                URL :{" "}
                <a href="https://login-app-iota.vercel.app/login">
                  https://login-app-iota.vercel.app/login
                </a>
              </span>
            </div>
          </button>
        </h2>
        <div
          id="flush-collapseFour"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingFour"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body px-5">
            <CommonStepsInTest />
            <p>7. Enter Valid username</p>
            <p>8. Enter Invalid password</p>
            <p>9. Click on login button</p>
            <p>10. Validate logged in URL</p>
            <p>11. Validate login error message</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestCases;
