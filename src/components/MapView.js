// @flow
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Mapbox from '@mapbox/react-native-mapbox-gl';
import mapboxAccessToken from '../../secrets';

Mapbox.setAccessToken(mapboxAccessToken);

type Props = {
  challengeCoords: Array<{ lat: number, lng: number }>
};

export default class MapView extends Component<Props> {
  showChallengeArea = () => {
    const { challengeCoords } = this.props;
    challengeCoords.forEach(coord => console.log(coord));
  };

  render() {
    return (
      <View style={styles.container}>
        <Mapbox.MapView
          styleURL="mapbox://styles/johannarei/cjruk13aa0kgj1fnvtol2hnls"
          zoomLevel={15}
          centerCoordinate={[11.256, 43.77]}
        >
          {this.showChallengeArea()}
        </Mapbox.MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
