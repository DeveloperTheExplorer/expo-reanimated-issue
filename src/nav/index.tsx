import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '@/screens/home';
import IntroScreen from '@/screens/intro';
import { AllScreensParamList } from '@/types/screens';
import TabNav from './tabNav';
import AuthScreen from '@/screens/auth';
import TermsScreen from '@/screens/terms';

const Stack = createNativeStackNavigator<AllScreensParamList>();

interface Props {
    onReady?: () => void
}

export default function Nav({ onReady }: Props) {
    return (
        <NavigationContainer onReady={onReady}>
            <Stack.Navigator initialRouteName="Intro">
                <Stack.Screen 
                    name="Intro" 
                    component={IntroScreen}
                    options={
                        {
                            headerShown: false,
                        }
                    }
                />
                <Stack.Screen 
                    name="Auth" 
                    component={AuthScreen}
                    options={
                        {
                            headerShown: false,
                        }
                    }
                />
                <Stack.Screen 
                    name="Terms" 
                    component={TermsScreen}
                    options={
                        {
                            headerShown: false,
                        }
                    }
                />
                <Stack.Screen 
                    name="Tabs" 
                    component={TabNav} 
                    options={
                        {
                            headerShown: false,
                        }
                    }
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}