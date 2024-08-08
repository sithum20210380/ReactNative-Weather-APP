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
        flexDirection: 'row',
        gap: 20,
        marginLeft: 20,
    },
    SideBarIcon: {
        width: 20,
        height: 20,
    },
});

export default styles;