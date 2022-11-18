
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { ScreenProps } from '@/types/screens';

export default function BlogScreen({ navigation }: ScreenProps<'Blog'>) {
    return (
        <View style={styles.container}>
            <Text>Open up App.tsx to start working on your app!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});