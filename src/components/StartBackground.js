// @flow
import React from 'react';
import { Svg, Polygon } from 'react-native-svg';
import { Dimensions } from 'react-native';

const StartBackground = () => {
  const { height, width } = Dimensions.get('window');
  const heights = [height * 0.2, height * 0.4, height * 0.6, height * 0.8];
  const widths = [width * 0.2, width * 0.4, width * 0.6, width * 0.8, width];

  const generatePoints = (type) => {
    let points = '0,0';
    for (let i = -1; i < 6; i += 1) {
      let w = 0;
      let h = heights[type];
      if (i >= 0 && i < 5) {
        w = widths[i];
      } else if (i > 4) {
        w = widths[4];
        h = 0;
      }
      const random = (i + 2) % 2 === 0 ? -30 : 30; // todo: actually make this randomized
      points += ` ${w},${h + random}`;
    }
    return points;
  };

  return (
    <Svg height={heights[3].toString()} width={width.toString()}>
      <Polygon points={generatePoints(2)} fill="yellow" />
      <Polygon points={generatePoints(1)} fill="orange" />
      <Polygon points={generatePoints(0)} fill="black" />
    </Svg>
  );
};

export default StartBackground;
