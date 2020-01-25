import styled from 'styled-components';

import Colors from '../../themes/Colors';
import { BaseText } from '../../styleGuide/Typos';

import CustomTag from './CustomTag';
import { InputProps } from './types';

export const ErrorView = styled.div`
  flex-direction: row;
  margin-top: 3px;
  margin-left: 3px;
`;

export const ErrorMessage = styled(BaseText)`
  line-height: 2.03;
  letter-spacing: 0.11px;
  pointer-events: none;
  color: ${Colors.redTwo};
`;

interface Props extends InputProps {
  isValid: boolean;
}

export const Input = styled(CustomTag)<Props>`
  box-sizing: border-box;
  color: ${Colors.blackSeven};
  font-family: Roboto;
  font-size: 16px;
  height: 51px;
  font-weight: normal;
  line-height: 1.52;
  letter-spacing: 0.15px;
  padding-left: 16px;
  margin-top: 20px;
  border-radius: 4px;
  border: solid 0.9px;
  border-color: ${props =>
    props.isValid ? Colors.black32 : Colors.pinkishOrange};
  background-color: ${Colors.white};
  &:focus {
    border: solid 1.5px
      ${props => (props.isValid ? Colors.azulTwo : Colors.pinkishOrange)};
    outline: none;
    font-weight: bold;
  }
  &:active {
    border: solid 1.5px
      ${props => (props.isValid ? Colors.azulTwo : Colors.pinkishOrange)};
    outline: none;
    font-weight: bold;
  }
  &:disabled {
    border: solid 0.9px;
    border-color: ${Colors.black32};
    color: ${Colors.darkGreyBlueTwoSix};
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.2px;
  }
  &::-webkit-input-placeholder {
    color: ${props =>
      props.isValid ? Colors.silver : Colors.blueyGrey} !important;
    opacity: 1;
  }
  &:-moz-placeholder {
    color: ${props =>
      props.isValid ? Colors.silver : Colors.blueyGrey} !important;
    opacity: 1;
  }
  &::-moz-placeholder {
    color: ${props =>
      props.isValid ? Colors.silver : Colors.blueyGrey} !important;
    opacity: 1;
  }
  &:-ms-input-placeholder {
    color: ${props =>
      props.isValid ? Colors.silver : Colors.blueyGrey} !important;
    opacity: 1;
  }
`;

export const InputContainer = styled.div`
  width: 100%;
`;

export const textAreaStyles = {
  resize: 'none',
  lineHeight: 1.5
};
