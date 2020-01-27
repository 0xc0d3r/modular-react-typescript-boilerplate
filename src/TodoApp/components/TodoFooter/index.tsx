import React, { Component } from 'react'
import { observer } from 'mobx-react'

import { todoFilterTypes } from '../../constants/TodoAppConstants'
import TodoStore from '../../stores/TodoStore'

interface TodoFooterProps {
  todoStore: TodoStore
}

@observer
class TodoFooter extends Component<TodoFooterProps> {
  handleSelectAll = (): void => {
    const { todoStore } = this.props
    todoStore.setAppliedFilter(todoFilterTypes.all)
  }

  handleSelectActive = (): void => {
    const { todoStore } = this.props
    todoStore.setAppliedFilter(todoFilterTypes.active)
  }

  handleSelectCompleted = (): void => {
    const { todoStore } = this.props
    todoStore.setAppliedFilter(todoFilterTypes.completed)
  }

  handleClearCompleted = (): void => {
    const { todoStore } = this.props
    todoStore.clearCompleted()
  }

  render() {
    const { todoStore } = this.props

    return (
      <div>
        <p>Todos Left: {todoStore.todosLeft}</p>
        <button onClick={this.handleSelectAll}>All</button>
        <button onClick={this.handleSelectActive}>Active</button>
        <button onClick={this.handleSelectCompleted}>Completed</button>

        <button
          onClick={this.handleClearCompleted}
          data-testid='clear-completed-btn'
        >
          Clear completed
        </button>
      </div>
    )
  }
}

export default TodoFooter
