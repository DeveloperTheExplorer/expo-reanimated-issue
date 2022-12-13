
import React, { useContext, useState } from 'react';
import Animated, { FadeInLeft, FadeOutRight } from 'react-native-reanimated';
import {
    View,
    Image,
    Text,
    Button
} from 'react-native-ui-lib';
import { AntDesign } from '@expo/vector-icons';

import ImageSelector, { ImageFile } from '@/components/ImageSelector';
import constants from '@/data/constants';
import { colors } from '@/styles';
import { TextField } from 'react-native-ui-lib/src/incubator';
import { User } from '@/types';


interface Props {
    userObj: User
}

export default function AboutStep({ userObj }: Props) {
    const [banner, setBanner] = useState<ImageFile>();
    const [avatar, setAvatar] = useState<ImageFile>();
    const bannerHeight = (constants.screenWidth - 84) / 2;

    return (
        <Animated.View
            entering={FadeInLeft.delay(500)}
            exiting={FadeOutRight}
            style={
                {
                    width: '100%'
                }
            }
        >
            <Text h4 light>
                Enter a username
            </Text>
            <TextField 
                marginT-12
                padding-12
                bold
                body
                placeholder='cyrptoMaster123'
                containerStyle={{
                    borderWidth: 1,
                    borderRadius: 5
                }}
                maxLength={15}
            />

            <Text h4 light marginT-42>
                Banner & Profile Picture
            </Text>
            <ImageSelector
                setImage={setBanner}
                aspect={[2, 1]}
                quality={0.5}
            >
                <View
                    marginT-12
                    bg-primary
                    rounded-lg
                    center
                    style={
                        {
                            height: bannerHeight,
                            overflow: 'hidden'
                        }
                    }
                >
                    {
                        !banner && (
                            <AntDesign 
                                name="camerao" 
                                size={42} 
                                color="white"
                            />
                        )
                    }
                    {
                        banner && banner.uri && (
                            <Image 
                                absF
                                cover
                                source={{
                                    uri: banner?.uri
                                }}
                            />
                        )
                    }
                </View>
            </ImageSelector>
            <View
                bg-bgColor
                style={
                    {
                        marginTop: -45,
                        marginLeft: 24,
                        borderRadius: 100,
                        height: 100,
                        width: 100,
                        borderWidth: 2,
                        borderColor: colors.primary,
                        overflow: 'hidden'
                    }
                }
            >
                <ImageSelector
                    setImage={setAvatar}
                    aspect={[1, 1]}
                    quality={0.25}
                >
                    <View
                        bg-bgColor
                        center
                        flexG
                    >
                        {
                            !avatar && (
                                <AntDesign 
                                    name="camerao" 
                                    size={32} 
                                    color={colors.primary}
                                />
                            )
                        }
                        {
                            avatar && avatar.uri && (
                                <Image 
                                    absF
                                    style={{
                                        width: '100%',
                                        height: '100%'
                                    }}
                                    source={{
                                        uri: avatar?.uri
                                    }}
                                />
                            )
                        }
                    </View>
                </ImageSelector>
            </View>
        </Animated.View>
    );
}