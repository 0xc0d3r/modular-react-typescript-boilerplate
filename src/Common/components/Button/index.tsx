import * as React from 'react';

import Colors from '../../themes/Colors';

import { ButtonProps } from './types';
import { StyledButton, StyledText } from './styledComponents';
import './styles.css';

class Button extends React.Component<ButtonProps> {
  static defaultProps = {
    disabled: false,
    textTypo: StyledText,
    textClassName: '',
    className: ''
  };

  renderContentBasedOnStatus = () => {
    const { text, textTypo: ButtonText, textClassName } = this.props;

    return <ButtonText className={textClassName}>{text}</ButtonText>;
  };

  render() {
    const { onClick, disabled, className, id, ...otherProps } = this.props;
    return (
      <StyledButton
        onClick={onClick}
        disabled={disabled}
        className={className}
        id={id}
        {...otherProps}
      >
        {this.renderContentBasedOnStatus()}
      </StyledButton>
    );
  }
}

export default Button;
