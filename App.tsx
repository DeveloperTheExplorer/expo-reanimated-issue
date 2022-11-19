import { useCallback, useEffect } from 'react';
import { View, Text } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import Nav from '@/nav';


function App() {
    const [fontsLoaded] = useFonts({
        'Nagoda': require('./assets/fonts/Nagoda/Nagoda.ttf'),
        'Karla': require('./assets/fonts/Karla/Karla-Regular.ttf'),
        'Karla-Semibold': require('./assets/fonts/Karla/Karla-SemiBold.ttf'),
    });

    useEffect(
        () => {
           async function prepare() {
                await SplashScreen.preventAutoHideAsync();
            }
            prepare();
        }, 
        []
    );

    const onLayoutRootView = useCallback(
        async () => {
            if (fontsLoaded) {
                await SplashScreen.hideAsync();
            }
        }, 
        [fontsLoaded]
    );

    if (!fontsLoaded) {
        return null;
    }

    return (
        <Nav 
            onReady={onLayoutRootView}
        />
    );
}

export default App;