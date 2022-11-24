import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    safeArea: {
        backgroundColor: '#fff',
        flex: 1,
    },
    container: {
        flex: 1,
        padding: 42,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
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