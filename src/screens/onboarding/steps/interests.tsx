import React, { useContext, useState } from 'react';
import Animated, { FadeInLeft, FadeOutLeft, FadeOutRight } from 'react-native-reanimated';
import {
    View,
    Text
} from 'react-native-ui-lib';

interface Props {
    
}

export default function InterestsStep({ }: Props) {

    return (
        <Animated.View
            entering={FadeInLeft.delay(500)}
            exiting={FadeOutRight}
        >
            <Text h1>
                Interests Step
            </Text>
        </Animated.View>
    );
}