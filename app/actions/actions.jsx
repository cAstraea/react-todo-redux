import moment from 'moment';
import firebase, { firebaseRef, githubProvider } from 'app/firebase/';

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

        const uid = getState().auth.uid;
        const todoRef = firebaseRef.child(`users/${uid}/todos`).push(todo); //reference to firebase pushing the todo 

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

export const startAddTodos = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const todosRef = firebaseRef.child(`users/${uid}/todos`);
    
    return todosRef.once('value').then((snapshot) => {
      const todos = snapshot.val() || {};
      const parsedTodos = [];
      Object.keys(todos).forEach((todoId) => {
        parsedTodos.push({
          id: todoId,
          ...todos[todoId]
        });
      });

      dispatch(addTodos(parsedTodos));
    });
  };
};

export const removeTodo = (id) => {
    return {
        type: 'DELETE_TODO',
        id
    };
};

export const startRemoveTodo = (id) => {
        return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const todoRef = firebaseRef.child(`users/${uid}/todos/${id}`);
    const updates = {
        completed: null,
        createdAt: null,
        text: null
    };
    return todoRef.update(updates).then(() => {
            dispatch(removeTodo(id));
        });
    };
};

//toggle show completed
export const toggleShow = () => {
    return {
        type: 'TOGGLE_SHOW_COMPLETED'
    };
};


//toggleTodo(id) TOGGLE_TODO
export const updateTodo = (id, updates) => {
    return {
        type: 'UPDATE_TODO',
        id,
        updates
    };
};

export const startToggleTodo = (id, completed) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const todoRef = firebaseRef.child(`users/${uid}/todos/${id}`);
        const updates = {
            completed,
            completedAt: completed ? moment().unix() : null
        };

        return todoRef.update(updates).then(() => {
            dispatch(updateTodo(id, updates));
        });
    };
};

export const startLogin = () => {
    return (dispatch, getState) => {
        firebase.auth().signInWithPopup(githubProvider).then((result) => {
console.log('Auth worked ', result);
        }, (error) => {
console.log('unable to auth ', error);
        });
    };
};

export const startLogout = () => {
    return (dispatch, getState) => {
        firebase.auth().signOut().then(() => {
            console.log('logged out');
        }, (e) => {
console.log('error logging out ', e);
        });
    };
};

export const login = (uid) => {
    return {
        type: 'LOGIN',
        uid
    };
};

export const logout = () => {
    return {
        type: 'LOGOUT'
    };
};


