import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Movie from "../Movie";
import MovieLayout from "../MovieLayout";

class Home extends Component {
  render() {
    const list = Movie.map(li => {
      return (
        <MovieLayout
          title={li.title}
          rating={li.rating}
          year={li.year}
          posterUrl={li.posterUrl}
          genres={li.genres}
          actors={li.actors}
          overview={li.overview}
        />
      );
    });
    return (
      <div>
        <h1>
          <font color="#c23c6f">Welcome {this.props.location.state.data}!</font>
        </h1>
        {list}
      </div>
    );
  }
}

export default withRouter(Home);
