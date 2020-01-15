import React, { Component } from "react";
import Profile from "../Profile/Profile";
import SignIn from "../SignIn/SignIn";
import { Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./Layout.css";
import "../App.css";

class Layout extends Component {
  render() {
    return (
      <div>
        <nav>
          <div className="title">
            <h2>IMDb</h2>&nbsp;
            <h4 className="subtitle">Experience Like Nowhere...</h4>
            <NavLink to="/SignIn">
              <button>SignIn</button>
            </NavLink>
            <NavLink to="/SignUp">
              <button>SignUp</button>
            </NavLink>
            <Route path="/SignIn" exact strict component={SignIn} />
            <Route path="/SignUp" exact strict component={Profile} />
          </div>
          <main> {this.props.children}</main>
        </nav>
      </div>
    );
  }
}
export default Layout;
