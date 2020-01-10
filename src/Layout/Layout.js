import React, { Component } from "react";
import Profile from "../Profile/Profile";
import SignIn from "../SignIn/SignIn";
import { BrowserRouter } from "react-router-dom";

import "../App.css";

class Layout extends Component {
  render() {
    return (
      <div>
        <nav>
          <div className="title">
            <h2>IMDb</h2>&nbsp;
            <h4 className="subtitle">Experience Like Nowhere...</h4>
          </div>
          <SignIn />
          <Profile />
          <main> {this.props.children}</main>
        </nav>
      </div>
    );
  }
}
export default Layout;
