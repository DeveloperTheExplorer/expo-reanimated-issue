import React, { useMemo } from 'react';
import { View, Text, TouchableOpacity } from "react-native";

import { Ionicons } from '@expo/vector-icons'; 
// SVG ICONS

import styles from './styles';

interface IconMapType {
    [key: string]: string
}

export default function TabBar({ state, descriptors, navigation }: any) {
    const focusedOptions = descriptors[state.routes[state.index].key].options;
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

    return (
        <View style={styles["tabBar-container"]}>
            {
                state.routes.map(
                    (route: any, index: Number) => {
                        const { options } = descriptors[route.key];
                        // const label = options.tabBarLabel !== undefined
                        //     ? options.tabBarLabel
                        //     : options.title !== undefined
                        //         ? options.title
                        //         : route.name;
                        const isFocused = state.index === index;
                        const routeIcon = iconMapping[route.name];

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
                                    <Ionicons 
                                        name={routeIcon as any} 
                                        size={24} 
                                        color={isFocused ? 'white' : 'black'} 
                                    />
                                </View>
                            </TouchableOpacity>
                        )
                    }
                )
            }
        </View>
    )
}