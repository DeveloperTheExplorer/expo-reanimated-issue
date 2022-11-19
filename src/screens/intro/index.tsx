
import { 
    View, 
    Image,
    SafeAreaView
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Txt from '@/components/Txt';
import Button from '@/components/Button';
import { ScreenProps } from '@/types/screens';
import Logo from 'assets/vectors/logo/vertical.svg';

import styles from './styles';
import { colors } from '@/styles';

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
                    <Image 
                        source={
                            require('assets/images/intro/slide-1.png')
                        }
                    />
                </View>

                <Button>
                    Continue
                </Button>
            </View>
        </SafeAreaView>
    );
}