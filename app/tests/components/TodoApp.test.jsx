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
  // expect create at to be a number
    it('should be a number', () => {
          const todoText = 'test text';
    const todoApp = TestUtils.renderIntoDocument(<TodoApp />);
    
    todoApp.setState({ todos: [] }); // clear todos
    todoApp.handleAddTodo(todoText); //add test text todo
      expect(todoApp.state.todos[0].createdAt).toBeA('number');
    });
    

  it('should toggle completed value when handleToggle called', () => {
    const todoData = { 
      id: 11,
      text: 'test feature',
      completed: false,
      createdAt: 0,
      completedAt: undefined
    };

    const todoApp = TestUtils.renderIntoDocument(<TodoApp />);
    todoApp.setState({ todos: [todoData] }); // set the state to the todoData array

    //check that todos first item has completed value of false

 expect(todoApp.state.todos[0].completed).toBe(false);    

    //call handleToggle with 11

    todoApp.handleToggle(todoData.id);

    //verify that value changed

    expect(todoApp.state.todos[0].completed).toBe(true);  

    //except completedAt to be a number
    expect(todoApp.state.todos[0].completedAt).toBeA('number');
  });


  //test when toggle from true to false , completedAt gets removed
    it('should toggle todo from completed to incompleted', () => {
    const todoData = { 
      id: 11,
      text: 'test feature',
      completed: true,
      createdAt: 0,
      completedAt: 123
    };

    const todoApp = TestUtils.renderIntoDocument(<TodoApp />);
    todoApp.setState({ todos: [todoData] }); // set the state to the todoData array


 expect(todoApp.state.todos[0].completed).toBe(true);   

    todoApp.handleToggle(todoData.id);

    expect(todoApp.state.todos[0].completed).toBe(false);  


    expect(todoApp.state.todos[0].completedAt).toNotExist();
  });
});
