import { StyleSheet } from 'react-native';

export const colors = {
    primary: '#6726E9',
    secondary: '#C0EB00',
    offWhite: '#EEEEEE',
    white: '#FFFFFF',
    black: '#111111',
};

export const stateColors = {
    error: '#FF3B3B',
    warning: '#FFCC00',
    info: '#0063F7',
    success: '#06C270',
}

export const font = {
    headingType: 'Nagoda',
    bodyType: 'Karla',
    subHeadingType: 'Karla-Semibold',
    sizes: {
        h1: 48,
        h2: 36,
        h3: 28,
        h4: 24,
        h5: 20,
        h6: 16,
        bodySm: 14,
        body: 18,
        bodyLg: 20
    }
};

export const textTypeMap = {
    h1: font.headingType,
    h2: font.headingType,
    h3: font.subHeadingType,
    h4: font.subHeadingType,
    h5: font.subHeadingType,
    h6: font.subHeadingType,
    bodySm: font.bodyType,
    body: font.bodyType,
    bodyLg: font.bodyType
}

export type TextVariants = keyof typeof font.sizes;
export type ColorVaraints = keyof typeof colors;

export const s = StyleSheet.create({
    alignCenter: {
        alignItems: 'center'
    },
    justifyCenter: {
        justifyContent: 'center'
    },
})