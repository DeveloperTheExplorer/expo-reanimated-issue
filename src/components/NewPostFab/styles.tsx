import constants from '@/resources/data/constants';
import { StyleSheet } from 'react-native';
import { Colors, Shadows } from 'react-native-ui-lib';

const halfScreen = constants.screenWidth / 2;
const FAB_SIZE = 60;
const MARGINS = 16;

export default StyleSheet.create({
    fab: {
        position: 'absolute',
        zIndex: 100,
        top: -FAB_SIZE / 2,
        left: '50%',
        marginLeft: -FAB_SIZE / 2,
        width: FAB_SIZE,
        height: FAB_SIZE,
        borderRadius: FAB_SIZE / 2,
        borderWidth: 2,
        borderColor: Colors.grey70,
        ...Shadows.sh20.bottom,
    }
});