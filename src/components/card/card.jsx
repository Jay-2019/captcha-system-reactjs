import React, { Component, StrictMode } from "react";
import style from "../../style/style.module.css";
// import Captcha from "../captcha/index";
import Captcha from ".././captcha/index";
import ValidateCaptcha from "../validateCaptcha/index";
export default class Card extends Component {
  render() {
    return (
      <StrictMode>
        <div className="d-flex justify-content-center">
          <div
            className={` card text-white bg-dark text-center  ${style.cardStyle}`}
          >
            <div className="card-header">
              <h1>Captcha System</h1>
              {/* <h1>{this.state.newCaptcha}</h1> */}
            </div>
            <div className="card-body">
              {/* Display Captcha */}
              <div className="alert alert-info" role="alert">
                <h1>
                  <strong>
                    <i>
                      <b id="captchaid">
                        <Captcha />

                        {/* <strike></strike> */}
                      </b>{" "}
                    </i>
                  </strong>
                </h1>
              </div>
              {/* Validate captcha */}
              <ValidateCaptcha />
            </div>
          </div>
        </div>
      </StrictMode>
    );
  }
}
