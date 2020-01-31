import React, { Component } from "react";
import Axios from "../axios-handler";
import "./SignIn.css";
import { withRouter } from "react-router-dom";
import Home from "../Home/Home";
import { connect } from "react-redux";

class SignIn extends Component {
  state = {
    email: "",
    pass: "",
    loading: true
  };

  onReturn = () => {
    this.props.history.replace("/");
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
        if (
          data[i][0].email === this.state.email &&
          data[i][0].password === this.state.pass
        ) {
          console.log("found: " + data[i][0].email);
          {
            this.props.onValClick();
          }
          return this.props.history.push({
            pathname: "/home",
            state: { data: data[i][0].name }
          });
        } else if (i == len && data[i][0].email !== this.state.email) {
          alert("Incorrect Credentials OR No Account, Please Signup");
        }
      }
    });
  };

  onChangeHandler = event => {
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
          <h1>Login</h1>
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
              type="password"
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
          <button className="button" onClick={this.onReturn}>
            Back
          </button>
        </div>
      );
    }
    return (
      <div>
        {/* <button className="button" onClick={this.onSignIn}>
          SignIn
        </button> */}
        {userDetails}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    value: state.val
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onValClick: () => dispatch({ type: "CHANGE" })
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SignIn));
