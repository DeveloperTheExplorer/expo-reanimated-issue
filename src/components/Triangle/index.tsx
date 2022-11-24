import React, { useEffect } from 'react';
import Animated, {
    StyleProps, 
    useAnimatedStyle, 
    useSharedValue, 
    withTiming, 
    Easing
} from 'react-native-reanimated';
import {
    Svg,
    Polygon,
    G
} from 'react-native-svg';

interface Props {
    style?: StyleProps,
    filled?: boolean;
    color?: string;
    strokeWidth?: string;
}

const AnimatedG = Animated.createAnimatedComponent(G);

export default function Triangle({ style, filled, color, strokeWidth }: Props) {
    const strokeColor = color || '#6726E9';
    const strkWidth = strokeWidth || 2;
    const translateValue = filled ? 0 : 25
    const translate = useSharedValue(translateValue);
    
    const animatedStyle = useAnimatedStyle(
        () => {
            return {
                transform: [
                    {
                        translateY: translate.value
                    }
                ],
            }
        }
    );

    useEffect(
        () => {
            translate.value = withTiming(translateValue, 
                {
                    duration: 500,
                    easing: Easing.exp
                } 
            );
        }, 
        [filled]
    );
    
    
    return (
        <Svg 
            width="25" 
            height="25" 
            viewBox="0 0 25 25" 
            fill="none"
            style={ 
                [
                    {
                        alignItems: 'center',
                        justifyContent: 'center'
                    },
                    style
                ]
            }
        >
            <Polygon 
                points='12.5,4 1,24 24,24'
                stroke={strokeColor} 
                strokeWidth={strkWidth}
            />
            <AnimatedG
                style={ animatedStyle }
                originX='12.5'
            >
                <Polygon 
                    points='12.5,4 1,24 24,24'
                    stroke={strokeColor} 
                    strokeWidth={strkWidth}
                    fill={strokeColor}

                />
            </AnimatedG>
        </Svg>

    )
}