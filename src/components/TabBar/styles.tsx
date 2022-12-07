import { StyleSheet } from 'react-native';

import { colors } from '@/styles';

export default StyleSheet.create({
    'tabBar-container': {
        backgroundColor: colors.white,
        borderTopColor: '#ccc',
        borderTopWidth: 1,
        flexDirection: 'row'
    },
    'tabBar-button': {
        flexGrow: 1,
        paddingBottom: 40,
        paddingTop: 10,
        backgroundColor: colors.white,
        justifyContent: 'center',
        alignItems: 'center'
    },
    'tabBar-icon-container': {
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    'tabBar-icon-container-active': {
        backgroundColor: `${colors.primary}a0`
    },
    'tabBar-avatar': {
        height: 42,
        width: 42,
        borderRadius: 50
    },
    'tabBar-text': {
        fontFamily: 'Nunito-Bold',
        color: '#222222',
        fontSize: 12,
        marginTop: 5,
        marginBottom: 16
    },
    'tabBar-text-active': { 
        color: colors.primary 
    },
});
