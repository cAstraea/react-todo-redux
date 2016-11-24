const React = require('react');

const Todo = React.createClass({

    render() {
        const { text, id } = this.props;


        return (
            <div>
            {id} {text}
            </div>
        );
    }

});

module.exports = Todo;
