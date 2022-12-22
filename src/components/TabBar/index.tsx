import React, { useContext, useMemo } from 'react';
import { View, Image, TouchableOpacity } from "react-native";

import { Ionicons } from '@expo/vector-icons'; 
// SVG ICONS

import styles from './styles';
import { userStore } from '@/hooks/useSession';
import { Avatar } from 'react-native-ui-lib';
import NewPostFab from '../NewPostFab';

interface IconMapType {
    [key: string]: string
}

interface Route {
    key: string;
    name: string;
    params?: any;
}

export default function TabBar({ state, descriptors, navigation }: any) {
    const { user } = useContext(userStore);
    const focusedOptions = descriptors[state.routes[state.index].key].options;
    const currentRoute: Route = state.routes[state.index];
    const iconMapping: IconMapType = useMemo(
        () => {
            return {
                Home: 'home',
                Search: 'search',
                Blog: 'school',
                Profile: 'person',
            }
        },
        []
    );

    if (focusedOptions.tabBarVisible === false) {
        return null;
    }

    if (currentRoute.name === 'Profile' && currentRoute.params && currentRoute.params.userID) {
        return <React.Fragment />
    }

    return (
        <View style={styles["tabBar-container"]}>
            <NewPostFab />
            {
                state.routes.map(
                    (route: any, index: Number) => {
                        const { options } = descriptors[route.key];
                        const isFocused = state.index === index;
                        const routeIcon = iconMapping[route.name];
                        
                        if (!routeIcon) {
                            return (
                                <React.Fragment
                                    key={`nav-item-${route.name}`}
                                />
                            );
                        }

                        const RoutElement = route.name === 'Profile' ? (
                            <>
                                <Avatar
                                    // style={styles['tabBar-avatar']}
                                    size={ 40 }
                                    source={
                                        {
                                            uri: user!.avatar
                                        }
                                    }
                                />
                            </>
                        ) : (
                            <Ionicons 
                                name={routeIcon as any} 
                                size={24} 
                                color={isFocused ? 'white' : 'black'} 
                            />
                        )

                        const onPress = () => {
                            const event = navigation.emit(
                                {
                                    type: "tabPress",
                                    target: route.key,
                                    canPreventDefault: true
                                }
                            );

                            if (!isFocused && !event.defaultPrevented) {
                                navigation.navigate(route.name);
                            }
                        };

                        const onLongPress = () => {
                            navigation.emit(
                                {
                                    type: "tabLongPress",
                                    target: route.key
                                }
                            )
                        };

                        

                        return (
                            <TouchableOpacity
                                key={`nav-item-${route.name}`}
                                accessibilityRole="button"
                                accessibilityState={isFocused ? { selected: true } : {}}
                                accessibilityLabel={options.tabBarAccessibilityLabel}
                                testID={options.tabBarTestID}
                                onPress={onPress}
                                onLongPress={onLongPress}
                                style={styles["tabBar-button"]}
                            >
                                <View 
                                    style={
                                        [
                                            styles["tabBar-icon-container"],
                                            isFocused && styles['tabBar-icon-container-active']
                                        ]
                                    }
                                >
                                    {
                                        RoutElement
                                    }
                                </View>
                            </TouchableOpacity>
                        )
                    }
                )
            }
        </View>
    )
}