import React, { Component,Fragment} from "react";
//import
import { Route } from "react-router-dom";
import Home from "./Home/Home";
import "./App.css";
import Layout from "./Layout/Layout";

class App extends Component {
  state = {};

  render() {
    return (
      <Fragment>
        <div className="main">
          <Layout />
          <Route path="/home" exact render={props => <Home {...props} />} />
        </div>
      
      </Fragment>
    );
  }
}
export default App;
