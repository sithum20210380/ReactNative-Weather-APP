import { View, Text , Image} from 'react-native'
import React from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Feather from '@expo/vector-icons/Feather';
import sideBarIcon from '../../assets/OpenWeatherIcons/sidebaropen.png'
import styles from './styles'

export default function index() {
    return (
        <View style={styles.header}>
            <View style={styles.leftContainer}>
                <Image source={sideBarIcon} style={styles.SideBarIcon} />
                <MaterialIcons name="refresh" size={24} color="white" />
            </View>
            <View style={styles.rightContainer}>
                <FontAwesome name="star-o" size={24} color="white" />
                <Feather name="search" size={24} color="white" />
            </View>
        </View>
    )
}