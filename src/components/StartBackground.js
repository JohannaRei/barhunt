// @flow
import React from 'react';
import { Svg, Polygon } from 'react-native-svg';

type Props = {
  points: Array<string>,
  totalHeight: number,
  width: number
};

const StartBackground = ({ points, totalHeight, width }: Props) => (
  <Svg height={totalHeight.toString()} width={width.toString()}>
    <Polygon points={points[2]} fill="yellow" />
    <Polygon points={points[1]} fill="orange" />
    <Polygon points={points[0]} fill="black" />
  </Svg>
);

export default StartBackground;
