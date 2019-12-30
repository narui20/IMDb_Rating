import React, { Component } from "react";
import Profile from "./Profile/Profile";
import "./App.css";
import SignIn from "./SignIn/SignIn";

class App extends Component {
  state = {};

  render() {
    return (
      <div>
        <nav>
          <div className="title">
            <h2>IMDb</h2>&nbsp;
            <h4 className="subtitle">Experience Like Nowhere...</h4>
          </div>
          <ul className="ul">
            <li className="li">
              <Profile />
            </li>
            <li className="li">
              <SignIn />
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
export default App;
