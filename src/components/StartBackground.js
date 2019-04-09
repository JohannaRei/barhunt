// @flow
import React from 'react';
import { Svg, Polygon } from 'react-native-svg';
import { Dimensions } from 'react-native';

const StartBackground = () => {
  const height = Dimensions.get('window').height / 5;
  const heights = [height, height * 2, height * 3, height * 4];
  const width = Dimensions.get('window').width / 5;
  const widths = [width, width * 2, width * 3, width * 4, width * 5];

  return (
    <Svg height="1000" width="2000">
      <Polygon
        points={`0,0 0,${heights[2]} ${widths[0]},${heights[2] + 50} ${widths[1]},${heights[2]
          - 30} ${widths[2]},${heights[2] + 10} ${widths[3]},${heights[2] - 20} ${widths[4]},${
          heights[2]
        } ${widths[4]},0`}
        fill="yellow"
        stroke="yellow"
        strokeWidth="1"
      />
      <Polygon
        points={`0,0 0,${heights[1]} ${widths[0]},${heights[1] + 40} ${widths[1]},${heights[1]
          - 20} ${widths[2]},${heights[1] + 30} ${widths[3]},${heights[1] - 10} ${
          widths[4]
        },${heights[1] + 40} ${widths[4]},0`}
        fill="orange"
        stroke="orange"
        strokeWidth="1"
      />
      <Polygon
        points={`0,0 0,${height} ${widths[0]},${heights[0] - 20} ${widths[1]},${heights[0] + 40} ${
          widths[2]
        },${heights[0] - 15} ${widths[3]},${heights[0]} ${widths[4]},${heights[0] + 50} ${
          widths[4]
        },0`}
        fill="black"
        stroke="black"
        strokeWidth="1"
      />
    </Svg>
  );
};

export default StartBackground;
