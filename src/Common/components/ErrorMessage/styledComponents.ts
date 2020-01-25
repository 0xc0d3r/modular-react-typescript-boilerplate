import styled from 'styled-components'

import { BaseRobotoBoldText } from '../../styleGuide/Typos'

import Colors from '../../themes/Colors'

export const ErrorView = styled.div`
   flex-direction: row;
   margin-top: 3px;
   margin-left: 3px;
`

export const ErrorMessageContainer = styled(BaseRobotoBoldText)`
   line-height: 2.03;
   letter-spacing: 0.11px;
   pointer-events: none;
   color: ${Colors.redTwo};
`
