export const setSearchText = (searchText) => {
    return {
        type: 'SET_SEARCH_TEXT',
        searchText
    };
};

export const addTodo = (text) => {
    return {
        type: 'ADD_TODO',
        text
    };
};

export const removeTodo = (id) => {
    return {
        type: 'DELETE_TODO'
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
