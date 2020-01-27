import React, { Component } from 'react'
import { observer } from 'mobx-react'

import BaseInput from './BaseInput'

import { InputProps } from './types'

@observer
class TextInput extends Component<InputProps> {
   inputRef: React.RefObject<BaseInput>

   constructor(props: InputProps) {
      super(props)
      this.inputRef = React.createRef()
   }

   validateInput = () => {
      if (this.inputRef && this.inputRef.current) {
         this.inputRef.current.validateInput()
      }
   }

   onBlur = () => {
      if (this.inputRef && this.inputRef.current) {
         this.inputRef.current.onBlur()
      }
   }

   onFocus = () => {
      if (this.inputRef && this.inputRef.current) {
         this.inputRef.current.onFocus()
      }
   }

   focus = () => {
      if (this.inputRef && this.inputRef.current) {
         this.inputRef.current.focus()
      }
   }

   render() {
      return <BaseInput ref={this.inputRef} {...this.props} />
   }
}

export default TextInput
