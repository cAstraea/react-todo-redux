const React = require('react');
const moment = require('moment');


const Todo = React.createClass({
  render() {
    const { id, text, completed, createdAt, completedAt } = this.props;
    const todoClassName = completed ? 'todo todo-completed' : 'todo';
    const renderDate = () => {
      let message = 'Created ';
      let timestamp = createdAt;

      if (completed) {
        message = 'Completed ';
        timestamp = completedAt;
      }
  return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
    };
    return (
      <div className="callout clearfix">
      <div><button className="button alert float-right am-delete" onClick={() => { this.props.onDelete(id); }}> ✘	 </button></div>
      <div className={todoClassName} onClick={() => { this.props.onToggle(id); }}>
        <div>
          <input type="checkbox" checked={completed} />
        </div>
        <div>
          <p>{text}</p>
          <p className="todo__subtext">{renderDate()}</p>
        </div>
      </div>
      </div>
    );
  }
});

module.exports = Todo;
