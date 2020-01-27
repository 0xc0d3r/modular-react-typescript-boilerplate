import { todoFilterTypes } from '../../constants/TodoAppConstants'

import TodoStore from './index'

describe( 'TodoStore', () => {
  let todoStore: TodoStore
  beforeEach( () => {
    todoStore = new TodoStore()
    todoStore.addTodo( 'Learn Jest' )
    todoStore.addTodo( 'Learn RTL' )
    todoStore.addTodo( 'Learn TDD' )
    return todoStore
  } )
  it( 'should add a todo to list of todo items', () => {
    expect( todoStore.todos.length ).toBe( 3 )
    todoStore.addTodo( 'Learn Clean code' )
    expect( todoStore.todos.length ).toBe( 4 )
  } )

  it( 'should delete the given todo from list of todo items', () => {
    expect( todoStore.todos.length ).toBe( 3 )
    todoStore.deleteTodo( todoStore.todos[ 0 ] )
    expect( todoStore.todos.length ).toBe( 2 )
  } )

  it( 'should clear completed todo items', () => {
    expect( todoStore.todos.length ).toBe( 3 )
    todoStore.todos[ 0 ].toggleCompleted()
    todoStore.todos[ 2 ].toggleCompleted()
    todoStore.clearCompleted()
    expect( todoStore.todos.length ).toBe( 1 )
  } )

  it( 'should check for default filter value as ALL', () => {
    expect( todoStore.appliedFilter ).toBe( todoFilterTypes.all )
  } )

  it( 'should set the applied filter value as ALL', () => {
    todoStore.setAppliedFilter( todoFilterTypes.all )
    expect( todoStore.appliedFilter ).toBe( todoFilterTypes.all )
    expect( todoStore.filteredTodos.length ).toBe( 3 )
  } )

  it( 'should set the applied filter value as ACTIVE', () => {
    todoStore.todos[ 0 ].toggleCompleted()

    todoStore.setAppliedFilter( todoFilterTypes.active )

    expect( todoStore.appliedFilter ).toBe( todoFilterTypes.active )
    expect( todoStore.filteredTodos.length ).toBe( 2 )
  } )

  it( 'should set the applied filter value as COMPLETED', () => {
    todoStore.todos[ 0 ].toggleCompleted()

    todoStore.setAppliedFilter( todoFilterTypes.completed )

    expect( todoStore.appliedFilter ).toBe( todoFilterTypes.completed )
    expect( todoStore.filteredTodos.length ).toBe( 1 )
  } )
} )
