import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const expect = require('expect');
const actions = require('actions');

const createMockStore = configureMockStore([thunk]); //generate mock store

describe('Actions', () => {
    it('should geneerate search text action', () => {
        const action = {
            type: 'SET_SEARCH_TEXT',
            searchText: 'text'
        };
        const res = actions.setSearchText(action.searchText);

        expect(res).toEqual(action);
    });

        it('should generate add todo action', () => {
        const action = {
            type: 'ADD_TODO',
            todo: {
                id: '123dfdff',
                text: 'text test',
                completed: false,
                createdAt: 0
                }
        };
        const res = actions.addTodo(action.todo);

        expect(res).toEqual(action);
    });

    it('should create todo and dispatch ADD_TODO', (done) => { //async test
        const store = createMockStore({});
        const todoText = 'My todo item';

        store.dispatch(actions.startAddTodo(todoText)).then(() => {
            const actionsMock = store.getActions(); // return array of actions that were fired on mock store
            expect(actionsMock[0]).toInclude({
                type: 'ADD_TODO'
            });
            expect(actionsMock[0].todo).toInclude({
                text: todoText
            });
            done(); //wrap async test is done
        }).catch(done);
    });

        it('should generate add todos action object', () => {
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

        const res = actions.addTodos(todos);

        expect(res).toEqual(action);
    });    

        it('should generate toggle show action', () => {
        const action = {
            type: 'TOGGLE_SHOW_COMPLETED'
        };
        const res = actions.toggleShow();

        expect(res).toEqual(action);
    });

        it('should generate toggle todo action', () => {
        const action = {
            type: 'TOGGLE_TODO',
            id: 42
        };
        const res = actions.toggleTodo(action.id);

        expect(res).toEqual(action);
    });
});
