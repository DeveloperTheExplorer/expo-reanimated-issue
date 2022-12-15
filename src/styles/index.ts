import { StyleSheet } from 'react-native';
import { Typography, Colors, Spacings, ThemeManager, ButtonProps, ViewProps } from 'react-native-ui-lib';
import constants from '@/resources/data/constants';

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


export type ColorVaraints = keyof typeof colors;

export const stateColors = {
    error: '#FF3B3B',
    warning: '#FFCC00',
    info: '#0063F7',
    success: '#06C270',
}

export const colors = {
    primary: '#6726E9',
    secondary: '#C0EB00',
    offWhite: '#EEEEEE',
    white: Colors.rgba(255, 255, 255, 1),
    black: '#111111',
    ...stateColors
};

Colors.loadColors(colors);
Colors.loadSchemes({
    light: {
        bgColor: colors.white,
        fgColor: colors.black,
        moonOrSun: Colors.grey30,
    },
    dark: {
        bgColor: colors.black,
        fgColor: colors.offWhite,
        moonOrSun: Colors.yellow30,
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
        body: true,
        fgColor: true
    });
    
    ThemeManager.setComponentTheme('Button', (props: any) => {

        return {
            style: {
                flexDirection: 'row',
                alignSelf: 'stretch',
                overflow: 'hidden',
                justifyContent: props.spread ? 'space-between' : 'center'
            },
            'paddingV-16': true,
            'bg-primary': true,
            borderRadius: 5
        }
    });

    ThemeManager.setComponentTheme('View', (props: any) => {
        let borderRadius = 0

        if (props['rounded-sm']) {
            borderRadius = 3;
        }

        if (props['rounded-md']) {
            borderRadius = 5;
        }

        if (props['rounded-lg']) {
            borderRadius = 10;
        }

        return {
            width: props['w-full'] ? '100%' : 'auto',
            borderRadius,
        }
    });
}
