
import { useLayoutEffect } from 'react';
import { BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TabBar from '@/components/TabBar';
import BlogScreen from '@/screens/blog';
import HomeScreen from '@/screens/home';
import ProfileScreen from '@/screens/profile';
import SearchScreen from '@/screens/search';
import { AllScreensParamList, ScreenProps } from '@/types/screens';


const defaultScreenOptions: BottomTabNavigationOptions = {
    headerShown: false
};
const Tab = createBottomTabNavigator<AllScreensParamList>();

export default function TabNav({ navigation }: ScreenProps<'Tabs'>) {
    useLayoutEffect(() => {
        navigation.setOptions({ tabBarStyle: { display: 'none' } });
    }, [navigation]);


    return (
        <Tab.Navigator 
            initialRouteName="Home" 
            tabBar={props => <TabBar {...props} />} 
        >
            <Tab.Screen 
                name="Home" 
                component={HomeScreen}
                options={defaultScreenOptions}
            />
            <Tab.Screen 
                name="Search" 
                component={SearchScreen}
                options={defaultScreenOptions}
            />
            <Tab.Screen 
                name="Blog" 
                component={BlogScreen}
                options={defaultScreenOptions}
            />
            <Tab.Screen 
                name="Profile" 
                component={ProfileScreen}
                options={defaultScreenOptions}
            />
        </Tab.Navigator>
    );
}
