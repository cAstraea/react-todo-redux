import moment from 'moment';
import firebase, { firebaseRef } from 'app/firebase/';

export const setSearchText = (searchText) => {
    return {
        type: 'SET_SEARCH_TEXT',
        searchText
    };
};

export const addTodo = (todo) => {
    return {
        type: 'ADD_TODO',
        todo
    };
};

export const startAddTodo = (text) => {
    return (dispatch, getState) => {
        const todo = {
          text,
          completed: false,
          createdAt: moment().unix(),
          completedAt: null
        };

        const todoRef = firebaseRef.child('todos').push(todo); //reference to firebase pushing the todo 

        return todoRef.then(() => { //promise dispatch
            dispatch(addTodo({
                ...todo,
                id: todoRef.key // get key from firebase as id , update the redux store
            }));
        });
    };
};

export const addTodos = (todos) => {
    return {
        type: 'ADD_TODOS',
        todos
    };
};

export const removeTodo = (id) => {
    return {
        type: 'DELETE_TODO',
        id
    };
};

//toggle show completed
export const toggleShow = () => {
    return {
        type: 'TOGGLE_SHOW_COMPLETED'
    };
};


//toggleTodo(id) TOGGLE_TODO
export const toggleTodo = (id) => {
    return {
        type: 'TOGGLE_TODO',
        id
    };
};
