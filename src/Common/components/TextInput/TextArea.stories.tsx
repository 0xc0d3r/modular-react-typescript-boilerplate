import React, { Component } from 'react'
import { withKnobs } from '@storybook/addon-knobs'

import TextArea from './TextArea'

export default {
   title: 'TextArea',
   decorators: [withKnobs]
}

class TextAreaStory extends Component {
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
         <TextArea
            value={value}
            onChange={this.onChange}
            placeholder={'Address'}
            validate={this.validate}
         />
      )
   }
}

export const TextAreaStoryComponent = () => <TextAreaStory />
