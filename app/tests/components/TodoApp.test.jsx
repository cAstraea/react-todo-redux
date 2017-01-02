const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const expect = require('expect');
const $ = require('jquery');

const TodoApp = require('TodoApp');

describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toExist();
  });

  it('should add todo to the todo state on handleAddTodo', () => {
    const todoText = 'test text';
    const todoApp = TestUtils.renderIntoDocument(<TodoApp />);
    
    todoApp.setState({ todos: [] }); // clear todos
    todoApp.handleAddTodo(todoText); //add test text todo

    expect(todoApp.state.todos[0].text).toBe(todoText);
  });
});
