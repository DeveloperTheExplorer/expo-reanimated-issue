
import React from 'react';
import { StyleProp, TouchableOpacity, View, ViewStyle } from 'react-native';
import { 
    Colors,
    Shadows,
    Text
} from 'react-native-ui-lib';
import { Ionicons } from '@expo/vector-icons';

import { ScreenProps } from '@/types/screens';

import styles from './styles';

export type NavigationProp = Omit<ScreenProps<any>, 'route' | 'children'>

interface Props extends NavigationProp {
    style?: StyleProp<ViewStyle>
    title?: string;
    float?: boolean;
    hideBack?: boolean;
    children?: React.ReactNode;
}

export default function Header({ 
    children,
    float, 
    hideBack,
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
                    style,
                    !float && {
                        backgroundColor: Colors.bgColor,
                        ...Shadows.elev1.bottom
                    }
                ]
            }
        >
            {
                !hideBack && (
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
                )
            }
            <Text
                h4
            >
                {!float ? title : ''}
            </Text>

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