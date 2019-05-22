class Movie extends Component {
  render() {
   return (
     <li>
       <h2>{this.props.movie.name}</h2>
       <h3>Liked By:</h3>
       <ul>
          {this.props.faveUsers.forEach()}
       </ul>
	</li>
    );
  }
}

export default Movie;