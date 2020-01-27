import { action, observable } from 'mobx'

import { TodoObject } from '../../types'
class Todo {
  id: number
  @observable description: string
  @observable completed: boolean

  constructor ( todo: TodoObject ) {
    const { id, description, completed } = todo
    this.id = id
    this.description = description
    this.completed = completed
  }

  @action.bound
  toggleCompleted (): void {
    this.completed = !this.completed
  }
}

export default Todo
