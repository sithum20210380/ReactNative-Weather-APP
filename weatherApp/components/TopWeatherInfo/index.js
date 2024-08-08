import { View, Text, ActivityIndicator, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { format } from 'date-fns';
import Feather from '@expo/vector-icons/Feather';
import cloudIcon from '../../assets/Icons/04d.png'
import styles from './styles'

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

    //format date
    const formattedDate = format(new Date(), 'eee do MMMM hh:mm a');

    return (
        <View style={styles.mainContainer}>
            <View style={styles.location}>
                <Feather name="map-pin" size={24} color="white" />
                <Text style={styles.locationText}>{weatherDate.name}</Text>
            </View>
            <View style={styles.dateTime}>
                <Text style={styles.dateTimeText}>{formattedDate}</Text>
            </View>
            <View style={styles.temperature}>
                <Text style={styles.temperatureText}>{weatherDate.main.temp}°</Text>
                <Image source={cloudIcon} style={styles.cloudIcon} />
            </View>
            <View style={styles.weather}>
                <Text style={styles.weatherText}>{weatherDate.weather[0].description}</Text>
            </View>
        </View>
    )
}