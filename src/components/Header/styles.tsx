import { colors } from '@/styles';
import {
    StyleSheet
} from 'react-native';

export default StyleSheet.create(
    {
        container: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 32,
            paddingTop: 8
        },
        headerText: {

        },
        headerBtn: {
            justifyContent: 'center',
            alignItems: 'flex-start',
            width: 50,
            height: 50,
        },
        btnFloat: {
            backgroundColor: colors.white,
            alignItems: 'center',
            borderRadius: 25,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 1,
            },
            shadowOpacity: 0.15,
            shadowRadius: 2.22,
            elevation: 3,
        }
    }
)