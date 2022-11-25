

import React from 'react';
import { StyleProp,TextStyle, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import {
    colors,
    fontColorMap,
    ColorVaraints
} from '@/styles';
import Txt from '../Txt';

interface Props extends TouchableOpacityProps {
    children: React.ReactNode;
    style?: StyleProp<TextStyle>;
    variant?: ColorVaraints;
}

export default function Button({ children, variant, style, ...options }: Props) {
    const selectedVariant: ColorVaraints = variant || 'primary';
    const fontColor = fontColorMap[selectedVariant];

    return (
        <TouchableOpacity
            style={
                [
                    {
                        backgroundColor: colors[selectedVariant],
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignSelf: 'stretch',
                        paddingVertical: 16,
                        borderRadius: 5
                    },
                    style
                ]
            }
            {...options}
        >
            <Txt 
                bold 
                color={fontColor}
            >
                {children}
            </Txt>
        </TouchableOpacity>
    )
}