import React, { Component } from "react";

export default class Captcha extends Component {

  handleCaptcha = () => {
    const alphaNumericString =
      "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const captchaLength = 8;
    var randomString = "";
    for (let i = 0; i < captchaLength; i++) {
      var randomNumber = Math.floor(Math.random() * alphaNumericString.length);
      randomString += alphaNumericString.substring(
        randomNumber,
        randomNumber + 1
      );
    }

    return (
      <>
        <div id="uniqueCaptcha">{`${randomString}`}</div>
      </>
    );
  };

  render() {
    return <>{this.handleCaptcha()}</>;
  }
}
