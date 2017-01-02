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
    }
};
