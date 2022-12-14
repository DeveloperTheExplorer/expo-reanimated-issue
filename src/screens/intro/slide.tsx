import React from 'react';
import { Image, View } from 'react-native';
import {
    Text
} from 'react-native-ui-lib';

import { AuthSlide } from '@/resources/data/slides';
import styles from './styles';

interface Props {
    index: number;
    item: AuthSlide;
}

export default function Slide({ item }: Props) {

    const {
        img,
        title
    } = item;

    return (
        <View
            style={styles.slide}
        >
            <Text
                h3
                light
                center
                style={styles.slideText}
            >
                {title}
            </Text>

            <Image
                source={img}
            />
        </View>
    )
}