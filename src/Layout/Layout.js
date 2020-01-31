import React, { Component } from "react";
import Profile from "../Profile/Profile";
import SignIn from "../SignIn/SignIn";
import { Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "./Layout.css";
import "../App.css";

class Layout extends Component {
  render() {
    let lay = null;
    if (this.props.value) {
      lay = (
        <React.Fragment>
          <NavLink to="/SignIn">
            <button>SignIn</button>
          </NavLink>
          <NavLink to="/SignUp">
            <button>SignUp</button>
          </NavLink>
        </React.Fragment>
      );
    } else {
      lay = (
        <React.Fragment>
          <button
            onClick={() => {
              this.props.history.replace("/");
              this.props.onClickVal();
            }}
          >
            Logout
          </button>
        </React.Fragment>
      );
    }
    return (
      <div>
        <nav className="clr">
          <div className="title">
            <h2>IMDb</h2>&nbsp;
            <h4 className="subtitle">Experience Like Nowhere...</h4>
            {lay}
            <Route path="/SignIn" exact strict component={SignIn} />
            <Route path="/SignUp" exact strict component={Profile} />
          </div>
        </nav>
        <main> {this.props.children}</main>
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
    onClickVal: () => dispatch({ type: "CHANGE" })
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Layout));
