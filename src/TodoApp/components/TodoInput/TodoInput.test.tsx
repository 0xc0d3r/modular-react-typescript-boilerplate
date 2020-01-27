import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import TodoInput from './index'

describe('TodoInput', () => {
   test('calls onPressEnterKey and pass input value as an argument', () => {
      const onPressEnterKey = jest.fn()
      const { getByPlaceholderText } = render(
         <TodoInput onPressEnterKey={onPressEnterKey} />
      )
      const todoInputField = getByPlaceholderText('What needs to be done?')
      fireEvent.change(todoInputField, {
         target: { value: 'Learn TDD' }
      })
      fireEvent.keyDown(todoInputField, {
         key: 'Enter',
         keyCode: 13,
         which: 13
      })
      expect(onPressEnterKey).toBeCalledWith('Learn TDD')
   })
})
