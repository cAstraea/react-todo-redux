const React = require('react');
const uuid = require('node-uuid');

const TodoList = require('TodoList');
const AddTodo = require('AddTodo');
const TodoSearch = require('TodoSearch');
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


  handleToggle(id) {
    const updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });

    this.setState({ todos: updatedTodos });
  },

  handleAddTodo(text) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text,
          completed: false
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
        <TodoSearch onSearch={this.handleSearch} />
        <TodoList todos={filteredTodos} onToggle={this.handleToggle} />
        <AddTodo onAddTodo={this.handleAddTodo} />
      </div>
    );
  }
});

module.exports = TodoApp;
