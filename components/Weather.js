import React from 'react';
import propTypes from 'prop-types';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
// import Ionicons from '@expo/vector-icons/Ionicons'
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
  Thunderstorm: {
    iconName: 'weather-lightning',
    gradient: ['#141E30', '#243B55'],
  },
  Drizzle: {
    iconName: 'weather-rainy',
    gradient: ['#3a7bd5', '#3a6073'],
  },
  Rain: {
    iconName: 'weather-pouring',
    gradient: ['#000046', '#3a6073'],
  },
  Snow: {
    iconName: 'snowflake',
    gradient: ['#83a4d4', '#b6fbff'],
  },
  Mist: {
    iconName: 'weather-fog',
    gradient: ['#606c88', '#3f4c6b'],
  },
  Smoke: {
    iconName: 'weather-windy',
    gradient: ['#56ccf2', '#2f80ed'],
  },
  Haze: {
    iconName: 'weather-haze',
    gradient: ['#3e5151', '#decba4'],
  },
  Dust: {
    iconName: 'weather-windy-variant',
    gradient: ['#b79891', '#94716b'],
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
    gradient: ['#56ccf2', '#2f80ed'],
  },
  Clouds: {
    iconName: 'weather-cloudy',
    gradient: ['#757f9a', '#d7dde8'],
  },
};

export default function Weather({ temp, condition, description, sity }) {
  return (
    // <View style={styles.container}>
    <LinearGradient colors={weatherOptions[condition].gradient} style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.halfScren}>
        <Text style={styles.sity}>{sity}</Text>
        <MaterialCommunityIcons name={weatherOptions[condition].iconName} size={96} color="white" />
        <Text style={styles.temp}>{temp}°</Text>
      </View>
      <View style={[styles.halfScren, styles.textContainer]}>
        <Text style={styles.title}>{condition}</Text>
        <Text style={styles.subtitle}>{description}</Text>
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
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  halfScren: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sity: {
    fontSize: 42,
    color: 'white',
    textAlign: 'center',
  },
  temp: {
    fontSize: 42,
    color: 'white',
    // fontWeight: '500',
  },
  title: {
    color: 'white',
    fontSize: 44,
    fontWeight: '300',
    marginBottom: 10,
    // textAlign: 'left',
    flexWrap: 'wrap',
  },
  subtitle: {
    color: 'white',
    fontWeight: '600',
    fontSize: 24,
    // textAlign: 'left',
    flexWrap: 'wrap',
  },
  textContainer: {
    paddingHorizontal: 30,
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    // alignItems: 'flex-start',
    // flexWrap: 'wrap',
  },
});
