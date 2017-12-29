var React = require('react');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;


var routes = (
	<Route name="App" path="/" handler={require('./App.js')}>
   		<DefaultRoute handler={require('./components/home.js')} />
	</Route>
)
