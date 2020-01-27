import React, { ReactElement } from 'react'

import {
  HomePageContainer,
  Header,
  HeaderText,
  ReactMobXTSContainer
} from './styledComponents'

import ReactMobXTSLogo from './react_mobx_typescript.png'

function HomePage(): ReactElement {
  return (
    <HomePageContainer>
      <Header>
        <HeaderText>Modular React MobX Typescript Boilerplate</HeaderText>
      </Header>
      <ReactMobXTSContainer>
        <img src={ReactMobXTSLogo} alt='React MobX TypeScript' />
      </ReactMobXTSContainer>
    </HomePageContainer>
  )
}

export default HomePage
