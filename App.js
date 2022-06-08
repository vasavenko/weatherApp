import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert } from 'react-native';
import * as Location from 'expo-location';
import Loading from './components/Loading';
import Weather from './components/Weather';
import axios from 'axios';

const API_KEY = '45e07aae16ca1b92262bcdd2401902d7';
const AccuWeather = 'XGCgIULp7YAd5X4tbzKcMUiwdmGDvEtC';

export default class extends React.Component {
  state = {
    isLoading: true,
  };

  getWeather = async (latitude, longitude) => {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );
    this.setState({ isLoading: false, temp: data.main.temp });
    console.log(data);
  };

  getLocation = async () => {
    try {
      // await Location.requestPermissionsAsync();
      await Location.requestForegroundPermissionsAsync();
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      // TODO Сделать запрос к API
      this.getWeather(latitude, longitude);
      // this.setState({ isLoading: false });
      console.log(latitude, longitude, API_KEY);
    } catch {
      Alert.alert('not location');
    }
  };

  componentDidMount() {
    this.getLocation();
  }

  render() {
    const { isLoading, temp } = this.state;
    return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
