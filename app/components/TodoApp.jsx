import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';

const React = require('react');
const uuid = require('node-uuid');
const moment = require('moment');

const TodoAPI = require('TodoAPI');

const TodoApp = React.createClass({
  getInitialState() {
    return {
      showCompleted: false,
      searchText: '',
      todos: TodoAPI.getTodos()
          };
  },

  componentDidUpdate() {
      TodoAPI.setTodos(this.state.todos);
  },   


  handleAddTodo(text) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text,
          completed: false,
          createdAt: moment().unix(),
          completedAt: undefined
        }
      ]
    });
  },
  handleSearch(showCompleted, searchText) {
    //set state with values passed from search component
    this.setState({
      showCompleted,
      searchText: searchText.toLowerCase()
    });
  },
  render() {
    const { todos, showCompleted, searchText } = this.state;
    const filteredTodos = TodoAPI.filteredTodos(todos, showCompleted, searchText);

    return (
      <div>
        <h1 className="page-title"> Todo App </h1>

        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
          <div className="container">
            <TodoSearch onSearch={this.handleSearch} />
            <TodoList />
            <AddTodo onAddTodo={this.handleAddTodo} />
          </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = TodoApp;
