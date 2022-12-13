import { StyleSheet } from 'react-native';
import { Colors } from 'react-native-ui-lib';

export default StyleSheet.create({
    mainScrollView: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'transparent',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: -20,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,

        elevation: 5,

    },
    main: {
        backgroundColor: Colors.bgColor
    }
})