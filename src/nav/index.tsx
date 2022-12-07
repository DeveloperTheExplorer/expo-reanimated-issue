import { LinkingOptions, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';
import * as Linking from 'expo-linking';

import IntroScreen from '@/screens/intro';
import { AllScreensParamList } from '@/types/screens';
import TabNav from './tabNav';
import AuthScreen from '@/screens/auth';
import TermsScreen from '@/screens/terms';
import { useContext } from 'react';
import { userStore } from '@/hooks/useSession';

const Stack = createNativeStackNavigator<AllScreensParamList>();
const prefix = Linking.createURL('/', {})
interface Props {
    onReady?: () => void
}

const defaultScreenOptions: NativeStackNavigationOptions = {
    headerShown: false
};

export default function Nav({ onReady }: Props) {
    const { user } = useContext(userStore);
    const introScreenOptions: NativeStackNavigationOptions = {
        ...defaultScreenOptions,
        animationTypeForReplace: !user ? 'pop' : 'push'
    }
    const linking: LinkingOptions<ReactNavigation.RootParamList> = {
        prefixes: [prefix],
        config: {
            screens: {
                Auth: 'auth',
                Intro: 'intro'
            }
        }
    };

    return (
        <NavigationContainer 
            onReady={onReady}
            linking={linking}
        >
            <Stack.Navigator initialRouteName="Intro">
                {
                    user ? (
                        <>
                            <Stack.Screen
                                name="Tabs"
                                component={TabNav}
                                options={defaultScreenOptions}
                            />
                        </>
                    ): (
                        <>
                            <Stack.Screen
                                name="Intro"
                                component={IntroScreen}
                                options={introScreenOptions}
                            />
                            <Stack.Screen
                                name="Auth"
                                component={AuthScreen}
                                initialParams={
                                    {
                                        token: ''
                                    }
                                }
                                options={introScreenOptions}
                            />
                        </>
                    )
                }
                <Stack.Screen 
                    name="Terms" 
                    component={TermsScreen}
                    options={defaultScreenOptions}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}