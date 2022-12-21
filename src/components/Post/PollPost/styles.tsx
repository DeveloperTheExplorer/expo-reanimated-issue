import { colors } from '@/styles';
import { StyleSheet } from 'react-native';
import { Colors, Shadows } from 'react-native-ui-lib';

export default StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: Colors.grey70,
        borderRadius: 10,
        padding: 12
    },
    option: {
        ...Shadows.sh10.bottom,
        backgroundColor: Colors.bgColor,
        borderRadius: 10,
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderColor: Colors.grey70,
        borderWidth: 2,
        overflow: 'hidden'
    },
    activeOption: {
        borderColor: Colors.primary
    },
    optionRatioView: {
        position: 'absolute',
        zIndex: -1,
        top: 0,
        bottom: 0,
        left: 0,
        opacity: 0.2,
        backgroundColor: Colors.primary
    }
})