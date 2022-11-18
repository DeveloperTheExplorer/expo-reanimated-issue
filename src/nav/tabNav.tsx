
import TabBar from '@/components/TabBar';
import BlogScreen from '@/screens/blog';
import HomeScreen from '@/screens/home';
import ProfileScreen from '@/screens/profile';
import SearchScreen from '@/screens/search';
import { AllScreensParamList } from '@/types/screens';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator<AllScreensParamList>();

export default function TabNav() {
    return (
        <Tab.Navigator 
            initialRouteName="Home" 
            tabBar={props => <TabBar {...props} />} 
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Search" component={SearchScreen} />
            <Tab.Screen name="Blog" component={BlogScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    );
}
