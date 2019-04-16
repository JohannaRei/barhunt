// @flow
import React, { Component } from 'react';
import { Dimensions, StatusBar } from 'react-native';
import { Screen, Text, StartBackground } from '@comp';
import { Button } from 'native-base';

type Props = {
  navigation: any
};
type State = {
  widths: Array<number>,
  heights: Array<number>,
  width: number,
  points: Array<string>
};

class StartScreen extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      widths: [],
      heights: [],
      width: 0,
      points: []
    };
  }

  componentWillMount() {
    const { height, width } = Dimensions.get('window');
    const heights = [height * 0.15, height * 0.35, height * 0.55, height * 0.75];
    const widths = [width * 0.2, width * 0.4, width * 0.6, width * 0.8, width];
    this.setState({ heights, widths, width }, () => this.generatePoints());
  }

  generatePoints = () => {
    const { widths, heights, width } = this.state;
    const allPoints = [];
    for (let i = 0; i < 3; i += 1) {
      const points = ['0,0', `0,${heights[i]}`];
      const nh = widths.map((h, idx) => {
        const random = idx % 2 === 0 ? Math.random() * 10 + 50 : Math.random() * -50 - 10;
        return heights[i] + Math.floor(random);
      });
      widths.forEach((w, idx) => points.push(`${w},${nh[idx]}`));
      points.push(`${width},0`);
      allPoints.push(points.join(' '));
    }
    this.setState({ points: allPoints });
  };

  render() {
    const { navigation } = this.props;
    const { points, heights, width } = this.state;
    return (
      <Screen>
        <StatusBar barStyle="light-content" />
        <StartBackground points={points} totalHeight={heights[3]} width={width} />
        <Text tx="startScreen.welcome" />
        <Button block danger onPress={() => navigation.navigate('name')}>
          <Text tx="startScreen.button" />
        </Button>
      </Screen>
    );
  }
}

export default StartScreen;
