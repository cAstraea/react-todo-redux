const React = require('react');
const ReactDOM = require('react-dom');
//const { Route, Router, IndexRoute, hashHistory } = require('react-router');

const TodoApp = require('TodoApp');

const actions = require('actions');

const store = require('configureStore').configure();

store.subscribe(() => {
  console.log('new state', store.getState());
});

store.dispatch(actions.addTodo('Clean up'));

store.dispatch(actions.setSearchText('clean'));

store.dispatch(actions.toggleShow());

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <TodoApp />,
  document.getElementById('app')
);
