import React from 'react';
import { Image, View } from 'react-native';

import Txt from '@/components/Txt';
import { AuthSlide } from '@/data/slides';
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
            <Txt
                light
                center
                variant='h4'
                style={styles.slideText}
            >
                {title}
            </Txt>

            <Image
                source={img}
            />
        </View>
    )
}