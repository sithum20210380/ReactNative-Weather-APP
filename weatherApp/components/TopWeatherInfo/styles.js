import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    mainContainer: {
        //flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    topContainer: {
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

    middleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30,
        width: '100%',
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 20,
    },
    maxTempContainer:{
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5,
    },
    humidityContiner:{
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5,
    },
    windContainer:{
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5,
    },
    middleText: {
        color: '#a1a1a1',
        fontSize: 14,
        fontWeight: 'bold',
    },
    bottomText: {
        color: 'black',
        fontSize: 16,
        fontWeight: '500',
    },
});

export default styles;