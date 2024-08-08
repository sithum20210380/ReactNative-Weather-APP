import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    header: {
        marginTop: 80,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    headerText: {
        fontSize: 20,
        fontWeight: '500',
    },
    forecastContainer: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    forecastDate: {
        flexDirection: 'column',
    },
    dateContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
    },
    forecastWeather: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    weatherTopContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
    },
    forecastTemp: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
    },
    maxtempText: {
        color: '#FF7355',
        fontWeight: 'bold',
    },
    mintempText: {
        color: '#559BFF',
        fontWeight: 'bold',
    },
});

export default styles;