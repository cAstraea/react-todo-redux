import { TodoSearch } from 'TodoSearch';

const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const expect = require('expect');
const $ = require('jquery');



describe('TodoSearch', () => {
    it('should exist', () => {
        expect(TodoSearch).toExist();
    });

    it('should dispatch set_Search_text on input changed', () => {
        const searchText = 'Dog';
        const action = {
            type: 'SET_SEARCH_TEXT',
            searchText
        };
        const spy = expect.createSpy();
        const todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy} />);

        todoSearch.refs.searchText.value = searchText; // set 'Dog' on input field
        TestUtils.Simulate.change(todoSearch.refs.searchText); //simulate change event

        expect(spy).toHaveBeenCalledWith(action);
    });

    it('should dispatch toggle show completed when checkbox checked', () => {
        const action = {
        type: 'TOGGLE_SHOW_COMPLETED'
        };
        const spy = expect.createSpy();
        const todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy} />);

        todoSearch.refs.showCompleted.checked = true; //checked value
        TestUtils.Simulate.change(todoSearch.refs.showCompleted);

        expect(spy).toHaveBeenCalledWith(action); // called with checkbox and no value
    });
});
