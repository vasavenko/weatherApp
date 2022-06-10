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
    const {
      data: {
        main: { temp },
        weather,
      },
    } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );
    this.setState({
      isLoading: false,
      temp: temp,
      condition: weather[0].main,
      description: weather[0].description,
    });
    // console.log(temp);
    // console.log(weather);
    // console.log(weather[0].main);
    // console.log(weather[0].description);
  };

  getSity = async (latitude, longitude) => {
    // const {
    //   data: {
    //     data: { name },
    //   },
    // } =
    const sity = await axios.get(
      `http://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=5&appid=${API_KEY}`
    );
    const country = sity.data[0].country.toLowerCase();
    // console.log(country);
    // this.setState({ sity: sity.data[0].local_names.ml });
    this.setState({ sity: sity.data[0].local_names[country] });
    console.log('name', sity);
    // console.log('name', sity.data[0].name);
    // console.log('country', sity.data[0].country);
    // console.log('name', sity.data[0].local_names);
    // console.log('country name', sity.data[0].local_names[country]);
    // console.log(this.state);
  };

  getLocation = async () => {
    try {
      // await Location.requestPermissionsAsync();
      await Location.requestForegroundPermissionsAsync();
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      // TODO Сделать запрос к API
      // console.log(latitude, longitude, API_KEY);
      this.getWeather(latitude, longitude);
      this.getSity(latitude, longitude);
    } catch {
      Alert.alert('not location');
    }
  };

  componentDidMount() {
    this.getLocation();
  }

  render() {
    const { isLoading, temp, condition, description, sity } = this.state;
    return isLoading ? (
      <Loading />
    ) : (
      <Weather temp={Math.round(temp)} condition={condition} description={description} sity={sity} />
    );
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
