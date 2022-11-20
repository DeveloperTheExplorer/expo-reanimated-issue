
import { 
    View, 
    Image,
    SafeAreaView,
    Dimensions
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Carousel from 'react-native-reanimated-carousel';

import Txt from '@/components/Txt';
import Button from '@/components/Button';
import { ScreenProps } from '@/types/screens';
import Logo from 'assets/vectors/logo/vertical.svg';
import { AuthSlide, authSlides } from '@/data/slides';

import styles from './styles';

const window = Dimensions.get("window");


export default function IntroScreen({ navigation }: ScreenProps<'Intro'>) {

    
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <StatusBar style="auto" />
                <View>
                    <Logo 
                        width={ 83 }
                        height={ 69 }
                    />
                </View>
                <View>
                    <Carousel
                        loop
                        width={window.width}
                        height={window.height / 2}
                        data={authSlides}
                        scrollAnimationDuration={1000}
                        onSnapToItem={(index) => console.log('current index:', index)}
                        renderItem={
                            ({ index, item }) => {
                                const {
                                    img,
                                    title
                                } = item;
                                
                                return (
                                    <View
                                        style={{
                                            flex: 1,
                                            borderWidth: 1,
                                            justifyContent: 'center',
                                        }}
                                    >
                                        <Txt
                                            light
                                            center
                                            variant='h4'
                                        >
                                            {title}
                                        </Txt>

                                        <Image 
                                            source={img}
                                        />
                                    </View>
                                )
                            }
                            
                        }
                    />
                </View>
                <View>
                    <Txt 
                        light
                        center
                        variant='h4'
                    >
                        See what others are {'\n'}
                        investing in
                    </Txt>
                </View>
                <View>
                </View>

                <Button>
                    Continue
                </Button>
            </View>
        </SafeAreaView>
    );
}