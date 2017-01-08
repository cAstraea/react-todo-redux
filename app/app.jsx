import firebase from 'app/firebase/';
import router from 'app/router/';

const React = require('react');
const ReactDOM = require('react-dom');
const { Provider } = require('react-redux');
const { hashHistory } = require('react-router');


const actions = require('actions');
const store = require('configureStore').configure();

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    hashHistory.push('/todos');
  } else {
    hashHistory.push('/');
  }
});

store.dispatch(actions.startAddTodos());

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles');



ReactDOM.render(
  <Provider store={store}>
  {router}
  </Provider>,
  document.getElementById('app')
);
