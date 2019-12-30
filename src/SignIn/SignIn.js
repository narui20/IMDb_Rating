import React, { Component } from "react";
import Axios from "../axios-handler";
import "../Profile/Profile.css";

class SignIn extends Component {
  signInHandler() {
    Axios.get("/profile.json").then(resp => {
      for (let i in resp.data) {
        console.log(i);
      }
    });
  }
  render() {
    return (
      <div>
        <button className="button" onClick={this.signInHandler}>
          SignIn
        </button>
      </div>
    );
  }
}
export default SignIn;
