import { StyleSheet } from 'react-native';
import { Typography, Colors, Spacings, ThemeManager, ButtonProps } from 'react-native-ui-lib';
import constants from '@/data/constants';

export const s = StyleSheet.create({
    safeArea: {
        backgroundColor: '#fff',
        flex: 1,
    },
    container: {
        flex: 1,
        padding: 42,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    alignCenter: {
        alignItems: 'center'
    },
    justifyCenter: {
        justifyContent: 'center'
    },
})

export const colors = {
    primary: '#6726E9',
    secondary: '#C0EB00',
    offWhite: '#EEEEEE',
    white: '#FFFFFF',
    black: '#111111',
};

export type ColorVaraints = keyof typeof colors;

export const stateColors = {
    error: '#FF3B3B',
    warning: '#FFCC00',
    info: '#0063F7',
    success: '#06C270',
}

Colors.loadSchemes({
    light: {
        bgColor: colors.white,
        fgColor: colors.black,
        primary: colors.primary,
        secondary: colors.secondary,
        offWhite: colors.offWhite,
        moonOrSun: Colors.yellow30,
        
        error: stateColors.error,
        warning: stateColors.warning,
        info: stateColors.info,
        success: stateColors.success,
    },
    dark: {
        bgColor: colors.black,
        fgColor: colors.offWhite,
        primary: colors.primary,
        secondary: colors.secondary,
        offWhite: colors.offWhite,
        moonOrSun: Colors.yellow30,

        error: stateColors.error,
        warning: stateColors.warning,
        info: stateColors.info,
        success: stateColors.success,
    }
});

export const font = {
    headingType: 'Nagoda',
    bodyType: 'Karla',
    subHeadingType: 'Karla-Semibold',
};

export const loadDefaultStyles = () => {
    Typography.loadTypographies({
        h1: { 
            fontSize: 48,
            fontFamily: font.headingType
        },
        h2: { 
            fontSize: 36, 
            fontFamily: font.headingType
        },
        h3: { 
            fontSize: 28, 
            fontFamily: font.headingType
        },
        h4: { 
            fontSize: 24, 
            fontFamily: font.subHeadingType,
        },
        h5: { 
            fontSize: 20, 
            fontFamily: font.subHeadingType,
        },
        h6: { 
            fontSize: 16, 
            fontFamily: font.subHeadingType,
        },
        bodySm: {
            fontSize: 14,
            fontFamily: font.bodyType,
        },
        body: {
            fontSize: 18,
            fontFamily: font.bodyType,
        },
        bodyLg: {
            fontSize: 20,
            fontFamily: font.bodyType,
        },
        bold: {
            fontFamily: font.subHeadingType,
        },
        light: {
            fontFamily: font.bodyType,
        }
    });
    
    Spacings.loadSpacings({
        page: constants.isSmallScreen ? 16 : 20
    });
    
    ThemeManager.setComponentTheme('Text', {
        body: true
    });
    
    ThemeManager.setComponentTheme('Button', (props: ButtonProps) => {

        return {
            style: {
                flexDirection: 'row',
                alignSelf: 'stretch',
                justifyContent: props.spread ? 'space-between' : 'center'
            },
            // centerV: true,
            'paddingV-16': true,
            'bg-primary': true,
            borderRadius: 5
        }
    });
}
