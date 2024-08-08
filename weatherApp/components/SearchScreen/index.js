import { View, Text, TextInput, StyleSheet, Button, Alert } from 'react-native';
import React, { useState } from 'react';

export default function SearchScreen() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f54fbbe77a3d042576ceabfbd3515665`);
      const data = await response.json();
      if (response.ok) {
        setWeather(data);
      } else {
        Alert.alert('Error', data.message);
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to fetch weather data');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="City Name"
        value={city}
        onChangeText={setCity}
      />
      <Button title="Search" onPress={fetchWeather} />
      {weather && (
        <View style={styles.resultContainer}>
          <Text style={styles.result}>City: {weather.name}</Text>
          <Text style={styles.result}>Temperature: {(weather.main.temp - 273.15).toFixed(2)}°C</Text>
          <Text style={styles.result}>Weather: {weather.weather[0].description}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderRadius: 6,
    paddingHorizontal: 8,
    marginBottom: 16,
    backgroundColor: 'white',
  },
  resultContainer: {
    marginTop: 16,
  },
  result: {
    fontSize: 16,
    marginTop: 8,
  },
});