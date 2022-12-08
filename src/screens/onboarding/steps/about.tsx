
import { User } from '@/hooks/useSession';
import React, { useContext, useState } from 'react';
import Animated, { FadeInLeft, FadeOutLeft, FadeOutRight, SlideInRight } from 'react-native-reanimated';
import {
    View,
    Text
} from 'react-native-ui-lib';

interface Props {
    userObj: User
}

export default function AboutStep({ userObj }: Props) {

    return (
        <Animated.View
            entering={FadeInLeft.delay(500)}
            exiting={FadeOutRight}
        >
            <Text h1>
                About Step
            </Text>
        </Animated.View>
    );
}