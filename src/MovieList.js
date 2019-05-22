import React, { Component } from "react";
import Movie from "./Movie";

class MovieItemList extends Component {
  render() {
    const {movieData, movies} = this.props;
    
    //map each movie objects key (i.e.1, 2,3 etc) the user info in the movie data array
    const movieEntries = Object.keys(movies).map(id => (
      <Movie
      key={id}
      usersWhoLiked={movieData[id]}
  	  movieName={movies[id].name}
	  />
     ));                                            
    return (
     <ul>{movieEntries}</ul>
    );
  }
}

export default MovieItemList;