
import { ColorValue, StyleProp, Text, TextProps, TextStyle } from 'react-native';

import { 
    colors,
    font, 
    textTypeMap,
    TextVariants
} from '@/styles';

interface Props extends TextProps {
    children: React.ReactNode;
    style?: StyleProp<TextStyle>;
    variant?: TextVariants;
    color?: ColorValue;
    center?: boolean;
    bold?: boolean;
    light?: boolean;
}

export default function Txt(
    { 
        children,
        variant,
        style,
        color,
        center,
        bold,
        light,
        ...options 
    }: Props
) {
    const selectedVariant: TextVariants = variant || 'body';
    const sizeVariant = font.sizes[selectedVariant];
    let typeVariant = textTypeMap[selectedVariant];

    if (bold) {
        typeVariant = font.subHeadingType;
    }
    if (light) {
        typeVariant = font.bodyType;
    }

    return (
        <Text
            style={
                [
                    {
                        fontFamily: typeVariant,
                        fontSize: sizeVariant,
                        color: color || colors.black,
                        textAlign: center && 'center' || 'auto'
                    },
                    style
                ]
            }
            {...options}
        >
            {children}
        </Text>
    )
}