const React = require('react');
const Link = require('react-router').Link;

const OMDBSearch = React.createClass({
  getInitialState: function() {
    return {searchTerm: '', results: []};
  },
  searchChange: function(e) {
    this.setState({searchTerm: e.target.value});
  },
  search: function(e) {
    e.preventDefault();
    fetch(`http://omdbapi.com/?s=${this.state.searchTerm}`)
      .then(response => {
        response.json().then(data => {
          console.log(data.Search);
          this.setState({results: data.Search});
        });
      }).catch(error => {
        this.setState({results: null});
      });
  },
  render: function() {
    const results = this.state.results.map((movie, idx) => {
      return (
        <div className="well" key={idx}>
          <h2><Link to={`/results/${movie.imdbID}`} >{movie.Title}</Link></h2>
        </div>
      );
    });

    return (
      <div>
        <h1>Search for Movies</h1>
        <form onSubmit={this.search}>
          <input type="text"
                 value={this.state.searchTerm}
                 onChange={this.searchChange} />
          <input type="submit" />
        </form>
        <div>{results}</div>
      </div>
    );
  }
});

module.exports = OMDBSearch;
