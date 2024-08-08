import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import Header from '../../components/Header/index'
import LocationSection from '../../components/TopWeatherInfo/index'
import dayImage from '../../assets/images/1.jpg'
import nightImage from '../../assets/images/4.jpg'

export default function index() {
  // Get the current hour
  const currentHour = new Date().getHours();

  // Determine which background image to use
  const bgImage = (currentHour >= 18 || currentHour < 6) ? nightImage : dayImage;

  return (
    <View style={styles.container}>
      <Image source={bgImage} style={styles.backgroundImage} />
      <View style={styles.overlay}>
        <Header/>
        <LocationSection/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
  },
})