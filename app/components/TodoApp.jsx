const React = require('react');
const TodoList = require('TodoList');

const TodoApp = React.createClass({
    getInitialState() {
        return {
            todos: [
                {
                    id: 1,
                    text: 'walk the cat'
                }, 
                {
                    id: 2,
                    text: 'g12k'
                },
                {
                    id: 3,
                    text: 'mtj'
                },
                {
                    id: 4,
                    text: 'ff~15'
                }
            ]
        };
    },
    render() {
        const { todos } = this.state;
        return (
 
            <div> 
<TodoList todos={todos} />
            </div>
        );
    }

});

module.exports = TodoApp;
