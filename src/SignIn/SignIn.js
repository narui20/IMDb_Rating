import React, { Component } from "react";
import Axios from "../axios-handler";
import "./SignIn.css";

class SignIn extends Component {
  state = {
    userId: null,
    user: [],
    loading: false
  };

  signInHandler() {
    const profiles = [];
    Axios.get("/profile.json").then(resp => {
      for (let i in resp.data) {
        const uid = resp.data[i];
        console.log(uid[uid]);
        if (uid[uid] === this.state.userId) {
          profiles.push({
            ...resp.data[i],
            id: i
          });
        }
      }
    });
  }

  onChangeHandler = event => {
    this.setState({ userId: event.target.value });
  };

  onSignIn = () => {
    const check = this.state.loading;
    this.setState({ loading: !check });
  };

  render() {
    let userDetails = null;

    if (this.state.loading) {
      console.log("checking.." + this.state.loading);

      userDetails = (
        <div className="signIn">
          <label className="label">
            Enter Your Email Id:
            <input
              className="input"
              type="text"
              onChange={event => this.onChangeHandler(event)}
            />
          </label>
          <input
            type="submit"
            className="button"
            onClick={this.signInHandler}
          />
        </div>
      );
    }
    return (
      <div>
        <button className="button" onClick={this.onSignIn}>
          SignIn
        </button>
        {userDetails}
      </div>
    );
  }
}
export default SignIn;
