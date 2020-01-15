import React, { Component } from "react";
import "./MovieLayout.css";

class MovieLayout extends Component {
  state = {
    load: false
  };
  onLoading = () => {
    console.log(this.state.load);
    this.setState({ load: !this.state.load });
  };

  render() {
    let desc = null;
    if (this.state.load) {
      desc = (
        <div>
          <h4>Actors : {this.props.actors}</h4>
          <h4>Overview : &nbsp;{this.props.overview}</h4>
        </div>
      );
    }

    return (
      <div className="layout">
        <h3>
          {this.props.title} &nbsp; Rate:{this.props.rating}
        </h3>
        <img src={this.props.posterUrl} alt="movie-poster" />
        <h4>Released in {this.props.year}</h4>
        <h4> Genre : {this.props.genres}</h4>

        <button onClick={this.onLoading}>more</button>
        {desc}
      </div>
    );
  }
}
export default MovieLayout;
