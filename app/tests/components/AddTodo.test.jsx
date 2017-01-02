const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const expect = require('expect');
const $ = require('jquery');

const AddTodo = require('AddTodo');

describe('Add Todo', () => {
  it('should exist', () => {
    expect(AddTodo).toExist();
  });

  it('Should call onAddTodo prop with valid data', () => {
      const todoText = 'Check mail';
      //create spy 
      const spy = expect.createSpy();

      const addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy} />);

      const $el = $(ReactDOM.findDOMNode(addTodo));  

      addTodo.refs.todoText.value = todoText; // fill input


      TestUtils.Simulate.submit($el.find('form')[0]); //submit the form 

      expect(spy).toHaveBeenCalledWith(todoText); 
  });

    it('Should not call onAddTodo prop with invvalid data', () => {
      const todoText = '';
      //create spy 
      const spy = expect.createSpy();

      const addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy} />);

      const $el = $(ReactDOM.findDOMNode(addTodo));  

      addTodo.refs.todoText.value = todoText; // fill input


      TestUtils.Simulate.submit($el.find('form')[0]); //submit the form 

      expect(spy).toNotHaveBeenCalled(); 
  });
});
