import React, { ReactElement } from 'react'
import { History } from 'history'

import { gotoTodosPage } from '../../../TodoApp/utils/NavigationUtils'

import {
  ModulesContainer,
  ModulesTitle,
  ModulesDemoList,
  ModuleDemo
} from './styledComponents'

interface ModulesSectionProps {
  history: History
}

class ModulesSection extends React.Component<ModulesSectionProps> {
  onClickDemo = (): void => {
    const { history } = this.props
    gotoTodosPage(history)
  }
  render(): ReactElement {
    return (
      <ModulesContainer>
        <ModulesTitle>Modules Demos</ModulesTitle>
        <ModulesDemoList>
          <ModuleDemo onClick={this.onClickDemo}>Todo App</ModuleDemo>
        </ModulesDemoList>
      </ModulesContainer>
    )
  }
}

export default ModulesSection
