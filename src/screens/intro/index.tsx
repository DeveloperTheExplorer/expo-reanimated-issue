
import { ScreenProps } from '@/types/screens';
import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View, Button } from 'react-native';

export default function IntroScreen({ navigation }: ScreenProps<'Intro'>) {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Text>This is the Intro Screen!</Text>
            <Button
                title='Go to Home'
                onPress={ () => navigation.navigate('Tabs') }
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