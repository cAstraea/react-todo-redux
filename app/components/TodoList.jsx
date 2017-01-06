import Todo from 'Todo';

const React = require('react');
const { connect } = require('react-redux');


export const TodoList = React.createClass({
  render() {
    const { todos } = this.props;
    
    const renderTodos = () => {
       if (todos.length === 0) {
         return (<p className="container__message">Nothing to do</p>);
       }
      return (todos.map((todo) => (<Todo key={todo.id} {...todo} />)));   
     };

    return (
      <div>
        {renderTodos()}
      </div>
    );
  }
});

export default connect(
  (state) => {
    return {
      todos: state.todos
    };
  }
)(TodoList);
