import {
    StyleSheet
} from 'react-native';

export default StyleSheet.create(
    {
        container: {
            padding: 42,
        },
        headerText: {
            marginVertical: 32
        },
        triangleContainer: {
            position: 'absolute',
            zIndex: -1,
            width: '180%',
            top: '50%',
            left: '-50%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            transform: [
                {
                    rotate: '-15deg'
                }
            ]
        }
    }
)