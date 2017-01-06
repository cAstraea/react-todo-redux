import Todo from 'Todo';

const React = require('react');
const { connect } = require('react-redux');

const TodoAPI = require('TodoAPI');


export const TodoList = React.createClass({
  render() {
    const { todos, showCompleted, searchText } = this.props;
    
    const renderTodos = () => {
       if (todos.length === 0) {
         return (<p className="container__message">Nothing to do</p>);
       }
      return (TodoAPI.filteredTodos(todos, showCompleted, searchText).map((todo) => (<Todo key={todo.id} {...todo} />)));   
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
    return state;
  }
)(TodoList);
