import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View, ViewProps } from 'react-native-ui-lib';

interface Props extends ViewProps {
    label?: string;
}

export default function Divider({
    label,
    ...props
}: Props) {

    return (
        <View 
            center
            {...props}
        >
            <View 
                center
                bg-grey50
                style={styles.divider}
            >
            </View>
            {label && (
                <View
                    paddingH-8
                    bg-bgColor
                    style={styles.textContainer}
                >
                    <Text grey20>
                        {label}
                    </Text>
                </View>
            )
            }
        </View>
    )
}


const styles = StyleSheet.create({
    divider: { 
        position: 'absolute',
        zIndex: 9,
        top: '50%',
        width: '100%', 
        height: 1 
    },
    textContainer: {
        zIndex: 10
    }
});