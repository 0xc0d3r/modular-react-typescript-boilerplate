import React, { Component } from 'react';
import { observer } from 'mobx-react';

import BaseInput from './BaseInput';

import { InputProps } from './types';

interface Props extends InputProps {}

@observer
class TextInput extends Component<Props> {
  inputRef: React.RefObject<BaseInput>;

  constructor(props: Props) {
    super(props);
    this.inputRef = React.createRef();
  }

  validateInput = () => {
    if (this.inputRef && this.inputRef.current) {
      this.inputRef.current.validateInput();
    }
  };

  onBlur = () => {
    if (this.inputRef && this.inputRef.current) {
      this.inputRef.current.onBlur();
    }
  };

  onFocus = () => {
    if (this.inputRef && this.inputRef.current) {
      this.inputRef.current.onFocus();
    }
  };

  focus = () => {
    if (this.inputRef && this.inputRef.current) {
      this.inputRef.current.focus();
    }
  };

  render() {
    return <BaseInput ref={this.inputRef} {...this.props} />;
  }
}

export default TextInput;
