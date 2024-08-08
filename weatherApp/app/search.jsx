import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import bgImage from '../assets/images/searchCity.jpg'
import SearchScreen from '../components/SearchScreen/index'

export default function search() {
  return (
    <View style={styles.container}>
      <Image source={bgImage} style={styles.backgroundImage} />
      <View style={styles.overlay}>
        <SearchScreen />
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