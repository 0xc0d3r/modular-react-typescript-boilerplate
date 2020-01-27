import { action, computed, observable } from 'mobx'

import { TodoFilterType, todoFilterTypes } from '../../constants/TodoAppConstants'

import Todo from '../models/Todo'
class TodoStore {
  @observable todos: Array<Todo>
  @observable appliedFilter: TodoFilterType
  constructor() {
    this.todos = []
    this.appliedFilter = todoFilterTypes.all
  }

  @action.bound
  addTodo( description: string ): void {
    const newTodo = {
      id: Date.now(),
      description,
      completed: false
    }
    this.todos.push( new Todo( newTodo ) )
  }

  @action.bound
  deleteTodo( todo: Todo ): void {
    // @ts-ignore
    this.todos.remove( todo )
  }

  @action.bound
  clearCompleted(): void {
    this.todos = this.todos.filter( todo => !todo.completed )
  }

  @action.bound
  setAppliedFilter( appliedFilter: TodoFilterType ): void {
    this.appliedFilter = appliedFilter
  }

  @computed
  get filteredTodos(): Array<Todo> {
    switch ( this.appliedFilter ) {
      case todoFilterTypes.all:
        return this.todos
      case todoFilterTypes.active:
        return this.todos.filter( todo => !todo.completed )
      case todoFilterTypes.completed:
        return this.todos.filter( todo => todo.completed )
      default:
        return this.todos
    }
  }

  @computed
  get todosLeft(): number {
    return this.todos.filter( todo => !todo.completed ).length
  }
}

export default TodoStore
