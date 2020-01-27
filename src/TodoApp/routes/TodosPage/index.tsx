import React, { Component } from 'react'
import { inject } from 'mobx-react'

import TodoStore from '../../stores/TodoStore'

import TodoInput from '../../components/TodoInput'
import TodoList from '../../components/TodoList'
import TodoFooter from '../../components/TodoFooter'

interface TodoAppProps {
  todoStore: TodoStore
}

@inject('todoStore')
class TodoApp extends Component<TodoAppProps> {
  onPressEnterKey = (todoDescription: string): void => {
    const { todoStore } = this.props
    todoStore.addTodo(todoDescription)
  }

  render() {
    const { todoStore } = this.props
    return (
      <div>
        <TodoInput onPressEnterKey={this.onPressEnterKey} />
        <TodoList todoStore={todoStore} />
        <TodoFooter todoStore={todoStore} />
      </div>
    )
  }
}
export default TodoApp
