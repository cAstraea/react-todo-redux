const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const expect = require('expect');
const $ = require('jquery');

const { AddTodo } = require('AddTodo');

describe('Add Todo', () => {
  it('should exist', () => {
    expect(AddTodo).toExist();
  });

  it('Should dispatch ADD_TODO when valid todo text', () => {
      const todoText = 'Check mail';

      const action = {
        type: 'ADD_TODO',
        text: todoText
      };
      //create spy 
      const spy = expect.createSpy();

      const addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy} />);

      const $el = $(ReactDOM.findDOMNode(addTodo));  

      addTodo.refs.todoText.value = todoText; // fill input


      TestUtils.Simulate.submit($el.find('form')[0]); //submit the form 

      expect(spy).toHaveBeenCalledWith(action); 
  });

    it('should nto dispatch ADD_TODO when invalid text', () => {
      const todoText = '';
      //create spy 
      const spy = expect.createSpy();

      const addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy} />);

      const $el = $(ReactDOM.findDOMNode(addTodo));  

      addTodo.refs.todoText.value = todoText; // fill input


      TestUtils.Simulate.submit($el.find('form')[0]); //submit the form 

      expect(spy).toNotHaveBeenCalled(); 
  });
});
