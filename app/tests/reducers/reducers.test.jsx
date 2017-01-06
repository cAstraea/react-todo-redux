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
                text: 'new todo'
            };
    //call reducerwith current state and action     `
            const res = reducers.todosReducer(df([]), df(action)); 

            expect(res.length).toEqual(1); // array has been updated

            expect(res[0].text).toEqual(action.text); //assert that text was set for first element in the array
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

        it('should toggle todo', () => {           
        const todoData = [{ 
      id: 11,
      text: 'test feature',
      completed: true,
      createdAt: 123,
      completedAt: 129
        }];
        
        const action = {
            type: 'TOGGLE_TODO',
            id: 11
        };

        const res = reducers.todosReducer(df(todoData), df(action));

        expect(res[0].completed).toEqual(false);
         expect(res[0].completedAt).toEqual(undefined);
        });
    });
});
