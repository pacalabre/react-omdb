const React = require('react');
const ReactDOM = require('react-dom');
const OMDBSearch = require('./components/OMDBSearch');
const ShowMovie = require('./components/ShowMovie');
const About = require('./components/About');
const Router = require('react-router').Router;
const Route =  require('react-router').Route;
const Link = require('react-router').Link;
const browserHistory = require('react-router').browserHistory;

const App = React.createClass({
  render: function() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={OMDBSearch} />
        <Route path="/about" component={About} />
        <Route path="/results/:imdbId" component={ShowMovie} />
      </Router>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('container'));
