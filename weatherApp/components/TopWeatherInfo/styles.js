import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'coloumn',
        alignItems: 'center',
        justifyContent: 'center',
    },
    location: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
    },
    dateTime: {
        marginTop: 15,
    },
    temperature: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    cloudIcon: {
        width: 90,
        height: 90,
        marginRight: 10,
    },
    locationText: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
    },
    dateTimeText: {
        color: 'white',
        fontSize: 18,
    },
    temperatureText: {
        color: 'white',
        fontSize: 58,
    },
    weatherText: {
        color: 'white',
        fontSize: 28,
        fontWeight: 'bold',
    },
});

export default styles;