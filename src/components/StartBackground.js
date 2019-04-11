// @flow
import React from 'react';
import { Svg, Polygon } from 'react-native-svg';

const StartBackground = ({ points, totalHeight, width }) => (
  <Svg height={totalHeight.toString()} width={width.toString()}>
    <Polygon points={points[2]} fill="yellow" />
    <Polygon points={points[1]} fill="orange" />
    <Polygon points={points[0]} fill="black" />
  </Svg>
);

export default StartBackground;
