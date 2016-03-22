const React = require('react');
const Link = require('react-router').Link;

const ShowMovie = React.createClass({
  getInitialState() {
    return {movie: null};
  },
  componentDidMount() {
    fetch(`http://omdbapi.com/?i=${this.props.params.imdbID}`)
      .then(response => {
        response.json().then(data => {
          this.setState({movie: data});
        });
      }).catch(error => {
        this.setState({movie: null});
      });
  },
  render: function() {
    const movie = this.state.movie;
    if (!movie) return <h1>Loading...</h1>;

    return (
      <div>
        <h1>{movie.Title}</h1>
        <p>{movie.Plot}</p>
        <Link to='/'>&larr; Back</Link>
      </div>
    );
  }
});

module.exports = ShowMovie;
