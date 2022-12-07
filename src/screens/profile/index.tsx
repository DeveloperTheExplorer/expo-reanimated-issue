
import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
    Button
} from 'react-native-ui-lib';

import { ScreenProps } from '@/types/screens';
import { userStore } from '@/hooks/useSession';

export default function ProfileScreen({ navigation }: ScreenProps<'Profile'>) {
    const { dispatch } = useContext(userStore);

    const logout = () => {
        dispatch(
            {
                type: 'LOGOUT'
            }
        );
    }
    
    return (
        <View style={styles.container}>
            <Text>Open up App.tsx to start working on your app!</Text>
            <Button
                onPress={logout}
            >
                <Text>
                    Log Out
                </Text>
            </Button>
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