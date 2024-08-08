import { View, Text, Image, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'
import sunrise from '../../assets/images/sunrise.png'
import sunset from '../../assets/images/sunset.png'
import cloud2 from '../../assets/OpenWeatherIcons/03d.png'
import cloud1 from '../../assets/OpenWeatherIcons/04d.png'

export default function index() {
  const [weatherDate, setWeatherDate] = useState(null)
  const [loading, setLoading] = useState(true)

  //fetch from open weather api
  useEffect(() => {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=lagos&appid=f54fbbe77a3d042576ceabfbd3515665')
      .then((response) => response.json())
      .then((json) => {
        console.log(json)
        setWeatherDate(json)
        setLoading(false)
      })
      .catch((error) => console.error(error))
  }, [])

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }
  return (
    <View style={styles.todayWeatherMainContainer}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Today Weather Forecast</Text>
      </View>
      <View style={styles.sunriseContainer}>
        <View style={styles.sunrise}>
          <Image source={sunrise} style={styles.sunriseImage} />
          <Text style={styles.sunriseTimeText}>6:23 AM</Text>
          <Text style={styles.sunriseText}>Sunrise</Text>
        </View>
        <View style={styles.sunset}>
          <Image source={sunset} style={styles.sunriseImage} />
          <Text style={styles.sunriseTimeText}>6:11 PM</Text>
          <Text style={styles.sunrisetText}>Sunset</Text>
        </View>
      </View>

      <View style={styles.bottomContainer}>
        <View style={styles.maxTempContainer}>
          <View style={styles.upperTextContainer}>
            <Text style={styles.bottomText}>{weatherDate.main.temp_max}°C</Text>
            <Text style={styles.bottomContainermiddleText}>{weatherDate.weather[0].description}</Text>
          </View>
          <View style={styles.bottomTextContainer}>
            <Image source={cloud2} style={styles.cloudIconBottom} />
            <Text style={styles.bottomContainermiddleText}>11.30 AM</Text>
          </View>
        </View>
        <View style={styles.humidityContiner}>
          <View style={styles.upperTextContainer}>
            <Text style={styles.bottomText}>{weatherDate.main.temp_max}°C</Text>
            <Text style={styles.bottomContainermiddleText}>{weatherDate.weather[0].description}</Text>
          </View>
          <View style={styles.bottomTextContainer}>
            <Image source={cloud2} style={styles.cloudIconBottom} />
            <Text style={styles.bottomContainermiddleText}>12.30 PM</Text>
          </View>
        </View>
        <View style={styles.windContainer}>
          <View style={styles.upperTextContainer}>
            <Text style={styles.bottomText}>{weatherDate.main.temp_max}°C</Text>
            <Text style={styles.bottomContainermiddleText}>{weatherDate.weather[0].description}</Text>
          </View>
          <View style={styles.bottomTextContainer}>
            <Image source={cloud1} style={styles.cloudIconBottom} />
            <Text style={styles.bottomContainermiddleText}>1.30 PM</Text>
          </View>
        </View>
      </View>
    </View>
  )
}