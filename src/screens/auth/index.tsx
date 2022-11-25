
import React from 'react';
import { 
    Image,
    SafeAreaView, 
    View 
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { ScreenProps } from '@/types/screens';

import Logo from 'assets/vectors/logo/vertical.svg';
import MetaMaskIcon from 'assets/vectors/icons/metamask.svg';
import Txt from '@/components/Txt';

import { s } from '@/styles';
import styles from './styles';
import Button from '@/components/Button';
import CustomButton from '@/components/CustomButton';

export default function AuthScreen({ navigation }: ScreenProps<'Auth'>) {
    return (
        <SafeAreaView style={s.safeArea}>
            <View style={s.container}>
                <StatusBar style="auto" />
                <View>
                    <Logo
                        width={83}
                        height={69}
                    />
                </View>
                <View>
                    <Txt 
                        center 
                        light
                        variant='h4' 
                        style={styles.header}
                    >
                        Join the community and connect with others!
                    </Txt>

                    <Image
                        source={
                            require('assets/images/auth/bg.png')
                        }
                    />
                </View>
                <View style={styles.buttonsContainer}>
                    <CustomButton 
                        variant='black'
                        style={styles.customButton}
                    >
                        <Txt color={'white'} bold>
                            Login with Metamask
                        </Txt>
                        <MetaMaskIcon 
                            width={28}
                            height={26}
                        />
                    </CustomButton>
                    <CustomButton 
                        variant='primary'
                        style={styles.customButton}
                    >
                        <Txt color={'white'} bold>
                            Register with Metamask
                        </Txt>
                        <MetaMaskIcon
                            width={28}
                            height={26}
                        />
                    </CustomButton>

                    <Button 
                        onPress={
                            () => navigation.navigate('Terms')
                        }
                        variant='white'
                    >
                        View Terms of Use
                    </Button>
                </View>
            </View>
        </SafeAreaView>
    );
}

