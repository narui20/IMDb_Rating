import React, { Component } from "react";
import Axios from "../axios-handler";
import "./SignIn.css";
import { withRouter } from "react-router-dom";

class SignIn extends Component {
  state = {
    email: "",
    pass: "",
    loading: false
  };

  signInHandler = () => {
    const profiles = [];
    Axios.get("/profile.json").then(resp => {
      for (let i in resp.data) {
        profiles.push(resp.data[i]);
      }

      const data = profiles.map(ky => {
        console.log(Object.values(ky)); //[Object]
        // [Object] 0: Object age: "12" email: "a@gmail.com" gender: "Male" name: "a"
        console.log(ky); //Object {user: Object} user: Object age: "12" email: "a@gmail.com" gender: "Male" name: "a"
        return Object.values(ky);
      });

      for (let i in data) {
        const len = data.length - 1;
        console.log(len + " " + i);
        if (
          data[i][0].email === this.state.email &&
          data[i][0].password === this.state.pass
        ) {
          console.log("Id found " + data[i][0].name);
          console.log("History " + this.props.history);
          console.log(this.props);
          return this.props.history.push("/home");
        } else if (i == len) {
          alert("Account not found, Please Signup");
        }
      }
    });
  };

  onChangeHandler = event => {
    console.log("email1", this.state.email);
    this.setState({ [event.target.name]: event.target.value });
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
              name="email"
              onChange={event => this.onChangeHandler(event)}
            />
          </label>
          <label className="label">
            Enter Your Password:
            <input
              className="input"
              type="text"
              name="pass"
              onChange={event => this.onChangeHandler(event)}
            />
          </label>
          <br />
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
export default withRouter(SignIn);
