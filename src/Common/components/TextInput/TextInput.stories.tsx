import React, { Component } from 'react'
import { withKnobs } from '@storybook/addon-knobs'

import TextInput from '.'

export default {
   title: 'InputBox',
   decorators: [withKnobs]
}

class InputBox extends Component {
   state = { value: '' }

   onChange = (event: any) => {
      this.setState({
         value: event.target.value
      })
   }

   validate = () => {
      const { value } = this.state

      if (value === '') {
         return { shouldShowError: true, errorMessage: 'required' }
      }
      return {
         shouldShowError: false,
         errorMessage: ''
      }
   }

   render() {
      const { value } = this.state
      return (
         <TextInput
            value={value}
            onChange={this.onChange}
            placeholder={'Full Name'}
            validate={this.validate}
         />
      )
   }
}

export const textInput = () => <InputBox />
