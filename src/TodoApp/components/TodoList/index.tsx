import React, { Component, ReactElement } from 'react'
import { observer } from 'mobx-react'

import TodoStore from '../../stores/TodoStore'
import Todo from '../../stores/models/Todo'

import TodoItem from './TodoItem'

interface TodoListProps {
   todoStore: TodoStore
}

@observer
class TodoList extends Component<TodoListProps> {
   onDeleteTodo = (todo: Todo): void => {
      const { todoStore } = this.props
      todoStore.deleteTodo(todo)
   }

   renderTodos(): Array<ReactElement> {
      const { todoStore } = this.props
      return todoStore.filteredTodos.map(todo => (
         <TodoItem key={todo.id} todo={todo} onDeleteTodo={this.onDeleteTodo} />
      ))
   }

   render() {
      return <div> {this.renderTodos()} </div>
   }
}

export default TodoList
