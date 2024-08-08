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
    sunriseContainer: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        padding: 20,
        margin: 20,
        borderRadius: 15,
        gap: 40,
    },
    sunrise: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    sunriseImage: { 
        width: 50, 
        height: 50,
    },
    sunriseTimeText: {
        fontSize: 18,
        fontWeight: '500',
        color: 'grey',
    },
    sunriseText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fa7d00',
    },
    sunset: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 20,
    },
    sunrisetText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FF7355',
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