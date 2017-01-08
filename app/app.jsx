import Login from 'Login';
import TodoApp from 'TodoApp';

const React = require('react');
const ReactDOM = require('react-dom');
const { Provider } = require('react-redux');
const { Route, Router, IndexRoute, hashHistory } = require('react-router');


const actions = require('actions');
const store = require('configureStore').configure();


store.dispatch(actions.startAddTodos());

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Provider store={store}>
  <Router history={hashHistory}>
  <Route path="/">
  <Route path="todos" component={TodoApp} />
  <IndexRoute component={Login} />
  </Route>
  </Router>
  </Provider>,
  document.getElementById('app')
);
