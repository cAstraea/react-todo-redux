const React = require('react');

const TodoSearch = React.createClass({
    handleSearch() {
        const showCompleted = this.refs.showCompleted.checked;
        const searchText = this.refs.searchText.value;

        this.props.onSearch(showCompleted, searchText); //call props method passed down todoapp
    },
    render() {
        return (
            <div className="container__header">
                <div>
    <input type="search" ref="searchText" placeholder="Search todos" onChange={this.handleSearch} />
                </div>

                <div>
                    <label htmlFor="showCompleted">
 <input type="checkbox" id="showCompleted" ref="showCompleted" onChange={this.handleSearch} />
                        Show Completed todos
                    </label>
                </div>
            </div>
        );
    }
});


module.exports = TodoSearch;
