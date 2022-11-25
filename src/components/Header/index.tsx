
import React from 'react';
import { StyleProp, TouchableOpacity, View, ViewStyle } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { ScreenProps } from '@/types/screens';
import Txt from '@/components/Txt';

import styles from './styles';

export type NavigationProp = Omit<ScreenProps<any>, 'route' | 'children'>

interface Props extends NavigationProp {
    style?: StyleProp<ViewStyle>
    title?: string;
    float?: boolean;
    children?: React.ReactNode;
}

export default function Header({ 
    children,
    float, 
    navigation, 
    title, 
    style,
}: Props) {
    const btnStyles = float ? [styles.headerBtn, styles.btnFloat] : styles.headerBtn;

    return (
        <View 
            style={ 
                [
                    styles.container,
                    style
                ]
            }
        >
            <TouchableOpacity
                style={ btnStyles }
                onPress={
                    () => navigation.goBack()
                }
            >
                <Ionicons 
                    name="arrow-back" 
                    size={32} 
                    color="black" 
                />
            </TouchableOpacity>
            <Txt
                variant='h4'
            >
                {!float && title}
            </Txt>

            <View
                style={ children ? btnStyles : styles.headerBtn }
            >
                {
                    children
                }
            </View>
        </View>
    );
}