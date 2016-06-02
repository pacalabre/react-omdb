const React = require('react');

const ShowMovie = React.createClass({
  render: function(){
    return (
      <div>
        <h2>imdbId: {this.props.params.imdbId}</h2>
        <p></p>
      </div>
      );
  }
});


module.exports = ShowMovie;
