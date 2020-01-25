import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { observable, action } from 'mobx';

import { InputProps } from './types';

import {
  Input,
  ErrorView,
  ErrorMessage,
  InputContainer
} from './styledComponents';

interface Props extends InputProps {}

@observer
class BaseInput extends Component<Props> {
  inputRef: React.RefObject<HTMLInputElement>;

  constructor(props: Props) {
    super(props);
    this.inputRef = React.createRef();
  }

  static defaultProps = {
    validate: () => ({ shouldShowError: false, errorMessage: '' }),
    shouldValidateOnBlur: true
  };

  @observable error = '';

  @action setError(errorText: string) {
    this.error = errorText;
  }

  validateInput = () => {
    const { validate } = this.props;
    if (validate) {
      const result = validate();
      if (result.shouldShowError) {
        this.setError(result.errorMessage);
      } else {
        this.setError('');
      }
    }
  };

  onBlur = () => {
    const { shouldValidateOnBlur } = this.props;
    if (shouldValidateOnBlur) {
      this.validateInput();
    }
  };

  onFocus = () => {
    this.setError('');
  };

  focus = () => {
    if (this.inputRef && this.inputRef.current) {
      this.inputRef.current.focus();
    }
  };

  isError = () => this.error !== '';

  render() {
    const isValid = !this.isError();
    const { containerClassName, errorId, ...otherProps } = this.props;
    return (
      <InputContainer className={containerClassName}>
        <Input
          ref={this.inputRef}
          data-testid="input"
          isValid={isValid}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          {...otherProps}
        />
        {/*TODO: need to write the Error Component as common Component */}
        {this.isError() ? (
          <ErrorView id={errorId}>
            <ErrorMessage>{`* ${this.error}`}</ErrorMessage>
          </ErrorView>
        ) : null}
      </InputContainer>
    );
  }
}

export default BaseInput;
