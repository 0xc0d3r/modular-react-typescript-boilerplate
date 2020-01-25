import React, { Component } from 'react';
import { observer } from 'mobx-react';

interface CustomTagProps {
  tagName: any;
}

@observer
class CustomTag extends Component<CustomTagProps> {
  static defaultProps = {
    tagName: 'input'
  };

  inputRef: React.RefObject<HTMLInputElement>;

  constructor(props: CustomTagProps) {
    super(props);
    this.inputRef = React.createRef();
  }

  focus = () => {
    if (this.inputRef && this.inputRef.current) {
      this.inputRef.current.focus();
    }
  };

  render() {
    const { tagName: Tag, ...otherProps } = this.props;
    return <Tag ref={this.inputRef} {...otherProps} />;
  }
}

export default CustomTag;
