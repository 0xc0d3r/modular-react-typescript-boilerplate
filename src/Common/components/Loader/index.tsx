import * as React from 'react';
import ReactLoader from 'react-loader-spinner';

import colors from '../../themes/Colors';

type Types =
  | 'Audio'
  | 'BallTriangle'
  | 'Bars'
  | 'Circles'
  | 'Grid'
  | 'Hearts'
  | 'Oval'
  | 'Puff'
  | 'Rings'
  | 'TailSpin'
  | 'ThreeDots'
  | 'Watch'
  | 'RevolvingDot'
  | 'Triangle'
  | 'Plane'
  | 'MutatingDots'
  | 'None'
  | 'NotSpecified';

interface LoaderProps {
  height?: number;
  width?: number;
  type?: Types;
  color?: string;

  [x: string]: any;
}

class Loader extends React.Component<LoaderProps> {
  static defaultProps = {
    type: 'Oval',
    color: colors.primaryColor,
    height: 30,
    width: 30
  };

  render() {
    const { height, width, type, color, ...other } = this.props;
    return (
      <ReactLoader
        type={type}
        color={color}
        height={height}
        width={width}
        {...other}
      />
    );
  }
}

export default Loader;
