import React, { Component } from "react";
class Movie extends Component {
  render() {
    const {usersWhoLiked, movieData, users} = this.props; //destructure props array to get data
                                                    
   return (
     <li key={movieData.id}> // <li> tags need a unique key
       <h2>{movieData.name}</h2>
       <h4>Liked By:</h4>
       if(!usersWhoLiked ||usersWhoLiked.length === 0) {  //if usersWhoLiked is undefined or empty, show message, else display list of user names
         <p>None of the listd users liked this movie</p>
       }else {
         <ul>
         {usersWhoLiked.map(id => (
         	<li key={id}>
				<p>{users[id].name}</p>
			</li>
         ))}
		 </ul>
		}
    )
  }
}

export default Movie;