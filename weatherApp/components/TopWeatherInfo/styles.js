import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    mainContainer: {
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
        marginBottom: -10,
    },
    dateTime: {
        marginTop: 15,
        marginBottom: -10,
    },
    temperature: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: -14,
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
        fontSize: 34,
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
    bottomContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30,
        width: '100%',
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 20,
    },
    upperTextContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bottomContainermiddleText: {
        color: '#a1a1a1',
        fontSize: 14,
        fontWeight: '500',
    },
    bottomTextContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
    },
    cloudIconBottom: {
        width: 80,
        height: 50,
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
    icons: {
        width: 30,
        height: 30,
    },
});

export default styles;