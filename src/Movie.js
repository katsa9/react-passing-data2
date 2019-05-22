import React, { Component } from "react";
class Movie extends Component {
  render() {
    const usersLiked = this.props.usersWhoLiked.map(u => (
      	<li>{u.name}</li>
      ));
   return (
     <li key={this.props.key}>
       <h2>{this.props.movieName}</h2>
       <h3>Liked By:</h3>
       <ul>{usersLiked}</ul>
	</li>
    );
  }
}

export default Movie;