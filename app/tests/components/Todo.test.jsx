import * as actions from 'actions';
import { Todo } from 'Todo';

const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const expect = require('expect');
const $ = require('jquery');



describe('Todo', () => {
  it('should exist', () => {
    expect(Todo).toExist();
  });

  it('should dispatch TOGGLE_TODO on click', () => {
    const todoData = { 
      id: 199,
      text: 'write todo.test.jsx test',
      completed: true
    };

    const action = actions.startToggleTodo(todoData.id, !todoData.completed);

    const spy = expect.createSpy();

    const todo = TestUtils.renderIntoDocument(<Todo {...todoData} dispatch={spy} />);

    const $el = $(ReactDOM.findDOMNode(todo)).children().eq(1); 
    
    TestUtils.Simulate.click($el[0]);

    expect(spy).toHaveBeenCalledWith(action);
  });
});
