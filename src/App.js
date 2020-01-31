import React, { Component } from "react";
//import Profile from "./Profile/Profile";
import { Route } from "react-router-dom";
import Home from "./Home/Home";
import "./App.css";
import Layout from "./Layout/Layout";

class App extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <div className="main">
          <Layout />
          <Route path="/home" exact render={props => <Home {...props} />} />
        </div>
      </React.Fragment>
    );
  }
}
export default App;
