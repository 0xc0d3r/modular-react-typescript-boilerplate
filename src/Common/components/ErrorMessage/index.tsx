import * as React from 'react'

import { ErrorView, ErrorMessageContainer } from './styledComponents'

interface ErrorMessageProps {
   errorMessage: string
   errorId?: string
}

class ErrorMessage extends React.Component<ErrorMessageProps> {
   static defaultProps = {
      errorMessage: '*required'
   }

   render() {
      const { errorMessage, errorId } = this.props
      return (
         <ErrorView id={errorId}>
            <ErrorMessageContainer>{errorMessage}</ErrorMessageContainer>
         </ErrorView>
      )
   }
}

export default ErrorMessage
