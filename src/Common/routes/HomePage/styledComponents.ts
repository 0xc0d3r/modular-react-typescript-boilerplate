import styled from 'styled-components'

import Colors from '../../themes/Colors'

export const HomePageContainer = styled.div`

`

export const Header = styled.div`
    height: 60px;
    background-color: ${Colors.primaryColor};

    display: flex;
    align-items: center;
`

export const HeaderText = styled.span`
    margin-left: 20px;
    color: ${Colors.white};
    font-size: 32px;
    font-weight: bold;
`

export const ReactMobXTSContainer = styled.div`
    margin-top: 20px;

    display: flex;
    justify-content: center;
    align-items: center;
`