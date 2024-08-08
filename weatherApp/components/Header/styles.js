import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    header: {
        marginTop: 80,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    rightContainer: {
        flexDirection: 'row',
        gap: 20,
        marginRight: 20,
    }, 
    leftContainer: {
        marginLeft: 20,
    }
});

export default styles;