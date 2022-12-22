import { AntDesign } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import Animated, { Easing, FadeInDown, FadeInUp, FadeOutDown, useAnimatedStyle, useSharedValue, withTiming, WithTimingConfig } from 'react-native-reanimated';
import { Colors, Image, Text, TouchableOpacity, View } from 'react-native-ui-lib';
import Triangle from '../Triangle';
import styles from './styles';

interface Props {

}


const animConfig: WithTimingConfig = {
    duration: 500,
    easing: Easing.out(Easing.ease)
};

export default function NewPostFab({}: Props) {
    const [isOpen, setIsOpen] = useState(false);
    const fabAnimStyle = useAnimatedStyle(
        () => {
            return {
                borderRadius: 30,
                backgroundColor: withTiming(isOpen ? Colors.secondary : Colors.primary, animConfig),
                transform: [
                    {
                        rotate: withTiming(isOpen ? '315deg' : '0deg', animConfig)
                    }
                ]
            }
        }
    )

    const toggleOpen = () => {
        setIsOpen(prev => !prev);
    }
    
    return (
        <View 
            style={styles.container}
        >
            <Animated.View
                style={[styles.fabContainer, fabAnimStyle]}
            >
                <TouchableOpacity
                    center
                    style={styles.fab}
                    onPress={toggleOpen}
                >
                    <AntDesign 
                        name="plus" 
                        size={24} 
                        color={isOpen ? Colors.fgColor : Colors.bgColor}
                    />
                </TouchableOpacity>
            </Animated.View>
            {
                isOpen && (

                    <Animated.View
                        entering={FadeInDown}
                        exiting={FadeOutDown}
                        style={styles.popupContainer}
                    >
                        <TouchableOpacity
                            padding-10
                            bg-bgColor
                            center
                            style={styles.buttons}
                        >
                            <Image 
                                style={styles.buttonImg}
                                source={
                                    require('assets/images/icons/Post.png')
                                }
                            />
                            <Text bodyXS bold center>
                                Create basic post
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            padding-10
                            bg-bgColor
                            center
                            style={styles.buttons}
                        >
                            <Image 
                                style={styles.buttonImg}
                                source={
                                    require('assets/images/icons/Chart.png')
                                }
                            />
                            <Text bodyXS bold center>
                                Share NFT Chart
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            padding-10
                            bg-bgColor
                            center
                            style={styles.buttons}
                        >
                            <Image 
                                style={styles.buttonImg}
                                source={
                                    require('assets/images/icons/PieChart.png')
                                }
                            />
                            <Text bodyXS bold center>
                                Share Portfolio
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            padding-10
                            bg-bgColor
                            center
                            style={styles.buttons}
                        >
                            <Image 
                                style={styles.buttonImg}
                                source={
                                    require('assets/images/icons/Poll.png')
                                }
                            />
                            <Text bodyXS bold center>
                                Create a Poll
                            </Text>
                        </TouchableOpacity>
                        <View
                            style={styles.popupTriangle}    
                        >
                            <Triangle
                                filled
                            />
                        </View>
                    </Animated.View>
                )
            }
        </View>
    )
}