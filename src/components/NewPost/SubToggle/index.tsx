import ImageSelector, { ImageFile } from '@/components/ImageSelector';
import { AntDesign } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import { Button, Image, Shadows, Switch, Text, TouchableOpacity, View } from 'react-native-ui-lib';

interface Props {
    setExclusive: (bool: boolean) => void;
    isExclusive?: boolean;
}

export default function SubToggle({
    isExclusive,
    setExclusive
}: Props) {

    return (
        <View
            row
            spread
            paddingV-16
        >
            <View>
                <Text bold>
                    Subscription Content
                </Text>
                <Text bodySm>
                    Only visible to subscribers.
                </Text>
            </View>
            <Switch 
                value={!!isExclusive}
                onValueChange={setExclusive}
                thumbSize={36}
                height={42}
                width={64}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    imageContainer: {
        overflow: 'hidden',
        borderRadius: 15,
    },
    removeImageBtn: {
        position: 'absolute',
        zIndex: 10,
        top: 10,
        right: 10,
        width: 42,
        height: 42,
        borderRadius: 21
    }
})