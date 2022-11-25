import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    slide: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    slideText: {
        width: '75%',
        marginBottom: 64
    },
    slideTriangles: {
        width: 125,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
});

export default styles;