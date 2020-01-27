import React, { ReactElement } from 'react'
import { withRouter } from 'react-router-dom'
import { History } from 'history'

import ModulesSection from '../../components/ModulesSection'

import {
  HomePageContainer,
  Header,
  HeaderText,
  ReactMobXTSContainer
} from './styledComponents'

import ReactMobXTSLogo from './react_mobx_typescript.png'

interface HomePageProps {
  history: History
}

function HomePage(props: HomePageProps): ReactElement {
  const { history } = props
  return (
    <HomePageContainer>
      <Header>
        <HeaderText>Modular React MobX Typescript Boilerplate</HeaderText>
      </Header>
      <ReactMobXTSContainer>
        <img src={ReactMobXTSLogo} alt='React MobX TypeScript' />
      </ReactMobXTSContainer>
      <ModulesSection history={history} />
    </HomePageContainer>
  )
}

export default withRouter(HomePage)
