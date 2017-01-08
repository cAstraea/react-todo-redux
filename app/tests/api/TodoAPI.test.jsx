const expect = require('expect');

const TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {
    beforeEach(() => { //run before every test
        localStorage.clear(); // clear the storage 
    });
    it('should exist', () => {
        expect(TodoAPI).toExist();
    });


    describe('filterTodos', () => {
        const todos = [
            {
            id: 1,
            text: 'some text',
            completed: true }, 
            {
            id: 2,
            text: 'other text',
            completed: false }, {
            id: 3,
            text: 'some here',
            completed: true }           
            ];
            it('should return all items if showCompleted is true', () => {
                const filteredTodos = TodoAPI.filteredTodos(todos, true, '');
                expect(filteredTodos.length).toBe(3);
            });

             it('should return non completed todos if showCompleted is false', () => {
                const filteredTodos = TodoAPI.filteredTodos(todos, false, '');
                expect(filteredTodos.length).toBe(1);
            });

            it('should sort by completed status', () => {
                const filteredTodos = TodoAPI.filteredTodos(todos, true, '');
                expect(filteredTodos[0].completed).toBe(false);
            });

           it('should filter todos by searchText', () => {
                const filteredTodos = TodoAPI.filteredTodos(todos, true, 'some');
                expect(filteredTodos.length).toBe(2);
            });

            it('should return all todos if searchText is empty', () => {
                const filteredTodos = TodoAPI.filteredTodos(todos, true, '');
                expect(filteredTodos.length).toBe(3);
            });                        
    });
});
