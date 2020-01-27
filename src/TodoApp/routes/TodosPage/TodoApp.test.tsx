import React from 'react'
import { fireEvent, render } from '@testing-library/react'

import TodoStore from '../../stores/TodoStore'

import TodoApp from './index'

describe('TodoApp', () => {
  it('should call addTodo method in TodoStore on press Enter key', () => {
    const todoStore = new TodoStore()
    jest.spyOn(todoStore, 'addTodo')
    const { getByPlaceholderText } = render(<TodoApp todoStore={todoStore} />)
    const todoInputField = getByPlaceholderText('What needs to be done?')
    fireEvent.change(todoInputField, {
      target: { value: 'Learn TDD' }
    })
    fireEvent.keyDown(todoInputField, {
      key: 'Enter',
      keyCode: 13,
      which: 13
    })
    expect(todoStore.addTodo).toBeCalledWith('Learn TDD')
  })
})
