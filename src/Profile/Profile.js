import React, { Component } from "react";
import "./Profile.css";
import Axios from "../axios-handler";
import { withRouter } from "react-router-dom";

class Profile extends Component {
  state = {
    name: "",
    email: "",
    age: "",
    gender: "",
    password: "",
    data: false
  };

  onHandleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  componentDidMount() {
    const check = this.state.data;
    this.setState({ data: !check });
  }

  profileHandler = () => {
    //Fetching email to check new user
    let emailList = [];
    Axios.get("/profile.json").then(resp => {
      for (let i in resp.data) {
        console.log("for");
        emailList.push(resp.data[i]);
      }

      const List = emailList.map(key => Object.values(key));

      for (let i in List) {
        const len = List.length - 1;
        console.log("email List: " + List[i][0].email);

        if (List[i][0].email === this.state.email) {
          return alert("Account already exist with this emailId.");
        } else if (len == i && List[i][0].email !== this.state.email) {
          console.log("inside");
          let user = {
            name: this.state.name,
            email: this.state.email,
            age: this.state.age,
            gender: this.state.gender,
            password: this.state.password
          };

          Axios.post("/profile.json", { user }).then(resp => {
            alert("Account created successfully!!");
          });
        }
      }
    });
  };

  onReturn = () => {
    this.props.history.replace("/");
  };
  render() {
    let profiles = null;

    if (this.state.data) {
      profiles = (
        <div className="Profile">
          <div style={{ fontSize: "30px", fontStyle: "bold" }}>
            Create Account
          </div>
          Name:
          <input
            className="input"
            name="name"
            type="text"
            placeholder="Name"
            onChange={event => this.onHandleChange(event)}
          />
          <br />
          Email:
          <input
            className="input"
            name="email"
            type="email"
            placeholder="Email-Id"
            onChange={event => this.onHandleChange(event)}
          />
          <br />
          Age:
          <input
            className="input"
            name="age"
            type="text"
            placeholder="Age"
            onChange={event => this.onHandleChange(event)}
          />
          <br />
          Gender:
          <label className="label">
            Male
            <input
              className="radio"
              type="radio"
              name="gender"
              value="Male"
              onChange={event => this.onHandleChange(event)}
            />
          </label>
          <label className="label">
            Female
            <input
              className="radio"
              type="radio"
              name="gender"
              value="Female"
              onChange={event => this.onHandleChange(event)}
            />
          </label>
          <br />
          <label className="label">
            Create Password
            <input
              className="input"
              type="password"
              name="password"
              placeholder="Password"
              required
              onChange={event => this.onHandleChange(event)}
            />
          </label>
          <br />
          <input
            type="submit"
            className="button"
            onClick={this.profileHandler}
          />
          <button className="button" onClick={this.onReturn}>
            Back
          </button>
        </div>
      );
    }
    return (
      <div>
        {/* <button className="button" onClick={this.onButtonClick}>
          Profile
        </button> */}

        {profiles}
      </div>
    );
  }
}

export default withRouter(Profile);
