import Todo from 'Todo';

const React = require('react');
const { connect } = require('react-redux');

const TodoAPI = require('TodoAPI');


export const TodoList = React.createClass({
  render() {
    const { todos, showCompleted, searchText } = this.props;
    
    const renderTodos = () => {
      const filteredTodos = TodoAPI.filteredTodos(todos, showCompleted, searchText);
       if (filteredTodos.length === 0) {
         return (<p className="container__message">Nothing to do, Add more todos</p>);
       }
        return filteredTodos.map((todo) => <Todo key={todo.id} {...todo} />);
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
