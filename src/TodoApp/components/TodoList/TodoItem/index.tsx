import React, { Component, ReactElement } from 'react'

import { observer } from 'mobx-react'

import Todo from '../../../stores/models/Todo'

import { StrikeText, TodoItemText } from './styledComponents'
interface TodoItemProps {
  todo: Todo
  onDeleteTodo: (todo: Todo) => void
}

@observer
class TodoItem extends Component<TodoItemProps> {
  onToggleTodoCompletion = (): void => {
    const { todo } = this.props
    todo.toggleCompleted()
  }

  onDeleteTodo = (): void => {
    const { todo, onDeleteTodo } = this.props
    onDeleteTodo(todo)
  }

  renderDescription = (): ReactElement => {
    const {
      todo: { completed, description }
    } = this.props
    if (completed) {
      return <StrikeText>{description}</StrikeText>
    }
    return <TodoItemText>{description}</TodoItemText>
  }

  render() {
    const {
      todo: { id, completed }
    } = this.props
    return (
      <div>
        <input
          checked={completed}
          type='checkbox'
          data-testid={id}
          onChange={this.onToggleTodoCompletion}
        />
        {this.renderDescription()}
        <button data-testid={`delete-btn-${id}`} onClick={this.onDeleteTodo}>
          X
        </button>
      </div>
    )
  }
}

export default TodoItem
