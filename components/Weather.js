import React from 'react';
import propTypes from 'prop-types';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
// import Ionicons from '@expo/vector-icons/Ionicons'
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
  Thunderstorm: {
    iconName: 'weather-lightning',
    gradient: ['#83a4d4', '#b6fbff'],
  },
  Drizzle: {
    iconName: 'weather-snowy',
    gradient: ['#83a4d4', '#b6fbff'],
  },
  Rain: {
    iconName: 'weather-snowy',
    gradient: ['#83a4d4', '#b6fbff'],
  },
  Snow: {
    iconName: 'weather-snowy',
    gradient: ['#83a4d4', '#b6fbff'],
  },
  Mist: {
    iconName: 'weather-snowy',
    gradient: ['#83a4d4', '#b6fbff'],
  },
  Smoke: {
    iconName: 'weather-snowy',
    gradient: ['#83a4d4', '#b6fbff'],
  },
  Haze: {
    iconName: 'weather-snowy',
    gradient: ['#83a4d4', '#b6fbff'],
  },
  Dust: {
    iconName: 'weather-snowy',
    gradient: ['#83a4d4', '#b6fbff'],
  },
  Fog: {
    iconName: 'weather-snowy',
    gradient: ['#83a4d4', '#b6fbff'],
  },
  Sand: {
    iconName: 'weather-snowy',
    gradient: ['#83a4d4', '#b6fbff'],
  },
  Dust: {
    iconName: 'weather-snowy',
    gradient: ['#83a4d4', '#b6fbff'],
  },
  Ash: {
    iconName: 'weather-snowy',
    gradient: ['#83a4d4', '#b6fbff'],
  },
  Squall: {
    iconName: 'weather-snowy',
    gradient: ['#83a4d4', '#b6fbff'],
  },
  Tornado: {
    iconName: 'weather-tornado',
    gradient: ['#83a4d4', '#b6fbff'],
  },
  Clear: {
    iconName: 'weather-sunny',
    gradient: ['#83a4d4', '#b6fbff'],
  },
  Clouds: {
    iconName: 'weather-cloudy',
    gradient: ['#83a4d4', '#b6fbff'],
  },
};

export default function Weather({ temp, condition }) {
  return (
    // <View style={styles.container}>
    <LinearGradient colors={weatherOptions[condition].gradient} style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.halfScren}>
        <MaterialCommunityIcons name={weatherOptions[condition].iconName} size={96} color="white" />
        <Text style={styles.temp}>{temp}°</Text>
      </View>
      <View style={styles.halfScren}>
        <Text>Описание</Text>
      </View>
    </LinearGradient>
    // </View>
  );
}
Weather.propTypes = {
  temp: propTypes.number.isRequired,
  condition: propTypes.oneOf([
    'Thunderstorm',
    'Drizzle',
    'Rain',
    'Snow',
    'Mist',
    'Smoke',
    'Haze',
    'Dust',
    'Fog',
    'Sand',
    'Dust',
    'Ash',
    'Squall',
    'Tornado',
    'Clear',
    'Clouds',
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  halfScren: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  temp: {
    fontSize: 42,
    color: 'white',
    // fontWeight: 300,
  },
});
