import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import Todo from '../../../stores/models/Todo'

import TodoItem from './index'

describe('TodoItem', () => {
  let todo: Todo

  beforeEach(() => {
    const newTodo = {
      id: Date.now(),
      description: 'Learn TDD',
      completed: false
    }
    todo = new Todo(newTodo)
  })

  it('should complete the todo on check the checkbox', () => {
    jest.spyOn(todo, 'toggleCompleted')
    const { getByTestId } = render(
      <TodoItem todo={todo} onDeleteTodo={() => {}} />
    )
    const checkbox: any = getByTestId(`${todo.id}`)
    expect(checkbox.checked).toBe(false)
    fireEvent.click(checkbox)
    expect(checkbox.checked).toBe(true)
    expect(todo.toggleCompleted).toHaveBeenCalledTimes(1)
  })

  it('should delete the todo on click delete button', () => {
    const onDeleteTodo = jest.fn()
    const { getByTestId } = render(
      <TodoItem todo={todo} onDeleteTodo={onDeleteTodo} />
    )

    const deleteBtn = getByTestId(`delete-btn-${todo.id}`)
    fireEvent.click(deleteBtn)
    expect(onDeleteTodo).toBeCalledWith(todo)
  })
})
