import React, { Component } from "react";
//import Profile from "./Profile/Profile";
import SignIn from "./SignIn/SignIn";
import { Switch, Route } from "react-router-dom";
import Profile from "./Profile/Profile";
import Home from "./Home/Home";
import "./App.css";
import Layout from "./Layout/Layout";

class App extends Component {
  state = {};

  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/home" exact component={Home} />
          </Switch>
        </Layout>
      </div>
    );
  }
}
export default App;
