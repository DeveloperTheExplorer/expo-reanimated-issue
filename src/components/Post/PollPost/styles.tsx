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
        borderWidth: 2
    },
    activeOption: {
        backgroundColor: Colors.primary
    }
})