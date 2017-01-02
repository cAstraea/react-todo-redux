const React = require('react');
const Todo = require('Todo');

const TodoList = React.createClass({
  render() {
    const { todos } = this.props;
    
    const renderTodos = () => (todos.map((todo) => (<Todo key={todo.id} {...todo} />)));   

    return (
      <div>
        {renderTodos()}
      </div>
    );
  }
});

module.exports = TodoList;
