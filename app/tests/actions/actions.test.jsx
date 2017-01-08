import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import firebase, {firebaseRef} from 'app/firebase'

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

        it('should generate update todo action', () => {
        const action = {
            type: 'UPDATE_TODO',
            id: 42,
            updates: { completed: false }
        };
        const res = actions.updateTodo(action.id, action.updates);

        expect(res).toEqual(action);
    });

    describe('Tests with firebase todos', () => {
        let testTodoRef;
        beforeEach((done) => {
            //new todo item
            testTodoRef = firebaseRef.child('todos').push();
        testTodoRef.set({
            text: 'something to do test',
            completed: false,
            createdAt: 32423432
        }).then(() => done()); //end before each
        });

        afterEach((done) => {
            //remove the todo created in before each
            testTodoRef.remove().then(() => done());
        });

        it('should toggle todo and dispatch UPDATE_TODO action', (done) => {
            const store = createMockStore({});

            const action = actions.startToggleTodo(testTodoRef.key, true);

            store.dispatch(action).then(() => {
                const mockActions = store.getActions(); 

                expect(mockActions[0]).toInclude({
                    type: 'UPDATE_TODO',
                    id: testTodoRef.key
                });

                expect(mockActions[0].updates).toInclude({
                    completed: true
                });

                expect(mockActions[0].updates.completedAt).toExist();
                
                done();
            }, done);
        });
    });
});

