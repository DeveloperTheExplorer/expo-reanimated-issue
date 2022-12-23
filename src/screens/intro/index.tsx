
import { useEffect, useState } from 'react';
import { 
    Image,
    SafeAreaView,
    Dimensions
} from 'react-native';
import {
    Button,
    View
} from 'react-native-ui-lib'
import { StatusBar } from 'expo-status-bar';
import Carousel from 'react-native-reanimated-carousel';

import { ScreenProps } from '@/types/screens';
import Logo from 'assets/vectors/logo/vertical.svg';
import { authSlides } from '@/resources/data/slides';

import styles from './styles';
import Slide from './slide';
import Triangle from '@/components/Triangle';
import { s } from '@/styles';

const window = Dimensions.get("window");


export default function IntroScreen({ navigation }: ScreenProps<'Intro'>) {
    const [slideIndex, setSlideIndex] = useState(0);
    
    return (
        <SafeAreaView style={s.safeArea}>
            <View style={s.container}>
                <StatusBar style="auto" />
                <View center>
                    <Logo 
                        width={ 83 }
                        height={ 69 }
                    />
                </View>
                <View
                    style={ s.alignCenter }
                >
                    <Carousel
                        mode='parallax'
                        loop={ false }
                        width={window.width}
                        height={window.height / 2}
                        data={authSlides}
                        scrollAnimationDuration={1000}
                        onScrollEnd={(index) => setSlideIndex(index)}
                        defaultIndex={slideIndex}
                        renderItem={Slide}
                    />
                    <View 
                        style={ styles.slideTriangles }
                    >
                        {
                            authSlides.map(
                                ({ title }, index) => {
                                    const filled = slideIndex === index;

                                    return (
                                        <Triangle
                                            key={ title }
                                            filled={ filled }
                                        />
                                    )
                                }
                            )
                        }
                    </View>
                </View>

                <Button
                    bgColor
                    bold
                    onPress={
                        () => navigation.navigate('Auth')
                    }
                    label='Continue'
                />
            </View>
        </SafeAreaView>
    );
}