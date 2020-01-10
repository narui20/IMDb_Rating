import React, { Component } from "react";

class Home extends Component {
  onReturn = () => {
    this.props.history.goBack();
  };
  render() {
    return (
      <div>
        Home Page
        {this.props.user}
        <button onClick={this.onReturn}>Back</button>
      </div>
    );
  }
}

export default Home;
