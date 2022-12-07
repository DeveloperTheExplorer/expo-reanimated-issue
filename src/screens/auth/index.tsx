
import React, { useContext, useEffect } from 'react';
import { 
    Image,
    SafeAreaView, 
    View
} from 'react-native';
import {
    Text,
    Button
} from 'react-native-ui-lib';
import { StatusBar } from 'expo-status-bar';
import * as Linking from 'expo-linking';

import { ScreenProps } from '@/types/screens';
import Logo from 'assets/vectors/logo/vertical.svg';
import MetaMaskIcon from 'assets/vectors/icons/metamask.svg';

import { s } from '@/styles';
import styles from './styles';
import { userStore } from '@/hooks/useSession';

interface RouteParams {
    token?: string;
}

const appPrefixURL = Linking.createURL('/', {})
const metamaskLoginURL = `https://dreamworldnfts.com/_mintall?redirect_uri=${appPrefixURL}`;

export default function AuthScreen({ navigation, route }: ScreenProps<'Auth'>) {
    const { dispatch } = useContext(userStore);
    const { path, params } = route;
    const { token } = params!;

    console.log('token', token);
    console.log('path', path);
    
    const connect = async () => {
        return dispatch(
            {
                type: 'LOGIN'
            }
        );
        
        const isValidURL = await Linking.canOpenURL(metamaskLoginURL);

        console.log('isValidURL', isValidURL);
        console.log('metamaskLoginURL', metamaskLoginURL);
        
        await Linking.openURL(metamaskLoginURL);
    }
    
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
                    <Text 
                        h4
                        center 
                        light
                        fgColor
                        marginB-42
                    >
                        Join the community and connect with others!
                    </Text>

                    <Image
                        source={
                            require('assets/images/auth/bg.png')
                        }
                    />
                </View>
                <View style={styles.buttonsContainer}>
                    <Button 
                        bg-fgColor
                        spread
                        paddingH-32
                        onPress={connect}
                    >
                        <Text bgColor bold>
                            Login with Metamask
                        </Text>
                        <MetaMaskIcon 
                            width={28}
                            height={26}
                        />
                    </Button>
                    <Button 
                        bg-primary
                        spread
                        marginT-12
                        paddingH-32
                        onPress={connect}
                    >
                        <Text bgColor bold>
                            Register with Metamask
                        </Text>
                        <MetaMaskIcon
                            width={28}
                            height={26}
                        />
                    </Button>

                    <Button 
                        bg-bgColor
                        onPress={
                            () => navigation.navigate('Terms')
                        }
                    >
                        <Text primary bold>
                            View Terms of Use
                        </Text>
                    </Button>
                </View>
            </View>
        </SafeAreaView>
    );
}

