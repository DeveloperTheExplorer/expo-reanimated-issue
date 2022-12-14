
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
    Button
} from 'react-native-ui-lib';

import { ScreenProps } from '@/types/screens';

export default function HomeScreen({ navigation }: ScreenProps<'Home'>) {
    return (
        <View style={styles.container}>
            <Text>Open up App.tsx to start working on your app!</Text>
            <Button 
                onPress={
                    () => navigation.navigate('Profile', { userID: 'abcdefg' })
                }
                label='Profile'
            />
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