import constants from '@/resources/data/constants';
import React, { LegacyRef } from 'react';
import { StyleSheet, Image, ImageStyle } from 'react-native';

interface Props {
    uri: string | null;
    style?: ImageStyle,
}

const Banner = ({ uri, style }: Props) => {
    if (!uri) {
        return <></>
    }

    return (
        <Image
            source={{ uri }}
            style={[
                styles.banner,
                style
            ]}
        />
    )
}

const styles = StyleSheet.create({
    banner: {
        position: 'absolute',
        zIndex: -1,
        top: 0,
        left: 0,
        right: 0,
        width: constants.screenWidth,
        height: constants.screenWidth / 2
    }
});

export default Banner;