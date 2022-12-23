import constants from '@/resources/data/constants';
import { colors } from '@/styles';
import {
    StyleSheet
} from 'react-native';

export default StyleSheet.create(
    {
        container: {
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignSelf: 'stretch',
            alignItems: 'center',
            paddingHorizontal: 32,
            paddingTop: constants.isAndroid ? 32 : 8,
            zIndex: 99
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