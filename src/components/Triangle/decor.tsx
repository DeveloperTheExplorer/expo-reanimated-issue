import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import {
    Svg,
    Path,
    Defs,
    Stop,
    LinearGradient
} from 'react-native-svg';

interface Props {
    style?: StyleProp<ViewStyle>;
    rotate?: string;
}


export default function TriangleDecor({ style, rotate }: Props) {
    const rotation = rotate || '0deg';

    return (
        <Svg
            width="273" 
            height="236" 
            viewBox="0 0 273 236" 
            fill="none"
            style={
                [
                    {
                        transform: [
                            {
                                rotate: rotation
                            }
                        ]
                    },
                    style
                ]
            }
        >
            <Path 
                fillRule="evenodd" 
                clipRule="evenodd" 
                d="M136.233 0L0.0654297 235.848H272.4L136.233 0ZM136.233 10L8.72569 230.848H263.739L136.233 10Z" 
                fill="url(#paint0_linear_532_2556)" 
                fillOpacity="0.15" 
            />
            <Defs>
                <LinearGradient 
                    id="paint0_linear_532_2556" 
                    x1="136.232" 
                    y1="0" 
                    x2="136.232" 
                    y2="314.465" 
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#6726E9" />
                    <Stop offset="1" stopColor="#C0EB00" />
                </LinearGradient>
            </Defs>
        </Svg>

    )
}