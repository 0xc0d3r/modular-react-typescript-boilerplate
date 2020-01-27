import React, { Component } from 'react'

interface TodoInputProps {
   onPressEnterKey: (desc: string) => void
}

interface TodoInputState {
   description: string
}

class TodoInput extends Component<TodoInputProps, TodoInputState> {
   state = {
      description: ''
   }

   onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
      this.setState({
         description: e.target.value
      })
   }

   onPressEnterKey = (e: React.KeyboardEvent<HTMLInputElement>): void => {
      const { onPressEnterKey } = this.props
      if (e.keyCode === 13) {
         onPressEnterKey(this.state.description)
         this.setState({
            description: ''
         })
      }
   }

   render() {
      return (
         <input
            value={this.state.description}
            type='text'
            name='todo-input'
            placeholder='What needs to be done?'
            onChange={this.onChange}
            onKeyDown={this.onPressEnterKey}
         />
      )
   }
}

export default TodoInput
