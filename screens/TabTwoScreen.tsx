// TabTwoScreen.tsx
import React, { useState } from 'react';
import { StyleSheet, Dimensions } from 'react-native';

import { View } from '../components/Themed';
import MapView, { Marker } from 'react-native-maps';

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 29.9990674;
const LONGITUDE = -90.0852767;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

// export default function TabTwoScreen() {
//   const [region, setRegion] = useState({
//     latitude: LATITUDE,    // initial location latitude
//     longitude: LONGITUDE,  // initial location longitude
//     latitudeDelta: LATITUDE_DELTA,
//     longitudeDelta: LONGITUDE_DELTA,
//   });
//   return (
//     <View style={styles.container}>
//       <MapView
//         provider="google" // {provider}
//         style={styles.map}
//         initialRegion={region}
//         zoomTapEnabled={false}
//       ></MapView>
//     </View>
//   );
// }


import { Component } from 'react';
import { Platform, Text } from 'react-native';
import { PROVIDER_GOOGLE } from 'react-native-maps';
export default class App extends React.Component {
  _onPressButton() {
    alert('You tapped the button!')
  }
  render() {
    return (
      <MapView
        style={{ flex: 1 }}
        provider={PROVIDER_GOOGLE}
        showsUserLocation
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker draggable coordinate={{ latitude: 37.78825, longitude: -122.4324 }} onDragEnd={(e) => this.setState({ x: e.nativeEvent.coordinate })}
          pinColor={"purple"} // any color
          title={"title"}
          description={"description"} />
      </MapView>

      

    );
  }
}

const styles = StyleSheet.create({
  customView: {
    width: 140,
    height: 140,
  },
  plainView: {
    width: 60,
  },
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  bubble: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.7)',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20,
  },
  latlng: {
    width: 200,
    alignItems: 'stretch',
  },
  button: {
    width: 80,
    paddingHorizontal: 12,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    backgroundColor: 'transparent',
  },
  calloutButton: {
    width: 'auto',
    backgroundColor: 'rgba(255,255,255,0.7)',
    paddingHorizontal: 6,
    paddingVertical: 6,
    borderRadius: 12,
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 10,
  },
});