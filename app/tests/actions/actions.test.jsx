const expect = require('expect');
const actions = require('actions');

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
            text: 'test todo'
        };
        const res = actions.addTodo(action.text);

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
