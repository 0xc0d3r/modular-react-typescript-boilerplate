import Todo from './index'

describe('Todo', () => {
  it('should toggle the todo completion status', () => {
    const newTodo = {
      id: Date.now(),
      description: 'Learn TDD',
      completed: false
    }
    const todo = new Todo(newTodo)
    expect(todo.completed).toBe(false)
    todo.toggleCompleted()
    expect(todo.completed).toBe(true)
    todo.toggleCompleted()
    expect(todo.completed).toBe(false)
  })
})
