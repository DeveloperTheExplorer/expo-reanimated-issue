import constants from '@/resources/data/constants';
import { StyleSheet } from 'react-native';
import { Colors, Shadows } from 'react-native-ui-lib';

const halfScreen = constants.screenWidth / 2;
const FAB_SIZE = 60;
const MARGINS = 16;

export default StyleSheet.create({
    container: {
        position: 'absolute',
        zIndex: 55,
        top: -FAB_SIZE / 2,
        left: '50%',
        marginLeft: -FAB_SIZE / 2,
        width: FAB_SIZE,
        height: FAB_SIZE
    },
    fabContainer: {
        width: '100%',
        height: '100%',
        borderRadius: FAB_SIZE / 2,
        ...Shadows.sh20.bottom
    },
    fab: {
        width: '100%',
        height: '100%',
        borderRadius: FAB_SIZE / 2,
    },
    popupContainer: {
        position: 'absolute',
        zIndex: 56,
        top: -115,
        left: -halfScreen + FAB_SIZE / 2 + MARGINS,
        right: -halfScreen + FAB_SIZE / 2 + MARGINS,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: Colors.primary,
        padding: 16,
        borderRadius: 15,
        height: 100,
        ...Shadows.sh30.bottom

    },
    popupTriangle: {
        position: 'absolute',
        bottom: -15,
        left: '50%',
        transform: [
            {
                rotate: '180deg'
            }
        ]
    },
    buttons: {
        width: '23%',
        borderRadius: 10,
    },
    buttonImg: {
        width: 31,
        height: 31
    }
});