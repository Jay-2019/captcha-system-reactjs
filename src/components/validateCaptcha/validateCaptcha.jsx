import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import HandleCaptcha from "../captcha/index";

export default class ValidateCaptcha extends Component {
  state = {
    userInputCaptcha: "",
    resetCaptcha: ""
  };

  handleChange = event => {
    const { value } = event.target;
    this.setState({
      userInputCaptcha: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (
      this.state.userInputCaptcha ===
      document.getElementById("uniqueCaptcha").innerHTML
    ) {
      console.log(document.getElementById("uniqueCaptcha").innerHTML);
      alert("Human Verification Successful");
      this.setState({ userInputCaptcha: "" });
    } else {
      alert("please Enter Valid captcha");
      return;
    }
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              id="inputCaptcha"
              aria-describedby="userInputCaptcha"
              placeholder="ENTER CAPTCHA"
              value={this.state.userInputCaptcha}
              onChange={this.handleChange}
            />
          </div>

          <button
            type="button"
            className="btn btn-warning btn-lg btn-block"
            onClick={this.handleClick}
          >
            RESET CAPTCHA
            {this.state.resetCaptcha}
          </button>
          <br />
          <button type="submit" className="btn btn-info btn-lg btn-block">
            CONFIRM
          </button>
          {/* <br/> */}
        </form>
      </>
    );
  }
}
