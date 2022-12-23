import { AntDesign } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import Animated, { Easing, FadeInDown, FadeInUp, FadeOutDown, useAnimatedStyle, useSharedValue, withTiming, WithTimingConfig } from 'react-native-reanimated';
import { Colors, Image, Text, TouchableOpacity, View } from 'react-native-ui-lib';
import Triangle from '../Triangle';
import styles from './styles';

interface Props {
    onPress: () => void;
}


const animConfig: WithTimingConfig = {
    duration: 500,
    easing: Easing.out(Easing.ease)
};

export default function NewPostFab({
    onPress
}: Props) {
    
    return (
        <TouchableOpacity
            center
            bg-bgColor
            style={styles.fab}
            onPress={onPress}
        >
            <AntDesign 
                name="plus" 
                size={24} 
                color={Colors.primary}
            />
        </TouchableOpacity>
    )
}