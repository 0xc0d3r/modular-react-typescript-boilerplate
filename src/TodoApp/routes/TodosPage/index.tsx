import React, { Component } from 'react'
import { inject } from 'mobx-react'

import TodoStore from '../../stores/TodoStore'

import TodoInput from '../../components/TodoInput'
import TodoList from '../../components/TodoList'
import TodoFooter from '../../components/TodoFooter'

import { TodoAppContainer, TodoApp } from './styledComponents'

interface TodoAppProps {
  todoStore: TodoStore
}

@inject('todoStore')
class TodoAppPage extends Component<TodoAppProps> {
  onPressEnterKey = (todoDescription: string): void => {
    const { todoStore } = this.props
    todoStore.addTodo(todoDescription)
  }

  render() {
    const { todoStore } = this.props
    return (
      <TodoAppContainer>
        <TodoApp>
          <TodoInput onPressEnterKey={this.onPressEnterKey} />
          <TodoList todoStore={todoStore} />
          <TodoFooter todoStore={todoStore} />
        </TodoApp>
      </TodoAppContainer>
    )
  }
}
export default TodoAppPage
