const expect = require('expect');
const df = require('deep-freeze-strict');
const reducers = require('reducers');

describe('Reducers', () => {
    describe('searchTextReducer', () => {
        it('should set searchText', () => {
            const action = {
                type: 'SET_SEARCH_TEXT',
                searchText: 'dog'
            };
         
            const res = reducers.searchTextReducer(df(''), df(action)); //call reducer 

            expect(res).toEqual(action.searchText);
        });
    });

    describe('showCompletedReducer', () => {
        it('should flip showCompleted status', () => {
            const action = {
                type: 'TOGGLE_SHOW_COMPLETED'
            };
    //call reducerwith current state and action
            const res = reducers.showCompletedReducer(df(false), df(action)); 

            expect(res).toBe(true);
        });
    });   

    describe('todosReducer', () => {
        it('should add new todo', () => {
            const action = {
                type: 'ADD_TODO',
                todo: {
                    id: 'asd231',
                    text: 'something to od',
                    completed: false,
                    createdAt: 324234
                    }
            };
    //call reducerwith current state and action     `
            const res = reducers.todosReducer(df([]), df(action)); 

            expect(res.length).toEqual(1); // array has been updated

            expect(res[0]).toEqual(action.todo); //assert that text was set for first element in the array
        });

           it('should add new todos', () => {
             const todos = [{
                id: 333,
                text: 'test text',
                completed: false,
                completedAt: undefined,
                createdAt: 33000
            }];

            const action = {
                type: 'ADD_TODOS',
                todos
            };
            const res = reducers.todosReducer(df([]), df(action));
            expect(res.length).toEqual(1);
            expect(res[0]).toEqual(todos[0]);      
           });
        
        it('should delete todo', () => {
        const todoData = [{ 
            id: 11,
            text: 'test feature',
            completed: true,
            createdAt: 123,
            completedAt: 129 },
            {
                id: 55,
            text: 'test feature 2',
            completed: false,
            createdAt: 123,
            completedAt: 129  
            }
            ];

            const action = {
            type: 'DELETE_TODO',
            id: 55
        };
         const res = reducers.todosReducer(df(todoData), df(action));

         expect(res.length).toBe(1);
        });

        it('should update todo', () => {           
        const todoData = [{ 
      id: 11,
      text: 'test feature',
      completed: true,
      createdAt: 123,
      completedAt: 129
        }];
        const updates = {
            completed: false,
            completedAt: null
        };
        const action = {
            type: 'UPDATE_TODO',
            id: todoData[0].id,
            updates
        };

        const res = reducers.todosReducer(df(todoData), df(action));

        expect(res[0].completed).toEqual(updates.completed);
         expect(res[0].completedAt).toEqual(updates.completedAt);
         expect(res[0].text).toEqual(todoData[0].text);
        });
    });

    describe('authReducer', () => {
    it('should store uuid on LOGIN', () => {
        const action = {
            type: 'LOGIN',
            uid: 'abcd1234'
        };
        const res = reducers.authReducer(undefined, df(action));

        expect(res).toEqual({
            uid: action.uid
        });
    });

    it('should wipe auto on logout', () => {
        const authData = {
            uid: 't12321321dfv'
        };
        const action = {
            type: 'LOGOUT'
        };
        const res = reducers.authReducer(df(authData), df(action));
        expect(res).toEqual({});
    });
});
});

