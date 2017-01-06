//const $ = require('jquery'); remove this later

module.exports = {
    setTodos(todos) {
       if (Array.isArray(todos)) {
            localStorage.setItem('todos', JSON.stringify(todos));
            return todos;
       }
    },
    
    getTodos() {
        //fetch from localStorage , check if it's array and return the values
        const stringTodos = localStorage.getItem('todos');
        let todos = [];

        try {
            todos = JSON.parse(stringTodos);
        } catch (e) {
//failed will use empty array
        }
        return (Array.isArray(todos)) ? todos : [];    
    },

    filteredTodos(todos, showCompleted, searchText) {
        let filteredTodos = todos;
        //filter by showCompleted

        filteredTodos = filteredTodos.filter((todo) => (!todo.completed || showCompleted)); // return completed items

        //filter by searchText
         filteredTodos = filteredTodos.filter((todo) => {
             const text = todo.text.toLowerCase();
             searchText = searchText.toLowerCase();
             return searchText.lenght === 0 || text.indexOf(searchText) > -1;   //returns all if empty or filtered items
        });

        //sort todos with non-completed first
        filteredTodos.sort((a, b) => { //mutates filteredTodos
            if (!a.completed && b.completed) {
                return -1; //a should come before b
            } else if (a.completed && !b.completed) {
                return 1; // a should come after b
            } 
                return 0; // no sort
        }); 

        return filteredTodos;
    }
};
