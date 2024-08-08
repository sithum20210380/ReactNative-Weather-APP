import { View, Text, Image } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import rainIcon from '../../assets/OpenWeatherIcons/10d.png'
import thermometerIcon from '../../assets/OpenWeatherIcons/img_1.png'
import styles from './styles'

export default function index() {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.headerText}>Daily Weather Forecast</Text>
      </View>
      <View style={styles.forecastContainer}>
        <View style={styles.forecastDate}>
          <Text>Wednesday</Text>
          <View style={styles.dateContainer}>
            <AntDesign name="calendar" size={24} color="black" />
            <Text>12/1</Text>
          </View>
        </View>
        <View style={styles.forecastWeather}>
          <View style={styles.weatherTopContainer}>
            <Text>28°C</Text>
            <Image source={rainIcon} style={{width: 50, height: 50}} />
          </View>
          <View style={styles.weatherBottomContainer}>
            <Text>Light Rain</Text>
            </View>
        </View>
        <View style={styles.forecastTemp}>
          <View style={styles.tempTopContainer}>
            <Image source={thermometerIcon} style={{width: 50, height: 50}} />
          </View>
          <View style={styles.tempBottomContainer}>
            <Text style={styles.maxtempText}>Max 28°C</Text>
            <Text style={styles.mintempText}>Min 25°C</Text>
          </View>
        </View>
      </View>

      <View style={styles.forecastContainer}>
        <View style={styles.forecastDate}>
          <Text>thursday</Text>
          <View style={styles.dateContainer}>
            <AntDesign name="calendar" size={24} color="black" />
            <Text>12/1</Text>
          </View>
        </View>
        <View style={styles.forecastWeather}>
          <View style={styles.weatherTopContainer}>
            <Text>28°C</Text>
            <Image source={rainIcon} style={{width: 50, height: 50}} />
          </View>
          <View style={styles.weatherBottomContainer}>
            <Text>Light Rain</Text>
            </View>
        </View>
        <View style={styles.forecastTemp}>
          <View style={styles.tempTopContainer}>
            <Image source={thermometerIcon} style={{width: 50, height: 50}} />
          </View>
          <View style={styles.tempBottomContainer}>
            <Text style={styles.maxtempText}>Max 28°C</Text>
            <Text style={styles.mintempText}>Min 25°C</Text>
          </View>
        </View>
      </View>

      <View style={styles.forecastContainer}>
        <View style={styles.forecastDate}>
          <Text>Friday</Text>
          <View style={styles.dateContainer}>
            <AntDesign name="calendar" size={24} color="black" />
            <Text>12/1</Text>
          </View>
        </View>
        <View style={styles.forecastWeather}>
          <View style={styles.weatherTopContainer}>
            <Text>28°C</Text>
            <Image source={rainIcon} style={{width: 50, height: 50}} />
          </View>
          <View style={styles.weatherBottomContainer}>
            <Text>Light Rain</Text>
            </View>
        </View>
        <View style={styles.forecastTemp}>
          <View style={styles.tempTopContainer}>
            <Image source={thermometerIcon} style={{width: 50, height: 50}} />
          </View>
          <View style={styles.tempBottomContainer}>
            <Text style={styles.maxtempText}>Max 28°C</Text>
            <Text style={styles.mintempText}>Min 25°C</Text>
          </View>
        </View>
      </View>

      <View style={styles.forecastContainer}>
        <View style={styles.forecastDate}>
          <Text>Saturday</Text>
          <View style={styles.dateContainer}>
            <AntDesign name="calendar" size={24} color="black" />
            <Text>12/1</Text>
          </View>
        </View>
        <View style={styles.forecastWeather}>
          <View style={styles.weatherTopContainer}>
            <Text>28°C</Text>
            <Image source={rainIcon} style={{width: 50, height: 50}} />
          </View>
          <View style={styles.weatherBottomContainer}>
            <Text>Light Rain</Text>
            </View>
        </View>
        <View style={styles.forecastTemp}>
          <View style={styles.tempTopContainer}>
            <Image source={thermometerIcon} style={{width: 50, height: 50}} />
          </View>
          <View style={styles.tempBottomContainer}>
            <Text style={styles.maxtempText}>Max 28°C</Text>
            <Text style={styles.mintempText}>Min 25°C</Text>
          </View>
        </View>
      </View>

      <View style={styles.forecastContainer}>
        <View style={styles.forecastDate}>
          <Text>Sunday</Text>
          <View style={styles.dateContainer}>
            <AntDesign name="calendar" size={24} color="black" />
            <Text>12/1</Text>
          </View>
        </View>
        <View style={styles.forecastWeather}>
          <View style={styles.weatherTopContainer}>
            <Text>28°C</Text>
            <Image source={rainIcon} style={{width: 50, height: 50}} />
          </View>
          <View style={styles.weatherBottomContainer}>
            <Text>Light Rain</Text>
            </View>
        </View>
        <View style={styles.forecastTemp}>
          <View style={styles.tempTopContainer}>
            <Image source={thermometerIcon} style={{width: 50, height: 50}} />
          </View>
          <View style={styles.tempBottomContainer}>
            <Text style={styles.maxtempText}>Max 28°C</Text>
            <Text style={styles.mintempText}>Min 25°C</Text>
          </View>
        </View>
      </View>

      <View style={styles.forecastContainer}>
        <View style={styles.forecastDate}>
          <Text>Monday</Text>
          <View style={styles.dateContainer}>
            <AntDesign name="calendar" size={24} color="black" />
            <Text>12/1</Text>
          </View>
        </View>
        <View style={styles.forecastWeather}>
          <View style={styles.weatherTopContainer}>
            <Text>28°C</Text>
            <Image source={rainIcon} style={{width: 50, height: 50}} />
          </View>
          <View style={styles.weatherBottomContainer}>
            <Text>Light Rain</Text>
            </View>
        </View>
        <View style={styles.forecastTemp}>
          <View style={styles.tempTopContainer}>
            <Image source={thermometerIcon} style={{width: 50, height: 50}} />
          </View>
          <View style={styles.tempBottomContainer}>
            <Text style={styles.maxtempText}>Max 28°C</Text>
            <Text style={styles.mintempText}>Min 25°C</Text>
          </View>
        </View>
      </View>

      <View style={styles.forecastContainer}>
        <View style={styles.forecastDate}>
          <Text>Tuesday</Text>
          <View style={styles.dateContainer}>
            <AntDesign name="calendar" size={24} color="black" />
            <Text>12/1</Text>
          </View>
        </View>
        <View style={styles.forecastWeather}>
          <View style={styles.weatherTopContainer}>
            <Text>28°C</Text>
            <Image source={rainIcon} style={{width: 50, height: 50}} />
          </View>
          <View style={styles.weatherBottomContainer}>
            <Text>Light Rain</Text>
            </View>
        </View>
        <View style={styles.forecastTemp}>
          <View style={styles.tempTopContainer}>
            <Image source={thermometerIcon} style={{width: 50, height: 50}} />
          </View>
          <View style={styles.tempBottomContainer}>
            <Text style={styles.maxtempText}>Max 28°C</Text>
            <Text style={styles.mintempText}>Min 25°C</Text>
          </View>
        </View>
      </View>
    </View>
  )
}