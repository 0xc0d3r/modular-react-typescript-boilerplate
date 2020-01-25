import styled from 'styled-components'

import Colors from '../../themes/Colors'

export const StyledButton = styled.button`
   border: none;
   min-width: 100px;
   height: 30px;
   background-color: ${Colors.azul};
   color: ${Colors.white};
   cursor: pointer;
   opacity: ${props => (props.disabled ? '0.5' : 'none')};
   outline: 0;
   ::-moz-focus-inner {
      border: 0;
   }
`

export const StyledText = styled.span`
   font-size: 14px;
   font-weight: 500;
   line-height: 1.16;
   letter-spacing: 1.24px;
   pointer-events: none;
`
