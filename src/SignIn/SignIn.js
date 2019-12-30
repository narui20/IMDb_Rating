import React, { Component } from "react";
import Axios from "../axios-handler";
import "./SignIn.css";

class SignIn extends Component {
  state = {
    userId: "",
    user: [],
    loading: false
  };

  signInHandler() {
    const profiles = [];
    Axios.get("/profile.json").then(resp => {
      for (let i in resp.data) {
        // if (resp.data[i].email === this.state.userId) {
        profiles.push({
          ...resp.data[i]
        });
      }
      const data = profiles.map(ky => {
        return Object.values(ky);
      });

      for (let i in data) {
        // console.log(data)

        console.log(data[i][0].email);
        if (data[i][0].email === this.state.userId) {
          console.log("welcome user " + data[i][0].name);
          // }
        }
        //console.log(]);
      }
    });
  }

  onChangeHandler = event => {
    //const name=event.target.value
    this.setState();
    console.log(this.state.userId);
  };

  onSignIn = () => {
    const check = this.state.loading;
    this.setState({ loading: !check });
  };

  render() {
    let userDetails = null;

    if (this.state.loading) {
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
