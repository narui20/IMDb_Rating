import React, { Component } from "react";
import "./Profile.css";
import axios from "axios";

class Profile extends Component {
  state = {
    name: "",
    email: "",
    age: "",
    gender: "",
    data: false
  };

  onHandleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
    console.log(this.state.name);
  }

  onButtonClick = () => {
    const check = this.state.data;
    this.setState({ data: !check });
  };

  profileHandler = () => {
    console.log("inside");
    let user = {
      name: this.state.name,
      email: this.state.email,
      age: this.state.age,
      gender: this.state.gender
    };

    axios
      .post("https://burgerbuilder-2e72a.firebaseio.com/profile.json", { user })
      .then(resp => {
        console.log(resp.data);
      });
  };

  render() {
    let profiles = null;

    if (this.state.data) {
      profiles = (
        <div className="Profile">
          <div style={{ fontSize: "30px", fontStyle: "bold" }}>Profile</div>
          Name:
          <input
            className="input"
            name="name"
            type="text"
            onChange={event => this.onHandleChange(event)}
          />
          <br />
          Email:
          <input
            className="input"
            name="email"
            type="email"
            onChange={event => this.onHandleChange(event)}
          />
          <br />
          Age:{" "}
          <input
            className="input"
            name="age"
            type="text"
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
          <input
            type="submit"
            className="button"
            onClick={this.profileHandler}
          />
        </div>
      );
    }
    return (
      <div>
        <button className="button" onClick={this.onButtonClick}>
          Profile
        </button>
        {profiles}
      </div>
    );
  }
}

export default Profile;
