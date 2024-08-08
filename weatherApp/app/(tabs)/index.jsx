import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import Header from '../../components/Header/index'
import LocationSection from '../../components/TopWeatherInfo/index'
import bgImage from '../../assets/images/1.jpg'

export default function index() {
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