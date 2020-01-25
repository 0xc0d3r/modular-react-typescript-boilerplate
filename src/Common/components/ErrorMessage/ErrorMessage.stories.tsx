import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import ErrorMessage from '.'

storiesOf('Component Guide', module).add('ErrorMessage Component', () => (
   <ErrorMessage />
))
