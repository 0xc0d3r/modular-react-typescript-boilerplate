import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/react/cleanup-after-each'

import { todoFilterTypes } from '../../constants/TodoAppConstants'
import TodoStore from '../../stores/TodoStore'

import TodoFooter from './index'

describe('TodoFooter', () => {
   it('should clear completed todos', () => {
      const todoStore = new TodoStore()
      jest.spyOn(todoStore, 'clearCompleted')
      const { getByTestId } = render(<TodoFooter todoStore={todoStore} />)
      const clearCompletedBtn = getByTestId('clear-completed-btn')
      fireEvent.click(clearCompletedBtn)
      expect(todoStore.clearCompleted).toBeCalledTimes(1)
   })

   it('should set applied filter as ALL after clicking on All button', () => {
      const todoStore = new TodoStore()
      jest.spyOn(todoStore, 'setAppliedFilter')
      const { getByText } = render(<TodoFooter todoStore={todoStore} />)
      const allFilterBtn = getByText('All')
      fireEvent.click(allFilterBtn)
      expect(todoStore.setAppliedFilter).toBeCalledWith(todoFilterTypes.all)
   })

   it('should set applied filter as ACTIVE after clicking on Active button', () => {
      const todoStore = new TodoStore()
      jest.spyOn(todoStore, 'setAppliedFilter')
      const { getByText } = render(<TodoFooter todoStore={todoStore} />)
      const activeFilterBtn = getByText('Active')
      fireEvent.click(activeFilterBtn)
      expect(todoStore.setAppliedFilter).toBeCalledWith(todoFilterTypes.active)
   })

   it('should set applied filter as COMPLETED after clicking on Completed button', () => {
      const todoStore = new TodoStore()
      jest.spyOn(todoStore, 'setAppliedFilter')
      const { getByText } = render(<TodoFooter todoStore={todoStore} />)
      const completedFilterBtn = getByText('Completed')
      fireEvent.click(completedFilterBtn)
      expect(todoStore.setAppliedFilter).toBeCalledWith(
         todoFilterTypes.completed
      )
   })
})
