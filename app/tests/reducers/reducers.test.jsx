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
    //call reducerwith current state and action     `
            const res = reducers.showCompletedReducer(df(false), df(action)); 

            expect(res).toBe(true);
        });
    });    
});